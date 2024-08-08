import axios from 'axios'
import { PetType } from './components/Pet'
import { useMutation, useQuery } from 'react-query'

export async function getPet(id: string) {
  return (await axios.get<PetType>(`http://localhost:5000/api/Pets/${id}`)).data
}

export async function getPets() {
  return (await axios.get<PetType[]>('http://localhost:5000/api/Pets')).data
}

export async function createNewPet(newPetName: string) {
  return await axios.post('http://localhost:5000/api/Pets', {
    name: newPetName,
  })
}

export function useLoadOnePet(id: string) {
  const { data: pet = EmptyPet, isLoading: isPetLoading } = useQuery(
    ['pet', id],
    () => getPet(id)
  )
  return { pet, isPetLoading }
}

export const EmptyPet: PetType = {
  id: undefined,
  name: undefined,
  birthday: new Date(),
  hungerLevel: undefined,
  happinessLevel: undefined,
  lastInteractedWithDate: undefined,
  playtimes: [
    { id: undefined, when: new Date(), petId: undefined, pet: undefined },
  ],
  feedings: [
    { id: undefined, when: new Date(), petId: undefined, pet: undefined },
  ],
  scoldings: [
    { id: undefined, when: new Date(), petId: undefined, pet: undefined },
  ],
}

export async function deleteOnePet(id: string) {
  return await axios.delete<PetType>(`http://localhost:5000/api/Pets/${id}`)
}

export function useDeleteOnePetMutation(id: string, onSuccess: () => void) {
  return useMutation(() => deleteOnePet(id), { onSuccess })
}

export async function feedPet(id: string) {
  return await axios
}
