import React, { useEffect } from 'react'

function Polls() {
    useEffect(() => {
        fetch("http://127.0.0.1:8000/polls/", {
            method: "GET"
        }).then(r => {if(r.ok) r.json().then(r => console.log(r))})
    })
  return (
    <div>Polls</div>
  )
}

export default Polls