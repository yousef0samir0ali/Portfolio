import "./hero.css";
import Lottie from "lottie-react";
import labtopAnimation from "../../animation/labtop1.json";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { AnimatedSection } from "../../animation/animation";

export default function Hero() {
  const lottieRef = useRef();
  const typedElement = useRef();
  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["FrontEnd Developer", "Software Engineer", "Web Developer"],
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
            src="/images/me-modified.png"
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
            I’m Yousef Ali, Software Engineer specializing in web development
            using React JS, with experience in building interactive and
            high-performance web applications. Passionate about delivering
            innovative solutions and enhancing user experiences.
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
            href="https://www.instagram.com/yousef__s__ali/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              style={{ animationDelay: "0.8s" }}
              className=" slide-right flex icon icon-instagram"
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
          <a className="download-cv" href="/ycv.pdf" download={"Yousef_CV"}>
            Download CV
          </a>
        </AnimatedSection>
      </div>
      <div className="right-section animation ">
        <Lottie
          style={{ width: 400 }}
          lottieRef={lottieRef}
          onLoadedImages={() => {
            // @ts-ignore
            //https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={labtopAnimation}
        />
      </div>
    </section>
  );
}
