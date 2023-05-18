
import React from 'react'
import PlantsGrid from "./PlantsGrid"
import PlantFullInfo from "./PlantFullInfo"

/*Obviously many of the points in the spec were not 
fullfilled. Please keep in mind that I'm newish to React
(I started learning it about 1.5-2 weeks before doing this assesment). 
I'm confident that with even just a bit more practice
my speed will increase and I'll be able to do much
more of that project or any project in a smaller amount
of time.

Regarding my job application in general, I'd like to 
refer you to Faige Herman as a referrence. I worked under
her in my previous position at Tangoe. She mentioned
that she worked at Integralytic in the past and would 
be happy serve as a reference for me. */

export default function App() {
    const [data, setData] = React.useState([])
    const [search, setSearch] = React.useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9a0cf124a0msha7ed7c209db0de7p152af7jsn135da5d48410',
            'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
        }
        }


    React.useEffect(function() {
        fetch("https://house-plants2.p.rapidapi.com/all-lite", options)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
        console.log("data set")
    }, [])
    
    function handleChange(event) {
        setSearch(event.target.value)
    }
    
    const plantElements = data.map(plantObj => {
        return <PlantsGrid key={plantObj.id} family={plantObj.Family} category={plantObj.Categories} />})

    const onePlantData = data[0]


    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="search by family"
                    onChange={handleChange}
                />
            </form>
            <div className="container">
                <p>Family:</p>
                <p>Category:</p>
            </div>
            {plantElements}
            <PlantFullInfo 
                dataToList = {onePlantData}
            />
        </div>
    );
}
