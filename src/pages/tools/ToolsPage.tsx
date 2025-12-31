import { Card, CardFooter, CardHeader, Chip } from '@heroui/react'
import { Braces, Type } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import GradientText from '../../components/common/GradientText'
import ShinyText from '../../components/common/ShinyText'
import { ToolItem } from '../../types/ToolItem'

const ToolsPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const tools: ToolItem[] = [
    {
      id: 'json-formatter',
      title: 'JSON Formatter',
      description: [t('Tools.JsonFormatter.description1') || 'Định dạng, làm đẹp và kiểm tra JSON dễ dàng.'],
      icon: <Braces size={32} />,
      route: '/tools/json-formatter',
      tags: ['JSON', 'Formatter', 'Developer'],
    },
    {
      id: 'text-formatter',
      title: 'Text Formatter',
      description: [t('Tools.TextFormatter.description1') || 'Đếm từ/ký tự và định dạng văn bản nhanh chóng.'],
      icon: <Type size={32} />,
      route: '/tools/text-formatter',
      tags: ['Text', 'Formatter', 'Writer'],
    },
  ]

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-10 px-2 pt-2">
      {tools.map((tool) => (
        <Card
            key={tool.id}
            isFooterBlurred
            isPressable 
            className="h-fit cursor-pointer hover:scale-105 transition bg-background/90"
            onPress={() => navigate(tool.route)}
        >
          <CardHeader className="z-10 flex-col items-center">
            <div className="mb-2 text-primary">{tool.icon}</div>
            <GradientText
                colors={['#DD62ED', '#4014ff', '#DD62ED', '#4014ff', '#DD62ED']}
                animationSpeed={5}
                showBorder={false}
                className="font-bold text-2xl mx-auto justify-center items-center"
                >
                {tool.title}
            </GradientText>
          </CardHeader>
          <CardFooter className="bottom-0 z-10 flex-col items-center gap-2 h-fit">
            <ul className="list-none px-2">
              {tool.description.map((desc, idx) => (
                <ShinyText
                    key={idx}
                    text={desc}
                    textColor="text-primary/70"
                    backgroundImage="linear-gradient(120deg, rgba(255, 0, 255, 0) 40%, rgba(255, 0, 255, 0.8) 50%, rgba(255, 0, 255, 0) 60%)"
                    speed={3}
                    className="custom-class"
                />
              ))}
            </ul>
            <div className="flex flex-row gap-1 text-tiny flex-wrap">
              {tool.tags?.map((tag, idx) => (
                <Chip
                  key={idx}
                  color="primary"
                  variant="shadow"
                  classNames={{
                    content: 'text-tiny',
                  }}
                >
                  {tag}
                </Chip>
              ))}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default ToolsPage
