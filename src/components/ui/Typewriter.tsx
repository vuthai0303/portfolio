// Typewriter.tsx
import React, { useEffect, useState } from 'react'

interface TypewriterProps {
  text: string[]
  speed?: number // Thời gian delay giữa các ký tự (ms), mặc định 150ms
  delay?: number // Thời gian delay sau khi hiển thị xong text (ms), mặc định 1000ms
  className: string
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 150, delay = 1000, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComback, setIsComback] = useState(false)
  const [selectedIndexText, setSelectedIndexText] = useState(0)
  const [selectedText, setSelectedText] = useState(text[0] ?? '')

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>

    if (currentIndex === 0) {
      if (isComback) {
        setSelectedIndexText(text.length - 1 == selectedIndexText ? 0 : selectedIndexText + 1)
        setSelectedText(text[text.length - 1 == selectedIndexText ? 0 : selectedIndexText + 1])
      }
      setIsComback(false)
    }

    if (currentIndex === selectedText.length) {
      timeoutId = setTimeout(() => {
        setIsComback(true)
        setCurrentIndex(currentIndex - 1)
      }, delay)
    }

    if (currentIndex >= 0 && currentIndex <= selectedText.length) {
      timeoutId = setTimeout(() => {
        setCurrentIndex(currentIndex + 1 * (isComback ? -1 : 1))
      }, speed)
    }

    // Cleanup timeout
    return () => clearTimeout(timeoutId)
  }, [currentIndex, text, speed, isComback, delay, selectedIndexText, selectedText])

  return (
    <p className={className}>
      {selectedText.slice(0, currentIndex)}
      <span className="border-r-2 border-gray-500 ml-1 animate-blink" />
    </p>
  )
}

export default Typewriter
