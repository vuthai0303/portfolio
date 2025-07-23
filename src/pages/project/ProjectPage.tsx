import { Button, Card, CardFooter, CardHeader, Chip, Image, Link } from '@heroui/react'
import { Github, Globe, HardDrive } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import StudyLanguage from '../../assets/images/study-language.png'
import ChessGame from '../../assets/videos/projects/ChessGame.mp4'
import GiupViec from '../../assets/videos/projects/GiupViec.mp4'
import ShootingGame from '../../assets/videos/projects/ShootingGame.mp4'
import shootTank from '../../assets/videos/projects/shootTank.mp4'
import SurvivalGame from '../../assets/videos/projects/SurvivalGame.mp4'
import GradientText from '../../components/common/GradientText'
import ShinyText from '../../components/common/ShinyText'
import { ProjectItem } from '../../types/ProjectItem'

const ProjectPage = () => {
  const { t } = useTranslation()

  const projects: ProjectItem[] = [
    {
      imageHref: StudyLanguage,
      videoHref: '',
      title: 'Study Language Website',
      desciption: [t('Project.StudyLanguage.description1')],
      links: [
        {
          text: 'Github',
          href: 'https://github.com/vuthai0303/study-language',
        },
        {
          text: 'Website',
          href: 'https://study-language-snowy.vercel.app/',
        },
      ],
      tags: ['React', 'Next.JS', 'Tailwind CSS', 'AI'],
    },
    {
      imageHref: '',
      videoHref: GiupViec,
      title: 'GiupViec App',
      desciption: [t('Project.GiupViec.description1')],
      links: [
        {
          text: 'Github',
          href: 'https://github.com/vuthai0303/GiupViecTV',
        },
        {
          text: 'GoogleDrive',
          href: 'https://drive.google.com/drive/folders/1Htkvz60TQ3ErCn1YjyE_j4SNPDza_4fW?usp=sharing',
        },
      ],
      tags: ['Android', 'React Native', 'ReactJs', 'NodeJs', 'ExpressJs'],
    },
    {
      imageHref: '',
      videoHref: ChessGame,
      title: 'Tank Chess',
      desciption: [
        t('Project.ChessGame.description1'),
        t('Project.ChessGame.description2'),
        t('Project.ChessGame.description3'),
      ],
      links: [
        {
          text: 'Github',
          href: 'https://github.com/vuthai0303/Chess_DOTS',
        },
      ],
      tags: ['DOTS', 'ECS', 'Unity', 'C#'],
    },
    {
      imageHref: '',
      videoHref: shootTank,
      title: 'Shoot Tank',
      desciption: [t('Project.shootTank.description1')],
      links: [
        {
          text: 'GoogleDrive',
          href: 'https://drive.google.com/drive/folders/1fxdNBQpShF2a-81LihIzfAP_zoU9bOhD?usp=sharing',
        },
      ],
      tags: ['Unity3D', 'C#'],
    },
    {
      imageHref: '',
      videoHref: ShootingGame,
      title: 'Shooter game',
      desciption: [t('Project.ShootingGame.description1'), t('Project.ShootingGame.description2')],
      links: [
        {
          text: 'Github',
          href: 'https://github.com/vuthai0303/Shooting_DOTS',
        },
      ],
      tags: ['DOTS', 'ECS', 'Unity', 'C#'],
    },
    {
      imageHref: '',
      videoHref: SurvivalGame,
      title: 'Survival Game',
      desciption: [t('Project.SurvivalGame.description1'), t('Project.SurvivalGame.description2')],
      links: [
        {
          text: 'Github',
          href: 'https://github.com/vuthai0303/SurvivalGame',
        },
      ],
      tags: ['Unity2D', 'C#', 'Mobile Game'],
    },
  ]
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-10 px-20 py-5 pt-10">
      {projects?.map((project, index) => {
        return (
          <Card key={index} isFooterBlurred className="min-h-[450px] h-fit">
            <CardHeader className="z-10 flex-col items-start">
              <GradientText
                colors={['#DD62ED', '#4014ff', '#DD62ED', '#4014ff', '#DD62ED']}
                animationSpeed={5}
                showBorder={false}
                className="font-bold text-2xl mx-auto justify-center items-center"
              >
                {project.title}
              </GradientText>
            </CardHeader>
            {project.imageHref ? (
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full object-cover rounded-none"
                src={project.imageHref}
              />
            ) : (
              <video className="w-full h-full object-cover" autoPlay loop muted>
                <source src={project?.videoHref} type="video/mp4" />
              </video>
            )}

            <CardFooter className="bottom-0 z-10 flex-col items-start gap-2 h-fit">
              <div className="w-full flex flex-row justify-between">
                <div className="w-4/5">
                  <ul className="list-none px-2">
                    {project?.desciption?.map((e, index) => {
                      return (
                        <li key={index}>
                          <ShinyText
                            text={e}
                            textColor="text-primary/70"
                            backgroundImage="linear-gradient(120deg, rgba(255, 0, 255, 0) 40%, rgba(255, 0, 255, 0.8) 50%, rgba(255, 0, 255, 0) 60%)"
                            speed={3}
                            className="custom-class"
                          />
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className="flex flex-row gap-1 text-tiny">
                  {project?.links?.map((link, index) => {
                    return (
                      <Link key={index} isExternal href={link.href}>
                        <Button
                          isIconOnly
                          size="sm"
                          aria-label={link.text}
                          color="primary"
                          variant="light"
                        >
                          {link.text == 'Github' ? (
                            <Github />
                          ) : link.text == 'Website' ? (
                            <Globe />
                          ) : (
                            <HardDrive />
                          )}
                        </Button>
                      </Link>
                    )
                  })}
                </div>
              </div>
              <div className="flex flex-row gap-1 text-tiny flex-wrap">
                {project?.tags?.map((tag, index) => {
                  return (
                    <Chip
                      key={index}
                      color="primary"
                      variant="shadow"
                      classNames={{
                        content: 'text-tiny',
                      }}
                    >
                      {tag}
                    </Chip>
                  )
                })}
              </div>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}

export default ProjectPage
