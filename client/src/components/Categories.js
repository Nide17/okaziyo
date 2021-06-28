import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../redux/categories/categories.actions'
import ReactLoading from "react-loading";

const Categories = ({ categories, getCategories }) => {

    // Lifecycle methods
    useEffect(() => {
        getCategories();
    }, [getCategories]);

    return (
        <section className="categories d-none d-lg-block">

            <ul className="categories-list">

                {categories.isLoading ?
                    <div className="d-flex justify-content-center align-items-center">
                        <ReactLoading type="bars" color="#33FFFC" />
                    </div> :

                    <>
                        {categories && categories.allCategories.map(category => (
                            <li className="category-item dropdown" key={category._id}>
                                <a href={`/${category.title.toLowerCase()}`}>
                                    {category.title}</a> &nbsp;
                                <i className="fa fa-angle-down"></i>

                                {/* dropdown */}
                                <ul className="dropdown-menu">
                                    {category && category.sub_category.map(subc => (
                                        <li key={subc._id}>
                                            <a className="dropdown-item px-1" href={`/${subc.name.toLowerCase().split(" ")[0]}`}>
                                                {subc.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </>
                }

            </ul>
        </section>
    )
}

const mapStateToProps = state => ({
    categories: state.categoriesReducer
})

export default connect(mapStateToProps, { getCategories })(Categories)