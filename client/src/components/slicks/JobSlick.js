import React, { lazy, Suspense } from 'react'
import Slider from 'react-slick'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import './slickItem.css'
import settings from './slickSettings'
const NewSlickItem = lazy(() => import('./NewSlickItem'));

const JobSlick = () => {
  const jobs = [
    {
      id: 1,
      name: "Job 1"
    },
    {
      id: 2,
      name: "Job 2"
    },
    {
      id: 3,
      name: "Job 3"
    },
    {
      id: 4,
      name: "Job 4"
    },
    {
      id: 5,
      name: "Job 5"
    },
    {
      id: 6,
      name: "Job 6"
    },
    {
      id: 7,
      name: "Job 7"
    },
    {
      id: 8,
      name: "Job 8"
    }
  ]

  return (

    <section className="container featured">
      <div className="container">
        <h1 className="lead text-left mb-4">New Jobs</h1>
        <Slider {...settings}>
          {
            jobs && jobs.map((job, id) => (
              <Suspense key={id} fallback={<div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>}>
                <NewSlickItem key={id} slickItem={job} />
              </Suspense>
            ))
          }
        </Slider>
      </div>
    </section>

  )
}

export default JobSlick
