import React from 'react';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGriditem } from './GifGriditem';

export const GifGrid = ({category}) => {

    const {data,loading} = useFetchGifs(category);
    // const [images, setImages] = useState([]);

   

    return (
        <>
         <h3 className ="animate__fadeInRight"> {category} </h3>

         {loading && <p className= "animate__swing" >Loading</p>}

            <div className = "card-grid">
                {
                    data.map( img  =>(
                        <GifGriditem
                        key={img.id}
                        {...img} />
                    ))
                }
            </div>
        </>
    )
}
