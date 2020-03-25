import React from 'react'

const MyComponent = ({ name }) => {
  return (
    <div>
      <h1>My test component</h1>
      <p>{`Your name is ${name}`}</p>
    </div>
  )
}

export default MyComponent