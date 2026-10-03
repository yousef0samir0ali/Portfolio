import "./hero.css";
import laptopAnimation from "../../assets/animation/laptop1.json";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { AnimatedSection } from "../../assets/animation/animation";

import React, { Suspense } from "react";
import Loading from "../../components/loading/Loading";
import { useTranslation } from "react-i18next";
const Lottie = React.lazy(() => import("lottie-react"));

export default function Hero() {
  const { t, i18n } = useTranslation("hero");
  const lottieRef = useRef();
  const typedElement = useRef();

  useEffect(() => {
    const roles = t("roles", { returnObjects: true });
    const typed = new Typed(typedElement.current, {
      strings: Array.isArray(roles) ? roles : [],
      typeSpeed: 60,
      backSpeed: 25,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, [i18n.language, t]);

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
          <h3>{t("hello")}</h3>
          <h1>{t("name")}</h1>
          <h3>
            {t("andIm")} <span ref={typedElement}></span>
          </h3>
        </motion.div>
        <AnimatedSection>
          <p>{t("summary")}</p>
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

          <a href="https://gitlab.com/Yousef_ali" target="_blank" rel="noopener noreferrer" aria-label="GitLab">
            <span style={{ animationDelay: "0.5s" }} className=" slide-right flex icon gitlab-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 0 0-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 0 0-.867 0L1.386 9.452.044 13.587a.924.924 0 0 0 .331 1.023L12 23.054l11.625-8.443a.92.92 0 0 0 .33-1.024"
                />
              </svg>
            </span>
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
            {t("downloadCv")}
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
