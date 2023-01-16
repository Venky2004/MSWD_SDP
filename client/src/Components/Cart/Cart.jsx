import React from 'react'
import './cart.css'
import '../Search/Search'
import SearchBar from '../Search/Search'
import {AiFillStar} from 'react-icons/ai'

const category_data=[
    {
        name:"All",
        id:'all'
    },
    {
        name:"Fruits",
        id:'fruits'
    },
    {
        name:"Vegetables",
        id:'vegetables'
    },
    {
        name:"Pulses",
        id:'pulses'
    },
    {
        name:"Grains",
        id:'grains'
    },
]

const Cart = () => {
  return (
    <div className='container cart_container'>
   <h1>Shop</h1>
   <h5>Search for the products you need</h5>
   <div className="cart_filter">
    <div className="cart_product_search">
        <h5>Search</h5>
<SearchBar placeholder="Enter the Product Name"/>
    </div>
   <div className="cart_categories">
     <h5>Category</h5> 
   <select name="fruits" id="#fruits">
    {category_data.map((val,key)=>{
        return(
            <option value={val.id} className="category_options">{val.name} </option>
        )
    }

    )}
   </select>   
   </div>
   <div className="cart_sorts">
    <h5>Sort by</h5>
      <div className="sort_options">
        <input type="checkbox" value="type"/>Deliverable
        <div className="price_options">
        <h5>Price</h5>
        <div className="radio_buttons">
        <input type="radio" /><p>Price Low to High</p>
        </div>
        <div className="radio_buttons">
        <input type="radio" />Price High to Low
        </div>
        <div className="price_range">
        <input type="number" placeholder='₹'/> to <input type="number" placeholder='₹'/>
        </div>

      </div>
      <div className="review_options">
        <h5>Review</h5>
        <div className="check_box">
        <input type="checkbox" /><p> <AiFillStar/></p>
        </div>
        <div className="check_box">
        <input type="checkbox" /><p> <AiFillStar/><AiFillStar/></p>
        </div>
        <div className="check_box">
        <input type="checkbox" /><p> <AiFillStar/><AiFillStar/><AiFillStar/></p>
        </div>
        <div className="check_box">
        <input type="checkbox" /><p> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
        </div>
        <div className="check_box">
        <input type="checkbox" /><p> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
        </div>
        
      </div>
        </div>
   </div>
   </div>
   <div className="cart_products_page">

   </div>
    </div>
  )
}

export default Cart