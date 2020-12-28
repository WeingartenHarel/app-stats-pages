import React from 'react';
import PropTypes from 'prop-types';
import styles from './animation.module.scss';

import { motion ,useMotionValue } from "framer-motion";

import { Frame, useAnimation } from 'framer'

export const Animation = () => {

    const controls = useAnimation()
    const x = useMotionValue(0)
   

    function onStopAnimation() {
      console.log('clicked')
      x.stop()
      controls.stop({
        repeat: 1,
      })
    }

    function onStartAnimation() {
      
      console.log('start clicked')
      controls.start({
        x: "100%",
        backgroundColor: "#f00",
        transition: { duration: 3 },
      })
    }

    return <div>
      <button onClick={onStopAnimation}>Stop Animation</button>
      <button onClick={onStartAnimation}>Start Animation</button>
      {/* <button toggle={() => toggleOpen()}>toggle Animation</button> */}
      <motion.div
        className={styles.shape}
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1,controls }}

        // animate={isOpen ? "open" : "closed"}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          repeat: Infinity,
          duration: 2,
        }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
          repeat: 1,
        }}
      />
    </div>
  
      };



// animation.propTypes = {};

// animation.defaultProps = {};

// export default Animation;
