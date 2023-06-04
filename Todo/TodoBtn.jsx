import {motion} from 'framer-motion';

const TodoBtn = ({children, ...props}) => {
  return (
    <motion.button {...props}>
        {children}
    </motion.button>
  )
}

export default TodoBtn