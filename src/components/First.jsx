import React, { useEffect, useState } from 'react'
import "./StyleF.css"

const First = () => {

    const [char, setChar] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            console.log(data.results);
            setChar(data.results);
        };
        fetchData();
    },[])


  return (
    <div>
        <h1 style={{textDecoration: "underline", textAlign: "center"}}>Rick and Morty API</h1>
        <div className="container">
            {
                char.map(character => (
                    <div className="character-card" key={character.id}>
                        <img src={character.image} alt='img-profile' style={{width: "200px"}}/>
                        <p>{character.name}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default First