import React, { useState } from 'react';
import "./singlepage.css"
import { useParams } from 'react-router-dom';
import Data from '../../Data'



const SingelPage = () => {

    const { id } = useParams()

  const result = Data.find(item => item.id === parseInt(id, 10));

    console.log(result);

   

    return (
        <div className='Card'>
      {result ? (
        <>  
          <img src={result.images[0]} alt="" />
          <h1>{result.title}</h1>
          <p>narxi : {result.price}</p>
          <p>{result.description}</p>
          <p>sizes : {result.sizes}</p>
          { }
        </>
      ) : (
        <div>Элемент не найден</div>
      )}
    </div>
    )
}

export default SingelPage;