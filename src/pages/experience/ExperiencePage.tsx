import { Card, CardBody } from '@heroui/react'
import { Briefcase, BriefcaseBusiness, School } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import TimeLine from '../../components/ui/TimeLine'

const ExperiencePage = () => {
  const { t } = useTranslation()

  const timeline = [
    {
      title: t('Experience.systemEXE.title'),
      subTitle: 'Full Stack Developer',
      description: t('Experience.systemEXE.description'),
      tasks: {
        Heatmap: [
          {
            title: t('Experience.systemEXE.heatmap.title'),
            description: t('Experience.systemEXE.heatmap.description'),
            time: '2025/01 - Now',
            frontend: ['HTML', 'CSS', 'Typescript', 'Vite', 'React'],
            backend: [
              'Serverless',
              'AWS',
              'Lambda',
              'DynamoDB',
              'API Gateway',
              'Amplify',
              'cognito',
            ],
            other: [],
          },
        ],
        GCS: [
          {
            title: t('Experience.systemEXE.GCS.title'),
            description: t('Experience.systemEXE.GCS.description'),
            time: '2024/06 - 2025/03',
            frontend: ['HTML', 'CSS', 'Javascript', 'Vue'],
            backend: ['Java', 'Spring Boot', 'Oracle'],
            other: ['JUnit', 'Mockito'],
          },
        ],
        Fluzo: [
          {
            title: t('Experience.systemEXE.Fluzo.title'),
            description: t('Experience.systemEXE.Fluzo.description'),
            time: '2024/02 - 2024/04',
            frontend: ['HTML', 'CSS', 'Javascript', 'Angular', 'Electron'],
            backend: ['Java', 'Spring Boot', 'Oracle'],
            other: ['JUnit', 'Mockito'],
          },
        ],
        CIIC: [
          {
            title: t('Experience.systemEXE.CIIC.title'),
            description: t('Experience.systemEXE.CIIC.description'),
            time: '2023/12 - 2024/02',
            frontend: ['HTML', 'CSS', 'Javascript', 'C#', 'ASP.NET'],
            backend: ['C#', 'ASP.NET', 'SQL Server'],
            other: [],
          },
        ],
        RMS: [
          {
            title: t('Experience.systemEXE.RMS.title'),
            description: t('Experience.systemEXE.RMS.description'),
            time: '2023/10 - 2023/11',
            frontend: ['HTML', 'CSS', 'Javascript', 'Angular'],
            backend: ['Java', 'Spring Boot', 'PostgreSQL'],
            other: [],
          },
        ],
      },
      date: '2023/10',
      icon: <BriefcaseBusiness />,
    },
    {
      title: t('Experience.topebox.title'),
      subTitle: 'Intern Game Developer',
      description: t('Experience.topebox.description'),
      date: '2023/06 - 2023/07',
      icon: <Briefcase />,
    },
    {
      title: t('Experience.fujinet.title'),
      subTitle: 'Full Stack Developer',
      description: t('Experience.fujinet.description'),
      date: '2022/07 - 2023/04',
      icon: <BriefcaseBusiness />,
    },
    {
      title: t('Experience.education.title'),
      subTitle: t('Experience.education.subTitle'),
      description: t('Experience.education.description'),
      date: '2018/09 - 2023/11',
      icon: <School />,
    },
  ]
  return (
    <div className="flex justify-center items-start min-h-screen">
      <Card className="min-w-[600px] w-2/3 h-full rounded-b-lg bg-background" radius="none">
        <CardBody className="p-20">
          <TimeLine timeline={timeline} />
        </CardBody>
      </Card>
    </div>
  )
}

export default ExperiencePage
