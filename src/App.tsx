import { Button } from '@heroui/react'
import './App.css'
import ThemeSwitcher from './app/components/ThemeSwitcher'

function App() {
  return (
    <>
      <div className="flex flex-col justify-start items-center h-screen mt-10">
        <div className="flex flex-row">
          <h1 className="text-3xl text-primary mr-5">Vite + React</h1>
          <ThemeSwitcher />
        </div>
        <div className="flex flex-wrap gap-4 items-center h-screen">
          <Button color="primary" variant="solid">
            Solid
          </Button>
          <Button color="primary" variant="faded">
            Faded
          </Button>
          <Button color="primary" variant="bordered">
            Bordered
          </Button>
          <Button color="primary" variant="light">
            Light
          </Button>
          <Button color="primary" variant="flat">
            Flat
          </Button>
          <Button color="primary" variant="ghost">
            Ghost
          </Button>
          <Button color="primary" variant="shadow">
            Shadow
          </Button>
        </div>
      </div>
    </>
  )
}

export default App
