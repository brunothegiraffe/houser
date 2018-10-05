import React from 'react';

export default function House( props ) {
    
    return(
        <div>
            <h1>House</h1>
            <div className='house'>
                <p>{ props.property_name }</p>
                <p>{ props.address }</p>
                <p>{ props.city }</p>
                <p>{ props.state }</p>                
                <p>{ props.zip }</p>
            </div>
            <button>Delete House</button>
        </div>
    )
}