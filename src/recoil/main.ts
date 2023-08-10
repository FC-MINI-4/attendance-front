import { atom } from 'recoil'

export const remainDaysState = atom<number>({
  key: 'remainDays',
  default:15
});

export const dayOffState = atom({
  key:'dayOffs',
  default:[]
});

export const dutiesState = atom({
  key:'duties',
  default:[]
});