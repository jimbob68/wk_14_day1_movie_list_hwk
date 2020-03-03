import React from 'react'

function Film({ name, children }) {
  return(
    <li>
      <h4>{ children }</h4>
      <p>{ name }</p>
    </li>
  )
}

export default Film;
