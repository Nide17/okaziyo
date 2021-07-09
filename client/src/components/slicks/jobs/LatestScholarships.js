import React from 'react'
import { Media, Alert } from 'reactstrap';

const LatestScholarships = ({ scholarships }) => {

    return (

        scholarships.isLoading ? null :

        <div className="similar-jobs mt-4 mt-lg-2">
            <Alert color="dark">
                Newest scholarships
            </Alert>

            {scholarships && scholarships.allScholarships.map((scholarship) => (

                <Media key={scholarship._id} className="mt-lg-2 p-3 border-bottom job-title d-flex flex-column flex-lg-row">

                    <Media left href="#" className="m-auto d-flex justify-content-center align-items-center">
                        <img src={scholarship.brand_image} alt={scholarship.brand} />
                    </Media>

                    <Media body>
                        <Media heading className="p-2 py-lg-0 mb-0 h-100 d-flex flex-column justify-content-between">
                            <p className="text-info mt-0 mb-2">
                                <a href={`/slickScholarship/${scholarship._id}`}>{scholarship.title}</a>
                            </p>

                            <div className="d-flex flex-column flex-lg-row justify-content-between text-secondary m-0">
                                <p className="mb-1">{scholarship.brand}</p>
                            </div>

                            <div className="d-flex justify-content-between text-muted align-bottom">
                                <small className="mb-0">
                                    Deadline: {new Date(scholarship.deadline).toLocaleDateString()}
                                </small>
                            </div>
                        </Media>
                    </Media>

                </Media>
            ))}
        </div>
    )
}

export default LatestScholarships