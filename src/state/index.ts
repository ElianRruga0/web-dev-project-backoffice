import { atomWithStorage } from 'jotai/utils'


export const isOperatorAtom = atomWithStorage<any>('isOperator', false)

export const userAtom = atomWithStorage<any>('user', null)


