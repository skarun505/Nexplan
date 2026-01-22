'use client'

import { useEffect, useRef } from 'react'

export default function NetworkBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []

        // Configuration
        const particleCount = 60 // Reduced count for cleaner look
        const connectionDistance = 150
        const moveSpeed = 0.5

        class Particle {
            x: number
            y: number
            vx: number
            vy: number
            size: number

            constructor(width: number, height: number) {
                this.x = Math.random() * width
                this.y = Math.random() * height
                this.vx = (Math.random() - 0.5) * moveSpeed
                this.vy = (Math.random() - 0.5) * moveSpeed
                this.size = Math.random() * 2 + 1 // Random size between 1 and 3
            }

            update(width: number, height: number) {
                this.x += this.vx
                this.y += this.vy

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1
                if (this.y < 0 || this.y > height) this.vy *= -1
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fillStyle = 'rgba(0, 102, 255, 0.15)' // Primary blue with low opacity
                ctx.fill()
            }
        }

        const init = () => {
            if (!canvas) return

            // Set canvas size
            const updateSize = () => {
                canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
                canvas.height = canvas.parentElement?.clientHeight || window.innerHeight
            }
            updateSize()
            window.addEventListener('resize', updateSize)

            // Initialize particles
            particles = []
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(canvas.width, canvas.height))
            }

            return () => window.removeEventListener('resize', updateSize)
        }

        const animate = () => {
            if (!canvas || !ctx) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update and draw particles
            particles.forEach((particle, i) => {
                particle.update(canvas.width, canvas.height)
                particle.draw(ctx)

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const other = particles[j]
                    const dx = particle.x - other.x
                    const dy = particle.y - other.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < connectionDistance) {
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(0, 102, 255, ${0.1 * (1 - distance / connectionDistance)})` // Fade out line based on distance
                        ctx.lineWidth = 1
                        ctx.moveTo(particle.x, particle.y)
                        ctx.lineTo(other.x, other.y)
                        ctx.stroke()
                    }
                }
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        const cleanup = init()
        animate()

        return () => {
            if (cleanup) cleanup()
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
        />
    )
}
