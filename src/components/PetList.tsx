import React, { useState } from 'react'
import { createNewPet, getPets } from '../api'
import { useMutation, useQuery } from 'react-query'
import { Pet } from './Pet'

export function PetList() {
  const {
    data: pets = [],
    refetch: refetchPets,
    isLoading,
  } = useQuery('pets', getPets)
  const [newPetName, setNewPetName] = useState('')

  const petMutation = useMutation(
    (newPetName: string) => createNewPet(newPetName),
    {
      onSuccess: function () {
        refetchPets()
        setNewPetName('')
      },
    }
  )
  if (isLoading) {
    return <p>...loading...</p>
  }
  return (
    <>
      <form
        onSubmit={function (event) {
          event.preventDefault()
          petMutation.mutate(newPetName)
        }}
      >
        <input
          type="text"
          placeholder="Name of new pet?"
          value={newPetName}
          onChange={function (event) {
            setNewPetName(event.target.value)
          }}
        />
      </form>
      <ul>
        {pets.map(function (pet) {
          return <Pet key={pet.id} pet={pet} reloadPets={() => refetchPets()} />
        })}
      </ul>
    </>
  )
}
