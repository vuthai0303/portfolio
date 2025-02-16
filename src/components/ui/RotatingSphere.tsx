import React, { useEffect, useRef, useState } from 'react'

interface Logo {
  initial: { x: number; y: number; z: number }
  image: HTMLImageElement
}

const RotatingSphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const logosRef = useRef<Logo[]>([])
  // Lưu các góc quay tích lũy theo hai trục
  const totalAngleRef = useRef({ x: 0, y: 0 })
  // Lưu tốc độ quay hiện tại
  const speedRef = useRef({ x: 0, y: 0.005 })
  // Đánh dấu chuột có đang ở trong vùng canvas hay không
  const isMouseInsideRef = useRef<boolean>(false)
  // Tốc độ quay mặc định
  const [defautSpeed, setDefaultSpeed] = useState(0.00005)

  // Danh sách logo (bổ sung theo thứ tự yêu cầu)
  const logosSrc = [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', alt: 'React' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg', alt: 'Vue' },
    {
      src: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
      alt: 'Java',
    },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg', alt: 'Git' },
    { src: 'https://angular.io/assets/images/logos/angular/angular.svg', alt: 'Angular' },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      alt: 'JavaScript',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
      alt: 'TypeScript',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg',
      alt: 'VSCode',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
      alt: 'Postgres',
    },
    { src: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg', alt: 'MySQL' },
    {
      src: 'https://www.svgrepo.com/show/217753/github.svg',
      alt: 'GitHub',
    },
    {
      src: 'https://www.svgrepo.com/show/452192/docker.svg',
      alt: 'Docker',
    },
    {
      src: 'https://www.svgrepo.com/show/303303/oracle-6-logo.svg',
      alt: 'Oracle',
    },
    {
      src: 'https://www.svgrepo.com/show/452091/python.svg',
      alt: 'Python',
    },
    {
      src: 'https://www.svgrepo.com/show/452184/csharp.svg',
      alt: 'C#',
    },
    {
      src: 'https://www.svgrepo.com/show/452183/cpp.svg',
      alt: 'C++',
    },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Đặt kích thước canvas dựa trên kích thước hiển thị
    canvas.width = Math.min(canvas.offsetWidth, canvas.offsetHeight)
    canvas.height = canvas.offsetHeight
    const width = canvas.width
    const height = canvas.height
    const centerX = width / 2
    const centerY = height / 2

    // Các tham số cho quả cầu
    const sphereRadius = Math.min(width, height) * 0.3
    const depth = 2 * sphereRadius
    const baseLogoSize = 25 // Kích thước mặc định của logo (30x30)

    let loadedCount = 0
    const logos: Logo[] = []
    const totalLogos = logosSrc.length

    // Tiền tải hình ảnh và phân bố đều trên bề mặt cầu (Golden Section Spiral)
    logosSrc.forEach((item, i) => {
      const img = new Image()
      img.src = item.src
      img.onload = () => {
        loadedCount++
        const phi = Math.acos(-1 + (2 * i + 1) / totalLogos)
        const theta = Math.sqrt(totalLogos * Math.PI) * phi
        const x = sphereRadius * Math.sin(phi) * Math.cos(theta)
        const y = sphereRadius * Math.sin(phi) * Math.sin(theta)
        const z = sphereRadius * Math.cos(phi)
        logos.push({
          initial: { x, y, z },
          image: img,
        })
        if (loadedCount === totalLogos) {
          logosRef.current = logos
          requestAnimationFrame(animate)
        }
      }
    })

    // Xác định tốc độ quay dựa theo vector (chuột - tâm canvas) khi chuột ở trong canvas
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      isMouseInsideRef.current = true
      const deltaX = mouseX - centerX
      const deltaY = mouseY - centerY
      speedRef.current.x = deltaX * defautSpeed
      speedRef.current.y = deltaY * defautSpeed
    }

    const handleMouseEnter = (_e: MouseEvent) => {
      isMouseInsideRef.current = true
    }

    // Khi chuột rời canvas, giữ nguyên hướng quay hiện tại (không thay đổi tốc độ)
    const handleMouseLeave = (_e: MouseEvent) => {
      isMouseInsideRef.current = false
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseenter', handleMouseEnter)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Nếu chuột đang trong canvas, áp dụng hiệu ứng "xả dần" để chuyển động mượt
      //   if (isMouseInsideRef.current) {
      //     speedRef.current.x *= 0.9
      //     speedRef.current.y *= 0.9
      //   }
      // Cập nhật góc quay tích lũy dựa trên speed hiện tại
      totalAngleRef.current.x += speedRef.current.x
      totalAngleRef.current.y += speedRef.current.y

      // Xác định minScale và maxScale để tính alpha (độ mờ)
      const minScale = depth / (depth + sphereRadius) // scale nhỏ nhất (logo xa)
      const maxScale = depth / (depth - sphereRadius) // scale lớn nhất (logo gần)

      // Tính toán vị trí mới cho từng logo sau các phép quay và chiếu phối cảnh
      const computedLogos = logosRef.current.map((logo) => {
        // Xoay quanh trục X (dùng totalAngleRef.current.y)
        const cosY = Math.cos(totalAngleRef.current.y)
        const sinY = Math.sin(totalAngleRef.current.y)
        const y1 = logo.initial.y * cosY - logo.initial.z * sinY
        const z1 = logo.initial.y * sinY + logo.initial.z * cosY

        // Xoay quanh trục Y (dùng totalAngleRef.current.x)
        const cosX = Math.cos(totalAngleRef.current.x)
        const sinX = Math.sin(totalAngleRef.current.x)
        const x1 = logo.initial.x * cosX + z1 * sinX
        const z2 = -logo.initial.x * sinX + z1 * cosX

        // Chiếu phối cảnh
        const scale = depth / (depth + z2)
        const x2d = x1 * scale + centerX
        const y2d = y1 * scale + centerY
        return { image: logo.image, x2d, y2d, scale, z2 }
      })

      // Sắp xếp theo z-index: logo xa (có z2 lớn, scale nhỏ) được vẽ trước, logo gần (z2 nhỏ, scale lớn) vẽ sau
      computedLogos.sort((a, b) => b.z2 - a.z2)

      // Vẽ từng logo với kích thước, độ mờ tính theo scale
      computedLogos.forEach((item) => {
        const { image, x2d, y2d, scale } = item
        const logoSize = baseLogoSize * scale
        // Tính độ mờ theo scale: nếu scale = minScale → alpha = 0.3; nếu scale = maxScale → alpha = 1
        const computedAlpha = (scale - minScale) / (maxScale - minScale)
        const alpha = 0.3 + 0.7 * Math.max(0, Math.min(1, computedAlpha))
        ctx.save()
        ctx.globalAlpha = alpha
        ctx.drawImage(image, x2d - logoSize / 2, y2d - logoSize / 2, logoSize, logoSize)
        ctx.restore()
      })

      requestAnimationFrame(animate)
    }

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseenter', handleMouseEnter)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full block" />
}

export default RotatingSphere
