// Typewriter.tsx
import React, { useEffect, useState } from 'react'

interface TypewriterProps {
  text: string
  speed?: number // Thời gian delay giữa các ký tự (ms), mặc định 150ms
  delay?: number // Thời gian delay sau khi hiển thị xong text (ms), mặc định 2000ms
  className: string
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 150, delay = 2000, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>

    if (currentIndex < text.length) {
      // Nếu chưa hoàn thành text, tiến hành hiển thị ký tự tiếp theo sau mỗi speed ms
      timeoutId = setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
      }, speed)
    } else {
      // Khi đã hiển thị toàn bộ text, chờ 3 giây rồi reset lại currentIndex để bắt đầu lại
      timeoutId = setTimeout(() => {
        setCurrentIndex(0)
      }, delay)
    }

    // Cleanup timeout khi effect chạy lại hoặc component unmount
    return () => clearTimeout(timeoutId)
  }, [currentIndex, text, speed])

  return (
    <p className={className}>
      {text.slice(0, currentIndex)}
      <span className="border-r-2 border-gray-500 ml-1 animate-blink" />
    </p>
  )
}

export default Typewriter
