import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function CharacterPage({characters}) {
  const {slug} = useParams();
  const [character, setCharacter] = useState({});

  useEffect(()=> {
    setCharacter(characters.find((item) => item.slug == slug));
  })

  return (
    <div className='detail-page'>
      <div className='detail-left'>
        <div className='img-container'>
          <div className='detail-name'>{character.name}</div>
          <img className='detail-img' src= {character.img} />
        </div>
      </div>
      <div className='detail-right'>
        <div>{character.description}</div>
      </div>
    </div>
  )
}
