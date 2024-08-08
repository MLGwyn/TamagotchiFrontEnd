import React from 'react'
import { useLoadOnePet, useDeleteOnePetMutation } from '../api'
import { Link, useLocation, useParams } from 'wouter'

export function PetPage() {
  const params = useParams<{ id: string }>()
  const [location, navigate] = useLocation()
  const { pet, isPetLoading } = useLoadOnePet(params.id)
  const deleteMutation = useDeleteOnePetMutation(params.id, function () {
    location
    navigate('/')
  })
  if (isPetLoading) {
    return null
  }

  return (
    <>
      <p>
        <Link to="/">Home</Link>
      </p>
      <span>{pet.birthday}</span>
      <div>Happiness Level:{pet.happinessLevel}</div>
      <div>Hunger Level:{pet.hungerLevel}</div>
      <div>Last Interacted With:{pet.lastInteractedWithDate}</div>
      <div>Feedings:{pet.feedings}</div>
      <div>Playtimes:{pet.playtimes}</div>
      <div>Scoldings:{pet.scoldings}</div>
      <p>
        <button>Feed</button>
      </p>
      <p>
        <button>Play</button>
      </p>
      <p>
        <button>Scold</button>
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
