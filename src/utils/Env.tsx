const getEnvironment = () => {
  const { VITE_TITLE_APP, VITE_HOST } = import.meta.env

  return {
    TITLE_APP: VITE_TITLE_APP,
    HOST: VITE_HOST,
  }
}

export const Env = getEnvironment()
