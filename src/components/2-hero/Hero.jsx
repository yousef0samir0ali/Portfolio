import "./hero.css";
import laptopAnimation from "../../assets/animation/laptop1.json";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { AnimatedSection } from "../../assets/animation/animation";

import React, { Suspense } from "react";
import Loading from "../../components/loading/Loading";
const Lottie = React.lazy(() => import("lottie-react"));

export default function Hero() {
  const lottieRef = useRef();
  const typedElement = useRef();

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Front-End Developer",
        "Software Engineer",
        "React & Next.js Developer",
      ],
      typeSpeed: 60,
      backSpeed: 25,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            className="avatar"
            src="/images/me-modified.jpg"
            alt=""
          />
          <div className="icon-verified" />
        </div>
        <motion.div
          className="intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
        >
          <h3>Hello, It&apos;s Me</h3>
          <h1>Yousef Ali</h1>
          <h3>
            And I&apos;m a <span ref={typedElement}></span>
          </h3>
        </motion.div>
        <AnimatedSection>
          <p>
            Frontend Developer with 4+ years of experience building scalable,
            responsive web applications using React.js, Next.js, TypeScript, and
            Tailwind CSS. Skilled in developing reusable components, ERP
            systems, and e-commerce applications, integrating RESTful APIs,
            optimizing performance, and managing state with Redux Toolkit.
            Passionate about clean code, modern frontend best practices, and
            delivering high-quality user experiences in Agile teams.
          </p>
        </AnimatedSection>
        <div className="  icons flex">
          <a
            href="https://www.linkedin.com/in/yousefsamirali/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              style={{ animationDelay: "0.2s" }}
              className=" slide-right  flex icon-linkedin-square"
            ></span>
          </a>

          <a
            href="https://github.com/yousef0samir0ali"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              style={{ animationDelay: "0.4s" }}
              className=" slide-right flex icon icon-github"
            ></span>
          </a>

          <a
            href="https://www.facebook.com/yousefali48/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              style={{ animationDelay: "0.6s" }}
              className=" slide-right flex icon icon-facebook-square"
            ></span>
          </a>

          <a
            href="https://wa.me/+963997705460"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              style={{ animationDelay: "0.8s" }}
              className=" slide-right flex icon icon-whatsapp"
            ></span>
          </a>
          <a
            href="https://t.me/yousef_ali4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              style={{ animationDelay: "0.8s" }}
              className=" slide-right flex icon-telegram"
            ></span>
          </a>
        </div>
        <AnimatedSection>
          <a
            className="download-cv"
            href="/Yousef_Ali_Resume.pdf"
            download={"Yousef_Ali_Resume"}
          >
            Download CV
          </a>
        </AnimatedSection>
      </div>
      <div className="right-section animation ">
        <Suspense fallback={<Loading />}>
          <Lottie
            style={{ width: 400 }}
            lottieRef={lottieRef}
            onLoadedImages={() => {
              // @ts-ignore
              //https://lottiereact.com/
              lottieRef.current.setSpeed(0.5);
            }}
            animationData={laptopAnimation}
          />
        </Suspense>
      </div>
    </section>
  );
}
