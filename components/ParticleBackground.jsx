'use client';
import React, { useEffect, useRef } from 'react';

const CharacterCursor = ({
    characters = ['M', 'I', 'G', 'R', 'A', 'T', 'E', ' ', 'Z', 'O', 'N', 'E'],
    colors = ['#1f406d', '#e41e25'], // Brand Blue and Red
    font = '900 24px Syne, sans-serif',
}) => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const animationFrameRef = useRef(null);
    const canvImagesRef = useRef([]);
    const charIndexRef = useRef(0);
    const lastPosRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        let canvas = canvasRef.current;
        let context = null;
        let width = window.innerWidth;
        let height = window.innerHeight;

        class Particle {
            constructor(x, y, canvasItem) {
                const lifeSpan = Math.floor(Math.random() * 60 + 120);
                this.age = 0;
                this.initialLifeSpan = lifeSpan;
                this.lifeSpan = lifeSpan;
                this.velocity = {
                    x: (Math.random() - 0.5) * 0.2, // Minimal drift
                    y: -0.5, // Gentle upward "floating" trail
                };
                this.position = { x, y };
                this.canv = canvasItem;
            }

            update(ctx) {
                this.position.x += this.velocity.x;
                this.position.y += this.velocity.y;
                this.lifeSpan--;
                this.age++;

                const progress = this.age / this.initialLifeSpan;
                const scale = Math.max(1.2 * (1 - progress * 0.8), 0.5);
                const alpha = Math.max(1 - progress, 0);

                ctx.save();
                ctx.globalAlpha = alpha;
                ctx.translate(this.position.x, this.position.y);
                // No rotation for clean trailing effect

                if (this.canv) {
                    ctx.drawImage(
                        this.canv,
                        (-this.canv.width / 2) * scale,
                        (-this.canv.height / 2) * scale,
                        this.canv.width * scale,
                        this.canv.height * scale
                    );
                }

                ctx.restore();
            }
        }

        const init = () => {
            if (prefersReducedMotion.matches) return;

            canvas = canvasRef.current;
            if (!canvas) return;

            context = canvas.getContext('2d');
            if (!context) return;

            canvas.width = width;
            canvas.height = height;

            // Pre-render character canvases
            canvImagesRef.current = [];
            characters.forEach((char) => {
                const tempCanvas = document.createElement('canvas');
                const tempCtx = tempCanvas.getContext('2d');
                tempCtx.font = font;
                const metrics = tempCtx.measureText(char);

                tempCanvas.width = metrics.width + 20;
                tempCanvas.height = 50;

                tempCtx.font = font;
                tempCtx.textAlign = 'center';
                tempCtx.textBaseline = 'middle';
                tempCtx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
                tempCtx.fillText(char, tempCanvas.width / 2, tempCanvas.height / 2);

                canvImagesRef.current.push(tempCanvas);
            });

            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('resize', onWindowResize);
            loop();
        };

        const onWindowResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            if (canvasRef.current) {
                canvasRef.current.width = width;
                canvasRef.current.height = height;
            }
        };

        const onMouseMove = (e) => {
            const dx = e.clientX - lastPosRef.current.x;
            const dy = e.clientY - lastPosRef.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Trailing distance-based spawn
            if (dist < 20) return;

            lastPosRef.current.x = e.clientX;
            lastPosRef.current.y = e.clientY;

            const char = characters[charIndexRef.current];
            const img = canvImagesRef.current[charIndexRef.current];

            if (char !== ' ') {
                particlesRef.current.push(new Particle(e.clientX, e.clientY, img));
            }

            charIndexRef.current = (charIndexRef.current + 1) % characters.length;
        };

        const loop = () => {
            if (!context || !canvas) return;
            context.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = particlesRef.current.length - 1; i >= 0; i--) {
                const p = particlesRef.current[i];
                p.update(context);
                if (p.lifeSpan <= 0) {
                    particlesRef.current.splice(i, 1);
                }
            }

            animationFrameRef.current = requestAnimationFrame(loop);
        };

        init();

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onWindowResize);
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        };
    }, [characters, colors, font]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
            style={{ background: 'white' }}
        />
    );
};

export default CharacterCursor;

