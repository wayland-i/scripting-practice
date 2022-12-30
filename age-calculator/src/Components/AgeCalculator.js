import React, { useState } from 'react'

function AgeCalculator() {

    const [AgeData, setAgeData] = useState({
        month: "",
        day: "",
        year: ""
    }) 

    
    const handleAll = (e) => {
        const {name, value} = e.target;
        setAgeData({...AgeData, [name]: value});
    }

    // const [month, setMonth] = useState(0);
    // const [day, setDay] = useState(0);
    // const [year, setYear] = useState(0);

    // const handleMonth = (e) => {
    //     setMonth(e.target.value);
    // }
    // const handleDay = (e) => {
    //     setDay(e.target.value);
    // }
    // const handleYear = (e) => {
    //     setYear(e.target.value);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

  return (
    <div className='AgeCalculator'>
        <h1>Age <br/> Calculator</h1>
        <h3>How old are you?</h3>
        <form>
            <label htmlFor='month'>Month Born:</label>
            <input id='month' placeholder='mm' onChange={handleAll} name='month' value={AgeData.month}></input>
            
            <label htmlFor='day'>Day Born:</label>
            <input id='day' placeholder='dd' onChange={handleAll} name='day' value={AgeData.day}></input>

            <label htmlFor='year'>Year Born:</label>
            <input id='year' placeholder='yyyy' onChange={handleAll} name='year' value={AgeData.year}></input>
            
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default AgeCalculator;