import React, { useState } from 'react'

function AgeCalculator() {

    const [AgeData, setAgeData] = useState({
        month: "",
        day: "",
        year: ""
    }) 

    const [age, setAge] = useState();

    
    const handleAll = (e) => {
        const {name, value} = e.target;
        setAgeData({...AgeData, [name]: value});
    }

    const ageScript = () => {
        const currentDate = new Date();

        const age = currentDate.getFullYear() - AgeData.year;

        return age > 150 ? "what's your secret?" : age
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setAge(ageScript());
        setAgeData({
            month: "",
            day: "",
            year: ""
        });
    }

  return (
    <div className='AgeCalculator'>
        <h1>Age <br/> Calculator</h1>
        <h3>How old are you?</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor='month'>Month Born:</label>
            <input id='month' placeholder='mm' onChange={handleAll} name='month' value={AgeData.month}></input>
            
            <label htmlFor='day'>Day Born:</label>
            <input id='day' placeholder='dd' onChange={handleAll} name='day' value={AgeData.day}></input>

            <label htmlFor='year'>Year Born:</label>
            <input id='year' placeholder='yyyy' onChange={handleAll} name='year' value={AgeData.year}></input>
            
            <button type='submit'>Submit</button>
        </form>
        {age === 0 ? null : <h2>{age}</h2>}
    </div>
  )
}

export default AgeCalculator;