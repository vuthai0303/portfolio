import { Button, Card, CardFooter, CardHeader, Chip, Image } from '@heroui/react'
import { Github } from 'lucide-react'
import { ProjectItem } from '../../types/ProjectItem'

const ProjectPage = () => {
  const projects: ProjectItem[] = [
    {
      imageHref: 'https://heroui.com/images/card-example-6.jpeg',
      videoHref: '',
      title: 'GiupViecTV',
      desciption:
        'It is a system that assists in finding and connecting domestic helpers with clients',
      links: [
        {
          text: 'Github',
          href: 'https://github.com/nctins/GiupViecTV',
        },
      ],
      tags: ['ReactJs', 'react native'],
    },
    {
      imageHref: 'https://heroui.com/images/card-example-6.jpeg',
      videoHref: '',
      title: 'GiupViecTV',
      desciption:
        'It is a system that assists in finding and connecting domestic helpers with clients',
      links: [
        {
          text: 'Github',
          href: 'https://github.com/nctins/GiupViecTV',
        },
      ],
      tags: ['ReactJs', 'react native'],
    },
    {
      imageHref: 'https://heroui.com/images/card-example-6.jpeg',
      videoHref: '',
      title: 'GiupViecTV',
      desciption:
        'It is a system that assists in finding and connecting domestic helpers with clients',
      links: [
        {
          text: 'Github',
          href: 'https://github.com/nctins/GiupViecTV',
        },
      ],
      tags: ['ReactJs', 'react native'],
    },
    {
      imageHref: 'https://heroui.com/images/card-example-6.jpeg',
      videoHref: '',
      title: 'GiupViecTV',
      desciption:
        'It is a system that assists in finding and connecting domestic helpers with clients',
      links: [
        {
          text: 'Github',
          href: 'https://github.com/nctins/GiupViecTV',
        },
      ],
      tags: ['ReactJs', 'react native'],
    },
    {
      imageHref: 'https://heroui.com/images/card-example-6.jpeg',
      videoHref: '',
      title: 'GiupViecTV',
      desciption:
        'It is a system that assists in finding and connecting domestic helpers with clients',
      links: [
        {
          text: 'Github',
          href: 'https://github.com/nctins/GiupViecTV',
        },
      ],
      tags: ['ReactJs', 'react native'],
    },
    {
      imageHref: 'https://heroui.com/images/card-example-6.jpeg',
      videoHref: '',
      title: 'GiupViecTV',
      desciption:
        'It is a system that assists in finding and connecting domestic helpers with clients',
      links: [
        {
          text: 'Github',
          href: 'https://github.com/nctins/GiupViecTV',
        },
      ],
      tags: ['ReactJs', 'React Native'],
    },
  ]
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-10 px-20 py-5">
      {projects?.map((project, index) => {
        return (
          <Card key={index} isFooterBlurred className="h-[500px]">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <h4 className="text-primary font-bold text-2xl">{project.title}</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src={project.imageHref}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 items-start flex-col gap-1">
              <div className="w-full flex flex-row justify-between">
                <div className="w-2/3">
                  <p className="text-black text-tiny">{project.desciption}</p>
                </div>
                <div className="flex flex-row gap-1 text-tiny">
                  {project?.links?.map((link, index) => {
                    return (
                      <Button
                        key={index}
                        isIconOnly
                        aria-label={link.text}
                        size="sm"
                        variant="bordered"
                        color="primary"
                        href={link.href}
                      >
                        <Github />
                      </Button>
                    )
                  })}
                </div>
              </div>
              <div className="flex flex-row gap-1 text-tiny">
                {project?.tags?.map((tag, index) => {
                  return (
                    <Chip
                      key={index}
                      color="secondary"
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
