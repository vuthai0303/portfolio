const getEnvironment = () => {
  const { VITE_TITLE_APP } = import.meta.env

  return {
    TITLE_APP: VITE_TITLE_APP,
    HOST: import.meta.env.VITE_HOST,
  }
}

export const Env = getEnvironment()
