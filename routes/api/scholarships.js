const express = require("express");
const router = express.Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

// Uploading images
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/scholarships/');
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


// Scholarship Model
const Scholarship = require('../../models/Scholarship');

// @route   GET /api/scholarships
// @desc    Get all scholarships
// @access  Public
router.get('/', async (req, res) => {

    try {
        const scholarships = await Scholarship.find()

            //sort scholarships by date_created
            .sort({ createdAt: -1 })

        if (!scholarships) throw Error('No scholarships found');

        res.status(200).json(scholarships);
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
});

// @route   POST /api/scholarships
// @desc    Create Scholarship
// @access  Have to be private
router.post('/', upload.single('brand_image'), async (req, res) => {

    // const url = req.protocol + '://' + req.get('host')
    // const brand_image = req.file ? url + '/uploads/scholarships/' + req.file.filename : null
    const brand_image = req.file ? req.file.filename : null

    const { title, brand, deadline, markdown, category, sub_category, creator } = req.body;

    // Simple validation
    if (!title || !brand || !deadline || !markdown || !category) {
        return res.status(400).json({ msg: 'There are missing info!' });
    }

    try {
        const newScholarship = new Scholarship({
            title,
            brand,
            brand_image,
            deadline,
            markdown,
            category,
            sub_category,
            creator
        });

        const savedScholarship = await newScholarship.save();

        if (!savedScholarship) throw Error('Something went wrong during creation! file size should not exceed 1MB');

        res.status(200).json({
            _id: savedScholarship._id,
            title: savedScholarship.title,
            brand: savedScholarship.brand,
            brand_image: savedScholarship.brand_image,
            deadline: savedScholarship.deadline,
            markdown: savedScholarship.markdown,
            category: savedScholarship.category,
            sub_category: savedScholarship.sub_category,
            creator: savedScholarship.creator,
            slug: savedScholarship.slug,
        });

    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
});

module.exports = router;