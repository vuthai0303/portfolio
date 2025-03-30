import React from 'react'

interface ShinyTextProps {
  text: string
  speed?: number
  className?: string
  textColor?: string
  backgroundImage?: string
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  speed = 5,
  textColor = 'text-primary',
  backgroundImage = 'linear-gradient(120deg, rgba(255, 0, 255, 0) 40%, rgba(255, 0, 255, 0.8) 50%, rgba(255, 0, 255, 0) 60%)',
  className = '',
}) => {
  const gradientStyle = {
    animationDuration: `${speed}s`,
    backgroundImage: backgroundImage,
  }

  return (
    <div
      className={`${textColor} bg-clip-text inline-block animate-shine ${className}`}
      style={{
        ...gradientStyle,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
      }}
    >
      {text}
    </div>
  )
}

export default ShinyText
