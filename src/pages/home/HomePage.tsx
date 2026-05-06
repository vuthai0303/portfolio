import { Avatar, Button, Card, CardBody, Divider, Link } from '@heroui/react'
import { Facebook, Github, Instagram, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import SnakesGame from '../../components/snakes-game/SnakesGame'
import RotatingSphere from '../../components/ui/RotatingSphere'
import Typewriter from '../../components/ui/Typewriter'

const HomePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="flex justify-center items-start scroll-auto">
        <Card className="w-screen h-full rounded-2xl bg-background/90" radius="none">
          <CardBody className="py-10 px-2 lg:px-10">
            <div className="flex flex-col lg:flex-row items-center lg:justify-start px-2 lg:px-10">
              {/* title is here */}
              <Avatar
                className="w-36 h-36 text-large"
                src="/portfolio/avatar.JPG"
              />
              <div className="text-2xl lg:text-3xl ml-0 lg:ml-6 font-bold tracking-tight flex flex-row items-center text-balance">
                Hi,
                <Typewriter
                  text={[
                    t('Home.title.title_1'),
                    t('Home.title.title_2'),
                    t('Home.title.title_3'),
                    t('Home.title.title_4'),
                  ]}
                  speed={200}
                  className="ml-2 font-display text-center drop-shadow-sm text-2xl lg:text-3xl font-bold tracking-tight"
                />
              </div>
            </div>
            <div className="flex flex-row px-2 lg:px-10 text-balance">
              <div className="flex flex-col">
                {/* description is here */}
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-1/2 p-3 flex flex-col justify-between">
                    <div className="flex flex-col">
                      <p className="mt-2 lg:mt-6 text-base text-muted-foreground text-justify">
                        {t('Home.description')}
                      </p>
                    </div>
                    <div className="flex flex-row mt-10">
                      {/* link social is here */}
                      <div className="flex gap-1 items-center">
                        <Link isExternal href="https://www.facebook.com/vuthai0303">
                          <Button isIconOnly aria-label="Facebook" color="primary" variant="light">
                            <Facebook />
                          </Button>
                        </Link>
                        <Link isExternal href="https://www.instagram.com/vuthai0303/">
                          <Button isIconOnly aria-label="Instagram" color="primary" variant="light">
                            <Instagram />
                          </Button>
                        </Link>
                        <Link isExternal href="https://github.com/vuthai0303">
                          <Button isIconOnly aria-label="Github" color="primary" variant="light">
                            <Github />
                          </Button>
                        </Link>
                        <Link isExternal href="https://www.linkedin.com/in/vuthai1503/">
                          <Button isIconOnly aria-label="Linkedin" color="primary" variant="light">
                            <Linkedin />
                          </Button>
                        </Link>
                        <Link isExternal href="mailto:vuthai15032k@gmail.com">
                          <Button isIconOnly aria-label="Mail" color="primary" variant="light">
                            <Mail />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 h-[500px]">
                    <RotatingSphere />
                  </div>
                </div>
              </div>
            </div>
            <Divider className="my-4" />
            <div className="w-full overflow-hidden">
              <div className="display lg:hidden">
                <img
                  className="w-full"
                  src="/portfolio/github-contribution-snake/github-contribution-grid-snake.svg"
                  alt="github-contribution"
                />
              </div>
              <div className='hidden lg:flex w-full h-[300px]'>
                <SnakesGame />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default HomePage
