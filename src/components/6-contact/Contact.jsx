import { useForm, ValidationError } from "@formspree/react";
import doneAnimation from "../../assets/animation/done.json";
import emailAnimation from "../../assets/animation/contact.json";
import "./contact.css";
import { useEffect, useState } from "react";
import { AnimatedSection } from "../../assets/animation/animation";

import React, { Suspense } from "react";
import Loading from "../loading/Loading";
import { useTranslation } from "react-i18next";
const Lottie = React.lazy(() => import("lottie-react"));

export default function Contact() {
  const { t } = useTranslation("contact");
  const [ok, setOk] = useState(false);
  const [state, handleSubmit] = useForm("xpwaybeb");
  useEffect(() => {
    if (state.succeeded) {
      setOk(true);
    }
  }, [state.succeeded]);

  return (
    <section className="contact">
      <AnimatedSection>
        <div className="info flex">
          <a
            href="https://www.google.com/maps/place/Tartus%E2%80%8E,+Syria/@34.8857606,35.8393244,13z/data=!4m6!3m5!1s0x15217e77890fb9a3:0xa072a491096e24b!8m2!3d34.8959276!4d35.8866517!16zL20vMDNsNDRm?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className=" info-sub flex"
          >
            <span className="icon-location flex"></span>
            <h3>{t("address")}</h3>
            <div className="info-sub-desc">{t("addressValue")}</div>
          </a>
          <a
            href="mailto:yosf.samir.ali@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="info-sub flex"
          >
            <span className="icon-envelope flex"></span>
            <h3>{t("email")}</h3>
            <div className="info-sub-desc">yosf.samir.ali@gmail.com</div>
          </a>
          <a href="tel:+963997705460" target="_blank" rel="noopener noreferrer" className="info-sub flex">
            <span className="icon-phone flex"></span>
            <h3>{t("phone")}</h3>
            <div className="info-sub-desc">+963 997 705 460</div>
          </a>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <p>{t("intro")}</p>
      </AnimatedSection>
      <div style={{ justifyContent: "space-between", alignItems: "flex-end" }} className="flex">
        <form onSubmit={handleSubmit}>
          <AnimatedSection>
            <div className="form-control flex">
              <label htmlFor="email">{t("emailLabel")}</label>
              <input type="email" name="email" id="email" required />
              <ValidationError prefix={t("emailPrefix")} field="email" errors={state.errors} />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="form-control flex">
              <label htmlFor="message">{t("messageLabel")}</label>
              <textarea name="message" id="message" required></textarea>
              <ValidationError prefix={t("messagePrefix")} field="message" errors={state.errors} />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <button type="submit" disabled={state.submitting}>
              {state.submitting ? t("sending") : t("send")}
            </button>
          </AnimatedSection>
          {ok && (
            <div className="sent flex">
              <div className="content">
                <p>
                  <Suspense fallback={<Loading />}>
                    <Lottie
                      style={{
                        position: "absolute",
                        height: 40,
                        backgroundColor: "transparent",
                        left: -30,
                        top: -8,
                      }}
                      animationData={doneAnimation}
                    />
                  </Suspense>
                  {t("success")}
                </p>
                <button
                  className="ok"
                  onClick={() => {
                    setOk(false);
                    // @ts-ignore
                    window.navigation.reload();
                  }}
                >
                  {t("ok")}
                </button>
              </div>
            </div>
          )}
        </form>
        <div className="animation">
          <Suspense fallback={<Loading />}>
            <Lottie style={{ height: 400 }} animationData={emailAnimation} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
