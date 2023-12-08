import React, { useState } from 'react';
import './style.css';
import Data from '../../Data'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const Products = () => {

    const [search, setSearch] = useState("")

    return (
        <>
            <br />
            <div className="searchBar">
                <input onChange={(e) => setSearch(e.target.value)} type="text" name="" id=""/>
                <button><FaSearch/></button>
            </div>
            <div className='Products'>
                {/* {Data?.filter(i => i.title === search).map((value, inx) => { */}
                {Data?.map((value, inx) => {
                    return (
                        <div className="Cerd">
                            <Link to={`singelPage/${value.id}`}>
                                <div className="imgBox">
                                    <img src={value.images[0]} alt="" />
                                </div>
                            </Link>
                            <h3>{value.title}</h3>
                            <p>{value.price}</p>
                        </div>
                    )
                })
                }

            </div>
        </>
    )
}

export default Products