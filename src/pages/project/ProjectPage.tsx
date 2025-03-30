import { Button, Card, CardFooter, CardHeader, Chip, Image } from '@heroui/react'
import { Github, HardDrive } from 'lucide-react'
import ChessGame from '../../assets/videos/projects/ChessGame.mp4'
import GiupViec from '../../assets/videos/projects/GiupViec.mp4'
import ShootingGame from '../../assets/videos/projects/ShootingGame.mp4'
import shootTank from '../../assets/videos/projects/shootTank.mp4'
import SurvivalGame from '../../assets/videos/projects/SurvivalGame.mp4'
import GradientText from '../../components/common/GradientText'
import ShinyText from '../../components/common/ShinyText'
import { ProjectItem } from '../../types/ProjectItem'

const ProjectPage = () => {
  const projects: ProjectItem[] = [
    {
      imageHref: '',
      videoHref: GiupViec,
      title: 'GiupViec App',
      desciption: [
        '- It is a system that assists in finding and connecting domestic helpers with clients',
      ],
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
        '- It is a Chess game',
        '- Play with AI',
        "- Use Unity's Data-Oriented Technology Stack (DOTS)",
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
      desciption: ['- It is a game project improved from tutorial'],
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
      desciption: [
        '- It is a Shoot’em up gam',
        "- Use Unity's Data-Oriented Technology Stack (DOTS)",
      ],
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
      desciption: ['- It is a Survival game mobile.', '- In Progressing'],
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
    <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-10 px-20 py-5 pt-20">
      {projects?.map((project, index) => {
        return (
          <Card key={index} isFooterBlurred className="min-h-[450px] h-fit">
            <CardHeader className="z-10 flex-col items-start">
              <GradientText
                colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
                animationSpeed={3}
                showBorder={false}
                className="font-bold text-2xl"
              >
                {project.title}
              </GradientText>
            </CardHeader>
            {project.imageHref ? (
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={project.videoHref}
              />
            ) : (
              <video className="w-full h-full object-cover" autoPlay loop muted>
                <source src={project?.videoHref} type="video/mp4" />
              </video>
            )}

            <CardFooter className="bottom-0 z-10 flex-col items-start gap-2 h-fit">
              <div className="w-full flex flex-row justify-between">
                <div className="w-4/5">
                  <ul className="list-none">
                    {project?.desciption?.map((e, index) => {
                      return (
                        <li key={index}>
                          <ShinyText text={e} disabled={false} speed={3} className="custom-class" />
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className="flex flex-row gap-1 text-tiny">
                  {project?.links?.map((link, index) => {
                    return (
                      <Button
                        key={index}
                        isIconOnly
                        aria-label={link.text}
                        size="sm"
                        variant="faded"
                        color="primary"
                        onPress={() => window.open(link.href, '_blank')}
                      >
                        {link.text == 'Github' ? <Github /> : <HardDrive />}
                      </Button>
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
