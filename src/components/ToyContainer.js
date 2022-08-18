import React from "react"
import ToyCard from "./ToyCard"

function ToyContainer({ toys }) {
  const toyCards = toys.map((toy) => {
    return (
      <ToyCard
        key={toy.id}
        name={toy.name}
        image={toy.image}
        likes={toy.likes}
      />
    )
  })
  return <div id="toy-collection">{toyCards}</div>
}

export default ToyContainer
