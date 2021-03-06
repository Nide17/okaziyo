const express = require("express");
const router = express.Router();
const { auth, authRole } = require('../../middleware/auth');
const { jobUpload } = require('./utils/jobUpload.js');

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
// @desc    Create Job & upload a brand_image
// @access  Have to be private
router.post("/", jobUpload.single("brand_image"), auth, authRole(['Admin']), async (req, res) => {

    const b_image = req.file ? req.file : null
    const { title, brand, deadline, markdown, category, sub_category, creator } = req.body;

    // Simple validation
    if (!title || !brand || !deadline || !markdown || !category) {
        return res.status(400).json({ msg: 'There are missing info!' });
    }

    try {
        const newJob = new Job({
            title,
            brand,
            brand_image: b_image.location,
            deadline,
            markdown,
            category,
            sub_category,
            creator
        });

        const savedJob = await newJob.save();

        if (!savedJob) throw Error('Something went wrong during creation! file size should not exceed 1MB');

        res.status(200).json({
            _id: savedJob._id,
            title: savedJob.title,
            brand: savedJob.brand,
            brand_image: savedJob.brand_image,
            deadline: savedJob.deadline,
            markdown: savedJob.markdown,
            category: savedJob.category,
            sub_category: savedJob.sub_category,
            creator: savedJob.creator,
            slug: savedJob.slug,
        });

    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
});

module.exports = router;