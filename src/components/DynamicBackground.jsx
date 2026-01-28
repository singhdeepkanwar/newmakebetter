import React, { useEffect, useRef } from 'react';

const DynamicBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let lastTime = 0;
        const fpsLimit = 30; // Limit to 30 FPS for background for better performance

        const particles = [];
        const particleCount = 25; // Reduced particle count

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.5; // Slightly smaller
                this.speedX = (Math.random() - 0.5) * 0.3; // Slower
                this.speedY = (Math.random() - 0.5) * 0.3; // Slower
                this.alpha = Math.random() * 0.3 + 0.1; // More subtle
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(59, 130, 246, ${this.alpha})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = (timestamp) => {
            const elapsed = timestamp - lastTime;

            if (elapsed > 1000 / fpsLimit) {
                lastTime = timestamp - (elapsed % (1000 / fpsLimit));

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                particles.forEach((p) => {
                    p.update();
                    p.draw();
                });
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                pointerEvents: 'none',
                opacity: 0.6,
            }}
        />
    );
};

export default DynamicBackground;
