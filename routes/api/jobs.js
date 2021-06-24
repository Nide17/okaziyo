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


// Job Model
const Job = require('../../models/Job');

// @route   GET /api/jobs
// @desc    Get all jobs
// @access  Public
router.get('/', async (req, res) => {

    try {
        const jobs = await Job.find()

            //sort jobs by date_created
            .sort({ createdAt: -1 })

        if (!jobs) throw Error('No jobs found');

        res.status(200).json(jobs);
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
});

// @route   POST /api/jobs
// @desc    Create Job
// @access  Have to be private
router.post('/', upload.single('brand_image'), async (req, res) => {

    const url = req.protocol + '://' + req.get('host')
    const brand_image = req.file ? url + '/uploads/' + req.file.filename : null

    const { title, markdown, brand, deadline, category, sub_category, creator } = req.body;

    // Simple validation
    if (!title || !brand || !brand || !markdown || !deadline) {
        return res.status(400).json({ msg: 'There are missing info!' });
    }

    try {
        const newJob = new Job({
            title,
            brand,
            brand_image,
            markdown,
            deadline,
            creator,
            category,
            sub_category
        });

        const savedJob = await newJob.save();

        if (!savedJob) throw Error('Something went wrong during creation! file size should not exceed 1MB');

        res.status(200).json({
            _id: savedJob._id,
            title: savedJob.title,
            markdown: savedJob.markdown,
            slug: savedJob.slug,
            creator: savedJob.creator,
            brand_image: savedJob.brand_image,
            deadline: savedJob.deadline,
            brand: savedJob.brand,
            category: savedJob.category,
            sub_category: savedJob.sub_category,
        });

    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
});

module.exports = router;