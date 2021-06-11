import React, { lazy, Suspense } from 'react'
import Slider from 'react-slick'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import './slickItem.css'
import settings from './slickSettings'
const NewSlickItem = lazy(() => import('./NewSlickItem'));

const ScholarshipSlick = () => {
    const scholarships = [
        {
            id: 1,
            name: "Scholarship 1"
        },
        {
            id: 2,
            name: "Scholarship 2"
        },
        {
            id: 3,
            name: "Scholarship 3"
        },
        {
            id: 4,
            name: "Scholarship 4"
        },
        {
            id: 5,
            name: "Scholarship 5"
        },
        {
            id: 6,
            name: "Scholarship 6"
        },
        {
            id: 7,
            name: "Scholarship 7"
        },
        {
            id: 8,
            name: "Scholarship 8"
        }
    ]

    return (

        <section className="container featured">
            <div className="container">
                <h1 className="lead text-left mb-4">New Scholarships</h1>
                <Slider {...settings}>
                    {
                        scholarships && scholarships.map((scholarship, id) => (
                            <Suspense key={id} fallback={<div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>}>
                                <NewSlickItem key={id} slickItem={scholarship} />
                            </Suspense>
                        ))
                    }
                </Slider>
            </div>
        </section>

    )
}

export default ScholarshipSlick
