import { useForm, ValidationError } from "@formspree/react";
import doneAnimation from "../../animation/done.json";
import emailAnimation from "../../animation/contact.json";
import "./contact.css";
import { useEffect, useState } from "react";
import { AnimatedSection } from "../../animation/animation";

import React, { Suspense } from "react";
import Loading from "../../components/loading/Loading";
const Lottie = React.lazy(() => import("lottie-react"));

export default function Contact() {
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
        <h1>
          <span className="icon-envelope"></span>
          Contact us
        </h1>
        <div className="info flex">
          <div className="flex">
            <span className="icon-location flex"></span>
            <h3>Address</h3>
            <a
              href="https://www.google.com/maps/place/Tartus%E2%80%8E,+Syria/@34.8857606,35.8393244,13z/data=!4m6!3m5!1s0x15217e77890fb9a3:0xa072a491096e24b!8m2!3d34.8959276!4d35.8866517!16zL20vMDNsNDRm?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Syria - Tartous
            </a>
          </div>
          <div className="flex">
            <span className="icon-envelope flex"></span>
            <h3>Email</h3>
            <a
              href="mailto: yosf.samir.ali@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              yosf.samir.ali@gmail.com
            </a>
          </div>
          <div className="flex">
            <span className="icon-phone flex"></span>
            <h3>Phone</h3>
            <a
              href="tel:+963 997 705 460"
              target="_blank"
              rel="noopener noreferrer"
            >
              +963 997 705 460
            </a>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <p>
          Contact us for more information and Get notified when I publish
          something new:
        </p>
      </AnimatedSection>
      <div
        style={{ justifyContent: "space-between", alignItems: "flex-end" }}
        className="flex"
      >
        <form onSubmit={handleSubmit}>
          <AnimatedSection>
            <div className="form-control flex">
              <label htmlFor="email">Email Address:</label>
              <input type="email" name="email" id="email" required />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="form-control flex">
              <label htmlFor="message">Your Message:</label>
              <textarea name="message" id="message" required></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <button type="submit" disabled={state.submitting}>
              {state.submitting ? "Sending ..." : "Send"}
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
                  Thanks for you ! Your message has been sent successfully.
                </p>
                <button
                  className="ok"
                  onClick={() => {
                    setOk(false);
                    // @ts-ignore
                    window.navigation.reload();
                  }}
                >
                  Ok
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
