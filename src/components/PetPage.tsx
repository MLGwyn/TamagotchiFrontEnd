import React from 'react'
import {
  useLoadOnePet,
  useDeleteOnePetMutation,
  useFeedPetMutation,
  usePlayWithPetMutation,
  useScoldPetMutation,
} from '../api'
import { Link, useLocation, useParams } from 'wouter'

export function PetPage() {
  const params = useParams<{ id: string }>()
  const [location, navigate] = useLocation()
  const { pet, isPetLoading, refetchPet } = useLoadOnePet(params.id)
  const deleteMutation = useDeleteOnePetMutation(params.id, function () {
    location
    navigate('/')
  })
  const feedMutation = useFeedPetMutation(params.id, function () {
    refetchPet()
  })
  const playMutation = usePlayWithPetMutation(params.id, function () {
    refetchPet()
  })
  const scoldMutation = useScoldPetMutation(params.id, function () {
    refetchPet()
  })
  if (isPetLoading) {
    return null
  }

  return (
    <>
      <p>
        <Link to="/">Home</Link>
      </p>
      <h2>{pet.name}</h2>
      <span>{pet.birthday}</span>
      <div>Happiness Level:{pet.happinessLevel}</div>
      <div>Hunger Level:{pet.hungerLevel}</div>
      <div>Last Interacted With:{pet.lastInteractedWithDate}</div>
      <p>
        <button
          onClick={function () {
            feedMutation.mutate()
          }}
        >
          Feed
        </button>
      </p>
      <p>
        <button
          onClick={function () {
            playMutation.mutate()
          }}
        >
          Play
        </button>
      </p>
      <p>
        <button
          onClick={function () {
            scoldMutation.mutate()
          }}
        >
          Scold
        </button>
      </p>
      <p>
        <button
          onClick={function () {
            deleteMutation.mutate()
          }}
        >
          Delete Pet
        </button>
      </p>
    </>
  )
}
