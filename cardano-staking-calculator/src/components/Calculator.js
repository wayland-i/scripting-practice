import React, { useState } from 'react';

function Calculator() {
  const [ada, setAda] = useState("")
  const [rewards, setRewards] = useState("")

  const stakingRewards = (ada) => {
    return setRewards(ada * .0461);
  }

  const handleInput = (e) => {
    setAda(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    stakingRewards(ada);
    setAda("");
  }

  return (
    <div>
        <h1>calculator</h1>
        <form>
          <h2>How much ADA will you stake for the year?</h2>
          <input type='text' placeholder='ex. 1,000' onChange={handleInput} value={ada}/>
          <button type='submit' onClick={handleSubmit}>submit</button>
        </form>
        {rewards ? <h1>{rewards}</h1> : null}
    </div>
  )
}

export default Calculator;