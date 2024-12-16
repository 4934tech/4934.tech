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

const createShape = (width: number, height: number, screenSize: number): Shape => {
    const sizeMultiplier = Math.min(width, height) / 1000
    const baseRadius = 50 + Math.random() * 150
    const radius = baseRadius * sizeMultiplier

    const speedMultiplier = screenSize / 1000
    return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: radius,
        color: colorInterpolation('#03181c', '#32b7b6', Math.random()),
        vx: (Math.random() - 0.5) * speedMultiplier,
        vy: (Math.random() - 0.5) * speedMultiplier
    }
}

export default function DynamicBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [screenSize, setScreenSize] = useState(0)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let shapes: Shape[] = []
        let animationFrameId: number

        const updateScreenSize = () => {
            const width = window.innerWidth
            const height = window.innerHeight
            const size = Math.sqrt(width * height)
            setScreenSize(size)
            return { width, height, size }
        }

        const resizeCanvas = () => {
            const { width, height, size } = updateScreenSize()
            canvas.width = width
            canvas.height = height

            const shapeCount = Math.max(3, Math.floor(size / 300))
            shapes = Array.from({ length: shapeCount }, () => createShape(width, height, size))
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

        const drawOverlay = () => {
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
            gradient.addColorStop(0, 'rgba(0,0,0,0.1)')
            gradient.addColorStop(1, 'rgba(30,30,30,0.2)')

            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Add some "metallic" lines
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
            ctx.lineWidth = 1
            for (let i = 0; i < canvas.width; i += 20) {
                ctx.beginPath()
                ctx.moveTo(i, 0)
                ctx.lineTo(i, canvas.height)
                ctx.stroke()
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            shapes.forEach(drawShape)
            shapes.forEach(updateShape)

            ctx.globalCompositeOperation = 'screen'
            shapes.forEach(drawShape)
            ctx.globalCompositeOperation = 'source-over'

            drawOverlay()

            animationFrameId = requestAnimationFrame(animate)
        }

        resizeCanvas()
        animate()

        window.addEventListener('resize', resizeCanvas)

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
    }, [screenSize])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10"
            style={{ filter: 'blur(100px)' }}
        />
    )
}

