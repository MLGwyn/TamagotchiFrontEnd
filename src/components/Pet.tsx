import React from 'react'
import { Link } from 'wouter'

export type PetType = {
  id: undefined
  name: undefined
  image: undefined
  birthday: Date
  hungerLevel: undefined
  happinessLevel: undefined
  lastInteractedWithDate: undefined
  playtimes: InteractionType
  feedings: InteractionType
  scoldings: InteractionType
}

export type InteractionType = [
  {
    id: undefined
    when: Date
    petId: undefined
    pet: undefined
  }
]

type PetProps = {
  pet: PetType
  reloadPets: () => void
}

export function Pet({
  pet: { id, name, birthday, hungerLevel, happinessLevel },
}: PetProps) {
  const birthdayDate = new Date(birthday)

  return (
    <div className="pet-pen">
      <h2>
        <Link to={`/api/Pets/${id}`}>{name}</Link>
      </h2>
      <img src={`https://random-d.uk/api/${id}.jpg`} height="100" width="100" />
      <div>
        {birthdayDate.toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })}
      </div>
      <div>Happiness Level:{happinessLevel}</div>
      <div>Hunger Level:{hungerLevel}</div>
    </div>
  )
}
