'use client'

import { useEffect, useRef, useState } from 'react'

interface Shape {
    x: number
    y: number
    radius: number
    color: string
    vx: number
    vy: number
}

const colorInterpolation = (color1: string, color2: string, factor: number): string => {
    const r1 = parseInt(color1.slice(1, 3), 16)
    const g1 = parseInt(color1.slice(3, 5), 16)
    const b1 = parseInt(color1.slice(5, 7), 16)
    const r2 = parseInt(color2.slice(1, 3), 16)
    const g2 = parseInt(color2.slice(3, 5), 16)
    const b2 = parseInt(color2.slice(5, 7), 16)

    const r = Math.round(r1 + factor * (r2 - r1))
    const g = Math.round(g1 + factor * (g2 - g1))
    const b = Math.round(b1 + factor * (b2 - b1))

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
}

const createShape = (width: number, height: number, isMobile: boolean): Shape => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: isMobile ? Math.random() * 100 + 75 : Math.random() * 200 + 150,
    color: colorInterpolation('#03181c', '#32b7b6', Math.random()),
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5
})

export default function DynamicBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let shapes: Shape[] = []
        let animationFrameId: number

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768) // Adjust this breakpoint as needed
        }

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            checkMobile()
            const shapeCount = isMobile ? 3 : 5
            shapes = Array.from({ length: shapeCount }, () => createShape(canvas.width, canvas.height, isMobile))
        }

        const drawShape = (shape: Shape) => {
            ctx.beginPath()
            ctx.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2)
            ctx.fillStyle = shape.color
            ctx.fill()
        }

        const updateShape = (shape: Shape) => {
            shape.x += shape.vx
            shape.y += shape.vy

            if (shape.x < -shape.radius) shape.x = canvas.width + shape.radius
            if (shape.x > canvas.width + shape.radius) shape.x = -shape.radius
            if (shape.y < -shape.radius) shape.y = canvas.height + shape.radius
            if (shape.y > canvas.height + shape.radius) shape.y = -shape.radius
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            shapes.forEach(drawShape)
            shapes.forEach(updateShape)

            ctx.globalCompositeOperation = 'screen'
            shapes.forEach(drawShape)
            ctx.globalCompositeOperation = 'source-over'

            animationFrameId = requestAnimationFrame(animate)
        }

        resizeCanvas()
        animate()

        window.addEventListener('resize', resizeCanvas)

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
    }, [isMobile])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10"
            style={{ filter: 'blur(100px)' }}
        />
    )
}

