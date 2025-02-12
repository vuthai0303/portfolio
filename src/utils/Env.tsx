const getEnvironment = () => {
  const { VITE_TITLE_APP } = import.meta.env

  return {
    TITLE_APP: VITE_TITLE_APP,
  }
}

export const Env = getEnvironment()
