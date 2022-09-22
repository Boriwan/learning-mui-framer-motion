import React from 'react'
import { motion, useDragControls } from "framer-motion"

export default function Ball() {
    const controls = useDragControls()
    const constraintsRef = {
        top: -125,
        right: 125,
        bottom: 125,
        left: 1
    };
    return (
        <div id='move_area'>
            <motion.div
                style={{
                    background: "aqua",
                    width: 100,
                    height: 100,
                    borderRadius: 60,
                    fontSize: 80,
                    textAlign: 'center'
                }}
                drag
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                dragControls={controls}
                whileTap={{ cursor: "grabbing" }}
                whileDrag={{ scale: 1.2 }}
                dragConstraints={constraintsRef}>🥥</motion.div>
        </div >
    )
}
