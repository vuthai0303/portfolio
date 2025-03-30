import React from 'react'
import GradientText from './GradientText'
import ShinyText from './ShinyText'

interface TaskItemProps {
  task: {
    title: string
    time: string
    description: string
    frontend: string[]
    backend: string[]
    other: string[]
  }
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <div className="flex flex-col gap-1 justify-center items-start">
      <div className="flex flex-row justify-between items-center gap-3">
        <GradientText
          colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
          animationSpeed={5}
          showBorder={false}
          className="text-base font-semibold"
        >
          {task.title + ' (' + task.time + ')'}
        </GradientText>
      </div>
      <div className="ml-2">
        <ShinyText
          text={task.description}
          textColor="text-primary/80"
          backgroundImage="linear-gradient(120deg, rgba(255, 0, 255, 0) 40%, rgba(255, 0, 255, 0.8) 50%, rgba(255, 0, 255, 0) 60%)"
          speed={3}
          className="text-base font-normal"
        />
        <div className="flex flex-col justify-center items-start gap-1 text-sm">
          {task?.frontend && (
            <ShinyText
              text={'Frontend: ' + task.frontend.join(', ')}
              textColor="text-primary/80"
              backgroundImage="linear-gradient(120deg, rgba(255, 0, 255, 0) 40%, rgba(255, 0, 255, 0.8) 50%, rgba(255, 0, 255, 0) 60%)"
              speed={3}
              className="text-base font-normal"
            />
          )}
          {task?.backend && (
            <ShinyText
              text={'Backend: ' + task.backend.join(', ')}
              textColor="text-primary/80"
              backgroundImage="linear-gradient(120deg, rgba(255, 0, 255, 0) 40%, rgba(255, 0, 255, 0.8) 50%, rgba(255, 0, 255, 0) 60%)"
              speed={3}
              className="text-base font-normal"
            />
          )}
          {task?.other && (
            <ShinyText
              text={'Test: ' + task.other.join(', ')}
              textColor="text-primary/80"
              backgroundImage="linear-gradient(120deg, rgba(255, 0, 255, 0) 40%, rgba(255, 0, 255, 0.8) 50%, rgba(255, 0, 255, 0) 60%)"
              speed={3}
              className="text-base font-normal"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default TaskItem
