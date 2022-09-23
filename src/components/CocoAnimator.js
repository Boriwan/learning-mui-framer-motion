import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion"
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

export default function CocoResizer() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [scale, setScale] = useState(1)
    const [rotate, setRotation] = useState(0)

    const changeX = (event, x) => {
        setX(x)
    }

    const changeY = (event, y) => {
        setY(y)
    }

    const changeScale = (event, scale) => {
        setScale(scale)
    }

    const changeRotation = (event, rotate) => {
        setRotation(rotate)
    }

    return (
        <div>
            <h1>Scale</h1>
            <div className='move_area'>
                <motion.div
                    animate={{
                        x,
                        y,
                        scale,
                        rotate,
                    }}
                    style={{
                        background: "aqua",
                        width: 55,
                        height: 25,
                        borderRadius: 10,
                        fontSize: 20,
                        textAlign: 'center'
                    }}
                >🥥  🥥</motion.div>
            </div>

            <div className='slider'>
                <p>x position</p>
                <Slider defaultValue={x} style={{
                    width: "50%",
                    marginLeft: 15,
                    color: "aqua",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                    onChange={changeX} aria-label="Default" valueLabelDisplay="auto" min={-100} max={100} />

                <p>y position</p>
                <Slider defaultValue={y} style={{
                    width: "50%",
                    marginLeft: 15,
                    color: "aqua",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                    onChange={changeY} aria-label="Default" valueLabelDisplay="auto" min={-100} max={100} />

                <p>scale</p>
                <Slider defaultValue={scale} style={{
                    width: "50%",
                    marginLeft: 15,
                    color: "aqua",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                    onChange={changeScale} aria-label="Default" valueLabelDisplay="auto" min={1} max={5} step={0.5} />

                <p>rotate</p>
                <Slider defaultValue={rotate} style={{
                    width: "50%",
                    marginLeft: 15,
                    color: "aqua",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                    onChange={changeRotation} aria-label="Default" valueLabelDisplay="auto" min={0} max={360} />

                <Button
                    variant="contained"
                    sx={{
                        color: "aqua",
                    }}
                    onClick={() => { setX(0); setY(0); setScale(1); setRotation(0) }}
                >Reset</Button>
            </div>

        </div>
    )
}
