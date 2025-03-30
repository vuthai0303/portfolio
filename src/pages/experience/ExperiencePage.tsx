import { Card, CardBody } from '@heroui/react'
import { BriefcaseBusiness, School } from 'lucide-react'
import TimeLine from '../../components/ui/TimeLine'

const ExperiencePage = () => {
  const timeline = [
    {
      title: 'SystemEXE ViệtNam',
      subTitle: 'Full Stack Developer',
      description: `Lập trình viên full stack tại SystemEXE ViệtNam. Thực hiện phát triển, nâng cấp các dự án của khách hàng.`,
      tasks: {
        Heatmap: {
          title: 'Heatmap',
          description: 'Dự án IOT giúp hiển thị nhiệt độ, độ ẩm, áp suất của văn phòng.',
          time: '2025/01 - Now',
          frontend: ['HTML', 'CSS', 'Typescript', 'Vite', 'React'],
          backend: ['Serverless', 'AWS', 'Lambda', 'DynamoDB', 'API Gateway', 'Amplify', 'cognito'],
        },
        GCS: {
          title: 'GCS',
          description: 'Dự án quản lý hợp đồng mua bán bất động sản.',
          time: '2024/06 - 2025/03',
          frontend: ['HTML', 'CSS', 'Javascript', 'Vue'],
          backend: ['Java', 'Spring Boot', 'Oracle'],
          other: ['JUnit', 'Mockito'],
        },
        Fluzo: {
          title: 'Fluzo',
          description:
            'Fluzo is a system to make copyright clearance efficient and to improve its accuracy in digital content distribution business.',
          time: '2024/02 - 2024/04',
          frontend: ['HTML', 'CSS', 'Javascript', 'Angular', 'Electron'],
          backend: ['Java', 'Spring Boot', 'Oracle'],
          other: ['JUnit', 'Mockito'],
        },
        CIIC: {
          title: 'CIIC',
          description: 'Dự án hỗ trợ quản lý đơn từ.',
          time: '2023/12 - 2024/02',
          frontend: ['HTML', 'CSS', 'Javascript', 'C#', 'ASP.NET'],
          backend: ['C#', 'ASP.NET', 'SQL Server'],
        },
        RMS: {
          title: 'Resources Management System',
          description: 'Dự án hỗ trợ quản lý nhân sự.',
          time: '2023/10 - 2023/11',
          frontend: ['HTML', 'CSS', 'Javascript', 'Angular'],
          backend: ['Java', 'Spring Boot', 'PostgreSQL'],
        },
      },
      date: '2023/10',
      icon: <BriefcaseBusiness />,
    },
    {
      title: 'TOPEBOX',
      subTitle: 'Intern Game Developer',
      description: `Thực tập sinh lập trình game tại TOPEBOX. Được hướng dẫn lập trình game với công nghệ mới Unity's Data-Oriented Technology Stack (DOTS).`,
      date: '2023/06 - 2023/07',
      icon: <BriefcaseBusiness />,
    },
    {
      title: 'Fujinet Systems JSC',
      subTitle: 'Full Stack Developer',
      description:
        'Lập trình viên full stack tại Fujinet Systems JSC. Thực hiện phát triển, sửa chửa hệ thống MDware (MDware fully covers all function of item master system, ordering system(automatic), sales management system and so on) Dự án được phát triển bằng ngôn ngữ Java và Struts framework',
      date: '2022/07 - 2023/04',
      icon: <BriefcaseBusiness />,
    },
    {
      title: 'Đại học Bách Khoa TP HCM',
      subTitle: 'Khoa Khoa học và kỹ thuật máy tính',
      description: 'GPA: 7.2/10 (Khoa học máy tính)',
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
