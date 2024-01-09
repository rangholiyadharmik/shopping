import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaBars } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from "react-router-dom";
// import Rating from '@mui/material/Rating';

function App() {

    const [productdata,setproductdata]= useState([]);
    const [category, setcategory] = useState([]);
    

//   const myfun = (items) => {
  
          
//     axios.get(`https://dummyjson.com/products/category/${items}`)
//     .then(function (response) {
//         console.log(response.data.products);
//         setproductdata(response.data.products);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//   }
  
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
        .then(function (response) {
            console.log(response.data.products);
            setproductdata(response.data.products);
        })
        .catch(function (error) {
            console.log(error);
        })
  
    // axios.get('https://dummyjson.com/products/categories')
    //     .then(function (response) {
    //         console.log(response.data);
    //         setcategory(response.data);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
   
  }, []) 
   
  return (
    <>
            <section className="py-5">
                <h1 className='mb-5 text-center'>All Products</h1>
                <div className="container">
                    <div className="row">
                        {
                            productdata.map((item) => {
                                return (
                                   
                                        <div className="col-lg-4 col-md-6 mb-5">
                                            <div className="card product_card mb-3 h-100 mx-2">
                                                <div className="product_img">
                                                    <img src={item.thumbnail} className='w-100' alt="" />
                                                </div>
                                                <div className="card-body pb-0 ps-4">
                                                    <ul>
                                                        <li>
                                                            <h3 className="pb-2 fw-bold">{item.title}</h3>
                                                        </li>
                                                        <li className="pb-2">
                                                                <p className="text-muted m-0" style={{ textAlign: 'justify' }}>
                                                                {item.description}
                                                            </p>
                                                        </li>
                                                        <li className='py-1 d-flex align-items-center'>
                                                            <span className="me-2 fw-bold">Ratings</span>
                                                            {/* <Rating name="half-rating-read" value={item.rating} precision={0.5} readOnly /> */}
                                                        </li>
                                                        <li className='py-1'>
                                                            <span className="fw-bold">Price</span>
                                                            <span className="fw-bold fs-5 text-danger ms-3">
                                                                ${(item.price) - ((item.price) * (item.discountPercentage)) / 100}
                                                            </span>
                                                            <span className="fw-bold fs-6 text-muted text-decoration-line-through ms-2">${item.price}</span>
                                                        </li>
                                                        <li className='pt-1'>
                                                            <span className="fw-bold">Hurry up! available stocks are</span>
                                                            <span className='fw-bold text-success ms-2'>{item.stock}.</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <div className="px-3">
                                                    <Link to={`/product/${item.id}`} className="btn btn-outline-primary w-100 mx-auto mb-3 rounded-0 text-decoration-none">Product Details Views</Link>
                                                </div> */}
                                            </div>
                                        </div>
                                   
                                )
                            })
                        }
                    </div>
                </div>
            </section>
    </>
  
  );
  
}

export default App;
