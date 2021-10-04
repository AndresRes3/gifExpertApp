import React from 'react'

export const GifGriditem = ( props ) => {
    // console.log(props);
    return (
        <div className="card animate__backInDown">
            <img src={props.url} alt={props.title}/>
            <p>{props.title}</p>
        </div>
    )
}
