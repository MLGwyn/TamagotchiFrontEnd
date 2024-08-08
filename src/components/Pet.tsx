import React from 'react'
import { Link } from 'wouter'

export type PetType = {
  id: undefined
  name: undefined
  birthday: Date
  hungerLevel: undefined
  happinessLevel: undefined
  lastInteractedWithDate: undefined
  playtimes: PlaytimeType
  feedings: FeedingType
  scoldings: ScoldingType
}

export type PlaytimeType = [
  {
    id: undefined
    when: Date
    petId: undefined
    pet: undefined
  }
]

export type FeedingType = [
  {
    id: undefined
    when: Date
    petId: undefined
    pet: undefined
  }
]

export type ScoldingType = [
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
    <>
      <h2>
        <Link to={`/api/Pets/${id}`}>{name}</Link>
      </h2>
      <span>
        {birthdayDate.toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })}
      </span>
      <div>Happiness Level:{happinessLevel}</div>
      <div>Hunger Level:{hungerLevel}</div>
    </>
  )
}
