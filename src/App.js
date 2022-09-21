// import Button from '@mui/material/Button';
import { flexbox } from "@mui/system";
import { motion, useDragControls } from "framer-motion"

function App() {
  const controls = useDragControls()
  const constraintsRef =  {left: 50, right: 50, top: 50, bottom: 50} ;

  return (
    <>
      <motion.div
        style={{ background: "aqua", width: 100, height: 100}}
        drag
        dragControls={controls}
        whileDrag={{ scale: 1.5 }}
        dragConstraints={constraintsRef}></motion.div>
    </>
  )
}

export default App;
