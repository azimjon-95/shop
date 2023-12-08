import React from 'react';
// import './';
import { useParams } from 'react-router-dom';
import Data from '../../Data'



const SingelPage = () => {


    const { id } = useParams()


    const result = Data.filter(i => i.id === id)

    console.log(result);

    return (
        <div>


        </div>
    )
}

export default SingelPage;