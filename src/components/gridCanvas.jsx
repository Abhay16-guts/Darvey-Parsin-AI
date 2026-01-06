import { useEffect, useRef } from "react";

export default function GridCanvas() {
    const canvasRef = useRef(null);
    const gridRef = useRef([]);

    const squareSize = 80;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const initGrid = () => {
            gridRef.current = [];
            for (let x = 0; x < width; x += squareSize) {
                for (let y = 0; y < height; y += squareSize) {
                    gridRef.current.push({
                        x,
                        y,
                        alpha: 0,
                        fading: false,
                        lastTouched: 0,
                    });
                }
            }
        };

        const getCellAt = (x, y) =>
            gridRef.current.find(
                (cell) =>
                    x >= cell.x &&
                    x < cell.x + squareSize &&
                    y >= cell.y &&
                    y < cell.y + squareSize
            );

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initGrid();
        };

        const handleMouseMove = (e) => {
            const cell = getCellAt(e.clientX, e.clientY);
            if (cell && cell.alpha === 0) {
                cell.alpha = 1;
                cell.lastTouched = Date.now();
                cell.fading = false;
            }
        };

        const drawGrid = () => {
            ctx.clearRect(0, 0, width, height);
            const now = Date.now();

            for (const cell of gridRef.current) {
                if (cell.alpha > 0 && !cell.fading && now - cell.lastTouched > 500) {
                    cell.fading = true;
                }

                if (cell.fading) {
                    cell.alpha -= 0.02;
                    if (cell.alpha <= 0) {
                        cell.alpha = 0;
                        cell.fading = false;
                    }
                }

                if (cell.alpha > 0) {
                    const cx = cell.x + squareSize / 2;
                    const cy = cell.y + squareSize / 2;

                    const gradient = ctx.createRadialGradient(
                        cx,
                        cy,
                        5,
                        cx,
                        cy,
                        squareSize
                    );

                    // gradient.addColorStop(0, `rgba(0,255,204,${cell.alpha})`);
                    gradient.addColorStop(0, `rgba(255, 100, 255, ${cell.alpha})`);
                    gradient.addColorStop(1, `rgba(0,255,204,0)`);

                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 1.3;
                    ctx.strokeRect(
                        cell.x + 0.5,
                        cell.y + 0.5,
                        squareSize - 1,
                        squareSize - 1
                    );
                }
            }

            requestAnimationFrame(drawGrid);
        };

        initGrid();
        drawGrid();

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
        />
    );
}