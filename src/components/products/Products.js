import React, { useState } from 'react';
import './style.css';
import Data from '../../Data';
import { Link } from 'react-router-dom';

const Products = () => {
    const [search, setSearch] = useState("");

    return (
        <>
            <div className='Products'>
                {Data?.filter(item => item.title.includes(search)).map((value, index) => {
                    return (
                        <div className="card" key={index}>
                            <Link to={`singelPage/${value.id}`}>
                                <div className="card-image">
                                    <img src={value.images[0]} alt="" />
                                </div>
                            </Link>
                            <div className='card-content'>
                                <div className='card-title'>
                                    <h3>{value.title}</h3>
                                </div>
                                <div className='card-text'>
                                    <p>{value.price}</p>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Products;
