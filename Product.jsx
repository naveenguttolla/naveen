import React,{useState,useEffect} from 'react';

import { useParams } from 'react-router-dom';

import{Link} from'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';


const Product = () =>{
    const {id} = useParams();
    const [product,setProduct] = useState([]);
    const [loading,setLoading] =useState(false);

    
        useEffect(()=>{
            const getProduct = async () =>{
                setLoading(true);
                const response = await fetch (`https://dummyapi.online/api/products/${id}`)
                setProduct (await response.json());
                setLoading(false);}            
            getProduct();
        },[]);

        const Loading = () =>{
            return(
                <>
                <div className='col-md-6'>
                    <skeleton height = {400}/>
                    </div>
                    <div className='col-md-6'>
                        <skeleton/>
                    </div>
                
                
                </>
            )
        }
        const ShowProduct = () =>{
            return(
                <>
                <div className='col-md-6'>
                    <img src={product.featuredImage} alt={product.name} height="400px" width="400px"/>
                </div>
                <div className='col-md-6'>
                    <h4 className='text-uppercase text-success'>{product.name}</h4>
                    <h1 className='display-5'>{product.brand}</h1>
                    <p className='lead'>
                        {product.basePrice&&product.stock.rate}&nbsp;
                        <i className='fa fa-star'></i>
                    </p>
                    <h4 className='display-6 fw-bolder text-danger'>
                    basePrice  {product.basePrice}
                
                    </h4>
                    <p className='lead'>{product.featuredImage}</p>
                   
                        </div>
                </>
            )
        }
        return(
            <div>
<div className='container py-5'>
    <div className='row py-5'>
        {loading? <Loading/> : <ShowProduct/>}

            </div>
            </div>
            </div>
        )
}
       
export default Product
