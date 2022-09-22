import React from 'react'
import { motion, useDragControls } from "framer-motion"

export default function Ball() {
    const controls = useDragControls()
    const constraintsRef = {
        top: -125,
        right: 125,
        bottom: 125,
        left: -125,
    };
    return (
        <motion.div
            style={{
                background: "aqua",
                width: 50,
                height: 50,
                borderRadius: 40
            }}
            drag
            dragControls={controls}
            whileTap={{ cursor: "grabbing" }}
            whileDrag={{ scale: 1.5 }}
            dragConstraints={constraintsRef}></motion.div>
    )
}
