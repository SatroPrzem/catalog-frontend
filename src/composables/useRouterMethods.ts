import { useRouter } from 'vue-router'

import { ERoutesNames } from '@/router/router.types'

export const useRouterMethods = () => {
  const router = useRouter()

  const goToRoute = (route: ERoutesNames = ERoutesNames.HOME) => {
    router.push({ name: route })
  }

  return { goToRoute }
}
