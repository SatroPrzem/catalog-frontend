import { useRouter } from 'vue-router'

import { ERoutesNames } from '@/router/router.types'

export const useGoHome = () => {
  const router = useRouter()

  const goHome = () => {
    router.push({ name: ERoutesNames.HOME })
  }

  return { goHome }
}
