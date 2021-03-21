import React, { useState , useEffect} from 'react';
import axios from 'axios';

const Characters = () => {

    const [characters, setCharacters] =  useState([]);

    useEffect(() => {
        axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        const characterapi = res.data.results;
        setCharacters(characterapi);
      })
    }, [])

    return(
        <div className="Characters">
            {characters.map(character => (
                 <h2>{character.name}</h2>
            ))}
        </div>
    );
}

export default Characters;