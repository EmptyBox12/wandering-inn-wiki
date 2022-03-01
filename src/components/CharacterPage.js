import React from 'react'
import { useParams } from 'react-router-dom'

export default function CharacterPage() {
  const {slug} = useParams();
  return (
    <div>{slug}</div>
  )
}
