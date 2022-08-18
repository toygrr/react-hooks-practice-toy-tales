import React, { useState } from "react"

function ToyForm({ handleSubmit }) {
  const [newToy, setNewToy] = useState({
    name: "",
    image: "",
  })

  function submitHelper(e) {
    e.preventDefault()

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((r) => r.json())
      .then((data) => handleSubmit(data))
  }

  function handleFields(e) {
    const name = e.target.name
    const value = e.target.value
    setNewToy({ ...newToy, [name]: value })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={submitHelper}>
        <h3>Create a toy!</h3>
        <input
          onChange={handleFields}
          value={newToy.name}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={handleFields}
          value={newToy.image}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  )
}

export default ToyForm
