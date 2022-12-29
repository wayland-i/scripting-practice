import React from 'react'

function BirthYearCalculator() {
  return (
    <div className='BirthYearCalculator'>
        <h1>Birth Year <br /> Calculator</h1>
        <h3>When were you born?</h3>
        <form>
            <label htmlFor='currentAge'>Current Age:</label>
            <input name='currentAge' placeholder='your age in years'></input>

            <h3>Most recent birthday?</h3>
            <span>
                <label htmlFor='lastYear'>Last Year:</label>
                <input name='lastYear' type='radio'></input>

                <label htmlFor='thisYear'>This Year:</label>
                <input name='thisYear' type='radio'></input>
            </span>

            <button type='submit' id='birthSubmit'>Submit</button>
        </form>
    </div>
  )
}

export default BirthYearCalculator;