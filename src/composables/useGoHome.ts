import { ERoutesNames } from '@/router/router.types'
import { useRouter } from 'vue-router'

export const useGoHome = () => {
  const router = useRouter()

  const goHome = () => {
    router.push({ name: ERoutesNames.HOME })
  }

  return { goHome }
}
