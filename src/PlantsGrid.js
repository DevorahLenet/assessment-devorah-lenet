import React from 'react'

export default function PlantsGrid(props) {

    return (
        <div className="container">
                <p>{props.category}</p>
                <p>{props.family}</p>                      
            
        </div>
    )
}