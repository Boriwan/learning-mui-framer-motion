import React from 'react'
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

export default function Cards() {
    return (
        <AnimateSharedLayout>
            <motion.ul layout initial={{ borderRadius: 25 }}>
                {items.map(item => (
                    <Item key={item} />
                ))}
            </motion.ul>
        </AnimateSharedLayout>
    );
}

function Item() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (

        <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            <motion.div className="avatar" layout>🏝</motion.div>
            <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
        </motion.li>
    );
}

function Content() {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h2>🥥COCONUTS🥥</h2>
            <p>The coconut tree (Cocos nucifera) is a member of the palm tree family (Arecaceae) and the only living species of the genus Cocos.</p>
        </motion.div>
    );
}

const items = [0];
