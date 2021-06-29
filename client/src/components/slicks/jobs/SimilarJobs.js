import React from 'react'
import { Media, Alert } from 'reactstrap';

const SimilarJobs = ({ jobs, jobToUse, categoryToUse }) => {

    return (

        <div className="similar-jobs mt-4 mt-lg-2">
            <Alert color="dark">
                Newest jobs
            </Alert>

            {jobs && jobs.allJobs.map((job) => (

                job._id === jobToUse._id ? null :

                <Media key={job._id} className="mt-lg-2 p-3 border-bottom job-title d-flex flex-column flex-lg-row">

                    <Media left href="#" className="m-auto d-flex justify-content-center align-items-center">
                        <img src={job.brand_image} alt={job.brand} />
                    </Media>

                    <Media body>
                        <Media heading className="p-2 py-lg-0 mb-0 h-100 d-flex flex-column justify-content-between">
                            <h5 className="text-info my-0">
                                <a href={`/slickJob/${job._id}`}>{job.title}</a>
                            </h5>

                            <div className="d-flex flex-column flex-lg-row justify-content-between text-secondary m-0">
                                <p className="mb-1">{job.brand}</p>
                            </div>

                            <div className="d-flex justify-content-between text-muted align-bottom">
                                <small>
                                    {categoryToUse && categoryToUse.sub_category.find(subcat => subcat._id === job.sub_category).name}
                                </small>

                                <small className="mb-0">
                                    Deadline: {new Date(job.deadline).toLocaleDateString()}
                                </small>
                            </div>
                        </Media>

                    </Media>

                </Media>
            ))}
        </div>
    )
}

export default SimilarJobs