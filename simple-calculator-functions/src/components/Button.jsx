import React from 'react';
import styled from 'styled-components';

const Click = styled.button`
    font-size: 2rem;
    margin: 1em;
`

function Button({ name, handleMath }) {
  return (
    <Click onClick={handleMath} name={name}>{name}</Click>
  );
}

export default Button;