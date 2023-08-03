import { atom } from 'recoil'

export const modalState = atom<boolean>({
  key:'isModalShow',
  default:false
})

export const manageState = atom<boolean>({
  key:'isManageShow',
  default:false
})