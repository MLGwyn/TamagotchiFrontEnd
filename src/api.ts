import axios from 'axios'
import {
  PetType,
  PlaytimeType,
  FeedingType,
  ScoldingType,
} from './components/Pet'
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
  const {
    data: pet = EmptyPet,
    refetch: refetchPet,
    isLoading: isPetLoading,
  } = useQuery(['pet', id], () => getPet(id))
  return { pet, isPetLoading, refetchPet }
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
  return await axios.post<FeedingType>(
    `http://localhost:5000/api/Pets/${id}/Feedings`,
    { petId: id }
  )
}

export function useFeedPetMutation(id: string, onSuccess: () => void) {
  return useMutation(() => feedPet(id), { onSuccess })
}

export async function playWithPet(id: string) {
  return await axios.post<PlaytimeType>(
    `http://localhost:5000/api/Pets/${id}/Playtimes`,
    { petId: id }
  )
}

export function usePlayWithPetMutation(id: string, onSuccess: () => void) {
  return useMutation(() => playWithPet(id), { onSuccess })
}

export async function scoldPet(id: string) {
  return await axios.post<ScoldingType>(
    `http://localhost:5000/api/Pets/${id}/Scoldings`,
    { petId: id }
  )
}

export function useScoldPetMutation(id: string, onSuccess: () => void) {
  return useMutation(() => scoldPet(id), { onSuccess })
}
