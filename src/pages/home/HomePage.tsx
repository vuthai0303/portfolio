import { Avatar, Button, Card, CardBody, Divider, Link } from '@heroui/react'
import { Facebook, Github, Instagram, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import RotatingSphere from '../../components/ui/RotatingSphere'
import Typewriter from '../../components/ui/Typewriter'
import SnakesGame from '../../components/snakes-game/SnakesGame'

const HomePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="flex justify-center items-start">
        <Card className="min-w-[600px] w-full h-full rounded-2xl bg-background/90" radius="none">
          <CardBody className="p-10">
            <div className="flex flex-row px-10">
              {/* title is here */}
              <Avatar
                className="w-25 h-25 text-large"
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              />
              <div className="text-3xl md:text-6xl font-bold tracking-tight flex flex-row items-center ml-10">
                Hi,
                <Typewriter
                  text={[
                    t('Home.title.title_1'),
                    t('Home.title.title_2'),
                    t('Home.title.title_3'),
                    t('Home.title.title_4'),
                  ]}
                  speed={200}
                  className="ml-2 font-display text-center drop-shadow-sm text-3xl md:text-6xl font-bold tracking-tight"
                />
              </div>
            </div>
            <div className="flex flex-row px-10">
              <div className="flex flex-col">
                {/* description is here */}
                <div className="flex flex-row">
                  <div className="w-1/2 p-3 pr-5 flex flex-col justify-between">
                    <div className="flex flex-col">
                      <p className="mt-6 text-base text-muted-foreground">
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
                  <div className="w-1/2 h-[400px]">
                    <RotatingSphere />
                  </div>
                </div>
              </div>
            </div>
            <Divider className="my-4" />
            <div className="w-full overflow-hidden">
              {/* <div className="">
                <img
                  className="w-full"
                  src="/portfolio/github-contribution-snake/github-contribution-grid-snake.svg"
                  alt="github-contribution"
                />
              </div> */}
              <div className='w-full h-[300px]'>
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
