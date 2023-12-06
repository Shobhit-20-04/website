import React, { useEffect, useRef, useState } from "react";
import { CallToAction } from "../buttons";
import Image from "next/image";
import styles from "../../styles/home/about.module.scss";
import { SectionWrapper } from "@/hoc";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, slideIn, textVariant, zoomIn } from "@/utils/motion";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      {/* image box */}
      <motion.div variants={zoomIn(0.1, 0.7)} className={styles.imageBox}>
        <Image
          src={"/images/about-us-image.png"}
          alt="acetrix"
          width={500}
          height={500}
          className={styles.aboutImage}
        />
      </motion.div>

      <motion.div variants={textVariant()} className={styles.content}>
        <h2>About Us</h2>

        <p>
          We are Esports gaming community. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Commodi eiusquo ut omnis fuga qui dicta
        </p>

        <div className={styles.cta}>
          <CallToAction href="https://discord.gg/acetrix">
            Learn More
          </CallToAction>

          <Image
            src={"/images/logo.png"}
            alt="acetrix logo"
            width={200}
            height={200}
            className={styles.logo}
          />
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.1, 1)}
        className={styles.filledCircle}
      ></motion.div>
      <motion.div
        variants={slideIn("left", "tween", 0.1, 1)}
        className={styles.outlineCircle}
      ></motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.1, 1)}
        className={styles.filledRectangle}
      ></motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
