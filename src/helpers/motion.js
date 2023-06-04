export const container = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            delay: 0.2,
            staggerChildren: 0.4,
        }
    }
}

export const LetterContainer = (delay, delayChildren) => {
    return {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                delay: delay,
                staggerChildren: delayChildren,
            }
        }
    }
}


export const item = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    }
}


export const slideFromSide = (sideInit, sideEnd = 0, dirInit = 0, dirEnd = 0, delay = 0.1, duration = 2) => {
    return {
        hidden: {
            opacity: 0,
            x: sideInit,
            y: dirInit,
        },

        show: {
            opacity: 1,
            x: sideEnd,
            y: dirEnd,
            transition: {
                delay: delay,
                duration: duration,
                type: 'spring',
                damping: 20,
                // stiffness: 50
            }
        }
    }
}

export const rotation = {
    hidden: {

        opacity: 0,
        rotate: 90,
    },

    show: {
        borderRadius: ["0%", "20%", "50%", "50%", "10%"],
        opacity: 1,
        rotate: 0,
        transition: {
            duration: 1
        }
    }
}

export const simpleRotate = {
    hidden: {
        opacity: 0,
        rotateX: 90,
    },

    show: {
        opacity: 1,
        rotateX: 0,
        transition: {
            delay: 0.2,
            duration: 1
        }
    }

}

export const btnsMotion = {
    hidden: {
        opacity: 0,
        rotate: 30
    },
    show: {
        opacity: 1,
        rotate: 0,
        transition: {
            delay: 0.2,
            duration: .5
        }
    }
}

export const navMotion = {
    hidden: {
        opacity: 0,
        width: 0,
    },

    show: {
        opacity: 1,
        width: 'fit-content',
        transition: {
            delay: 1,
            duration: .7,
        }
    }
}