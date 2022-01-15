import React from 'react'
import { motion } from 'framer-motion'

const animation = {
    visible: {
        opacity: 1, x: 0,
        transition: {
            duration:1
        }
    },
    hidden: {
        opacity: 0,
        x:100
    },
    exit: {
        opacity:0, x:-100
    }
}

const MotionComponent = ({children}) => {
    return <motion.div variants={animation} initial="hidden" animate="visible">{children}</motion.div>;
}

export default MotionComponent
