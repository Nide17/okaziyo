const express = require("express");
const router = express.Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

// Uploading images
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads');
    },
    filename: (req, file, callback) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        callback(null, uuidv4() + '-' + fileName)
    }
});

const fileFilter = (req, file, callback) => {

    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];

    if (allowedFileTypes.includes(file.mimetype)) {
        callback(null, true);
    } else {
        callback(null, false);
    }
}

var upload = multer({
    storage,
    limits: {
        fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter
});


// Item Model
const Item = require('../../models/Item');

const { auth, authRole } = require('../../middleware/auth');

// @route   GET /api/items
// @desc    Get all items
// @access  Public
router.get('/', async (req, res) => {

    try {
        const items = await Item.find()
            //sort items by date_created
            .sort({ date_created: -1 })
            .populate('category')
            .populate('creator')

        if (!items) throw Error('No items found');

        res.status(200).json(items);
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
});

// @route   GET /api/items/:id
// @desc    Get one item
// @access  Needs to be private
// router.get('/:id', auth, async (req, res) => {
router.get('/:id', async (req, res) => {

    let id = req.params.id;
    try {
        //Find the item by id
        await Item.findById(id, (err, item) => {
            res.status(200).json(item);
        })
            // Use the name of the schema path instead of the collection name
            .populate('category')
            .populate('creator')

    } catch (err) {
        res.status(400).json({
            msg: 'Failed to retrieve! ' + err.message,
            success: false
        });
    }

});

// @route   POST /api/items
// @desc    Create item
// @access  Have to be private

// router.post('/', auth, authRole(['Creator', 'Admin']), async (req, res) => {
router.post('/', upload.array('pictures', 10), async (req, res) => {

    const pictures = [];
    const url = req.protocol + '://' + req.get('host')

    for (var i = 0; i < req.files.length; i++) {
        pictures.push(url + '/uploads/' + req.files[i].filename)
    }

    const { title, description, brand, price, category, sub_category, contactNumber, creator } = req.body;

    // Simple validation
    if (!title || !description || !brand || !price || !category || !sub_category || !contactNumber) {
        return res.status(400).json({ msg: 'There are missing info!' });
    }

    try {
        const newItem = new Item({
            title,
            description,
            brand,
            price,
            pictures,
            category,
            sub_category,
            contactNumber,
            creator
        });

        const savedItem = await newItem.save();

        if (!savedItem) throw Error('Something went wrong during creation! file size should not exceed 1MB');

        res.status(200).json({
            _id: savedItem._id,
            title: savedItem.title,
            description: savedItem.description,
            brand: savedItem.brand,
            price: savedItem.price,
            pictures: savedItem.pictures,
            sub_category: savedItem.sub_category,
            contactNumber: savedItem.contactNumber,
            category: savedItem.category,
            creator: savedItem.creator
        });

    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
});


// @route PUT api/items/:id
// @route UPDATE one Item
// @route Private: Accessed by admin only

// router.put('/:id', auth, authRole(['Creator', 'Admin']), async (req, res) => {
router.put('/:id', async (req, res) => {

    try {
        //Find the Item by id
        const updatedItem = await Item.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        res.status(200).json(updatedItem);

    } catch (error) {
        res.status(400).json({
            msg: 'Failed to update! ' + error.message,
            success: false
        });
    }
});


// @route DELETE api/items/:id
// @route delete a Item
// @route Private: Accessed by admin only
//:id placeholder, findById = we get it from the parameter in url

// router.delete('/:id', auth, authRole(['Creator', 'Admin']), async (req, res) => {
router.delete('/:id', async (req, res) => {

    try {
        const item = await Item.findById(req.params.id);
        if (!item) throw Error('Item is not found!')

        const removedItem = await Item.remove();

        if (!removedItem)
            throw Error('Something went wrong while deleting!');

    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        });
    }
});

module.exports = router;