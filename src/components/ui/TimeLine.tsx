import { Chip } from '@heroui/react'
import React from 'react'
import GradientText from '../common/GradientText'
import ShinyText from '../common/ShinyText'
import TaskItem from '../common/TaskItem'

interface TimeLineProps {
  timeline: {
    title: string
    subTitle: string
    description: string
    date: string
    icon: React.ReactNode
    tasks?: {
      [key: string]: {
        title: string
        description: string
        time: string
        frontend: string[]
        backend: string[]
        other: string[]
      }[]
    }
  }[]
}

const TimeLine: React.FC<TimeLineProps> = ({ timeline }) => {
  return (
    <ol className="relative border-s border-primary">
      {timeline.map((item, index) => (
        <li key={index} className="mb-10 ms-6">
          <span className=" absolute flex items-center justify-center w-10 h-10 bg-background rounded-full -start-5 ring-2 ring-primary ">
            <span className="w-6 h-6 text-primary">{item.icon}</span>
          </span>
          <div className="translate-x-2">
            <div className="w-fit translate-y-1 flex flex-row justify-start items-center mb-1">
              <GradientText
                colors={['#DD62ED', '#4014ff', '#DD62ED', '#4014ff', '#DD62ED']}
                animationSpeed={5}
                showBorder={false}
                className="text-xl font-bold"
              >
                {item.title}
              </GradientText>
              {index == 0 && (
                <Chip color="primary" variant="bordered" className="ml-3">
                  Latest
                </Chip>
              )}
            </div>
            <span className="flex flex-col gap-1 justify-center items-start">
              <ShinyText
                text={item.date + (index == 0 ? ' - Now' : '')}
                textColor="text-primary/80"
                backgroundImage="linear-gradient(120deg, rgba(255, 0, 255, 0) 40%, rgba(255, 0, 255, 0.8) 50%, rgba(255, 0, 255, 0) 60%)"
                speed={3}
                className="text-sm font-normal"
              />
              <GradientText
                colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
                animationSpeed={5}
                showBorder={false}
                className="text-base font-semibold"
              >
                {item.subTitle}
              </GradientText>
              {item.description && (
                <ShinyText
                  text={item.description}
                  textColor="text-primary/80"
                  backgroundImage="linear-gradient(120deg, rgba(255, 0, 255, 0) 40%, rgba(255, 0, 255, 0.8) 50%, rgba(255, 0, 255, 0) 60%)"
                  speed={3}
                  className="text-base font-normal italic"
                />
              )}
              {item.tasks && Object.keys(item.tasks).length > 0 && (
                <div className="flex flex-col gap-1 justify-center items-start">
                  {Object.entries(item.tasks).map(([key, tasks]) =>
                    tasks.map((task, taskIndex) => (
                      <TaskItem key={`${key}-${taskIndex}`} task={task} />
                    )),
                  )}
                </div>
              )}
            </span>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default TimeLine
