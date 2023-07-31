import { atom } from 'recoil'

export const modalState = atom<boolean>({
  key:'isModalShow',
  default:false
})