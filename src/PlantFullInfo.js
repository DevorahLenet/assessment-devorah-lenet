import React from 'react'

export default function PlantFullInfo(props) {
                
    const data = props.dataToList
    const dataDisplay = []
    for (const item in data) {
        dataDisplay.push(data[item])
    }

    return (
        <div>{dataDisplay}</div>
    )
}