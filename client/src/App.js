import React, { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([{}])

  useState(() =>{
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof data.members === 'undefined') ? (
        <p>Loading. . .</p>
      ) : (
        data.members.map((member, i) => (
          <p Key={i}>{member}</p>
        ))
      )}
      
    </div>
  )
}

export default App
