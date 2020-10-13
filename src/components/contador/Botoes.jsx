import React from 'react'

export default props =>
  <>
    <div>
        <button onClick={props.onInc}>+</button>
        <button onClick={props.onDec}>-</button>
    </div>
  </>