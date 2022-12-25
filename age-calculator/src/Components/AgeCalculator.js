import React from 'react'

function AgeCalculator() {
  return (
    <div className='AgeCalculator'>
        <h1>Age <br/> Calculator</h1>
        <h3>How old are you?</h3>
        <form>
            <label for='month'>Month Born:</label>
            <input id='month' placeholder='mm'></input>
            
            <label for='day'>Day Born:</label>
            <input id='day' placeholder='dd'></input>

            <label for='year'>Year Born:</label>
            <input id='year' placeholder='yyyy'></input>
            
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AgeCalculator;