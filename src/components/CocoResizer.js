import React from 'react'
import { motion } from "framer-motion"
import Slider from '@mui/material/Slider';
import { useState } from "react";

export default function CocoResizer() {
    const [x, setX] = useState(0);

    const changeX = (event, x) => {
        setX(x)
    }
    return (
        <div>
            <h1>Scale</h1>
            <div className='move_area'>
                <motion.div
                    animate={{
                        x,
                        y: 0,
                        scale: 1,
                        rotate: 0,
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
                <Slider defaultValue={x}  style={{
                        width: "50%",
                        marginLeft: 15,
                        color: "aqua",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                }} 
                onChange={changeX} aria-label="Default" valueLabelDisplay="auto" min={-100} max={100} />
            </div>

        </div>
    )
}
