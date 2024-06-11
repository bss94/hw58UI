import React from 'react';
import {AnimatePresence, motion} from "framer-motion";

interface Props extends React.PropsWithChildren {
  show: boolean;
}

const MyMotion: React.FC<Props> = ({show, children}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{opacity: 0, y: "150px", x: "150px"}}
          animate={{opacity: 1, y: 0, x: 0}}
          exit={{opacity: 0, y: "-150px", x: "150px"}}
          transition={{opacity: 0.3, y: 0.01, x: 0.1}}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MyMotion;