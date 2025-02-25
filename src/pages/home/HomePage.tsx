import { Avatar, Button, Card, CardBody, Divider, Link } from '@heroui/react'
import { Facebook, Github, Instagram, Mail } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import RotatingSphere from '../../components/ui/RotatingSphere'
import Typewriter from '../../components/ui/Typewriter'

const HomePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="flex justify-center items-start">
        <Card className="min-w-[600px] w-2/3 h-full rounded-b-lg" radius="none">
          <CardBody className="p-10">
            <div className="flex flex-row px-10 mt-10">
              {/* title is here */}
              <Avatar
                className="w-20 h-20 text-large"
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              />
              <div className="text-3xl md:text-6xl font-bold tracking-tight flex flex-row items-start ml-10">
                Hi,
                <Typewriter
                  text={t('Home.title')}
                  className="ml-2 font-display text-center drop-shadow-sm text-3xl md:text-6xl font-bold tracking-tight"
                />
              </div>
            </div>
            <div className="flex flex-row px-10">
              <div className="flex flex-col">
                {/* description is here */}
                <div className="flex flex-row">
                  <div className="w-1/2 p-3 pr-5 mt-20 flex flex-col justify-between">
                    <div className="flex flex-col">
                      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl opacity-80">
                        {t('Home.title_desription')}
                      </h2>
                      <p className="mt-6 text-base text-muted-foreground">
                        {t('Home.description')}
                      </p>
                    </div>
                    <div className="flex flex-row">
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
              <div className="">
                <img
                  className="w-full"
                  src="/portfolio/github-contribution-snake/github-contribution-grid-snake.svg"
                  alt="github-contribution"
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default HomePage
