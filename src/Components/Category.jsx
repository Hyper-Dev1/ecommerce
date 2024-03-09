// import React from 'react'

const Category = () => {
  return (
    <>
      <div className="cat-hero">
        <div className="cat-hero-desc">
          <h2>Hello</h2>
          <div className="breadcrumbs">
            <p>
              Shop / <span>Category</span>
            </p>
          </div>
        </div>
        <div className="cat-hero-img">
          <img src="" alt="" />
        </div>
      </div>
      <div className="product-list">
        <div className="list-head">
          <h2>Categories</h2>
          <label htmlFor="sortby"> Sort By:
            <select name="sort" id="sortby">
              <option value="Popular">Popular</option>
              <option value="Latest">Latest</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: Hight to Low">Price: Hight to Low</option>
            </select>
          </label>
          <div className="product-view">
            <p>View As: </p>
            <button>Grid</button>
            <button>List</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category
