import "./hero.css";

export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img className="avatar" src="/me-modified.png" alt="" />
          <div className="icon-verified" />
        </div>
        <h1>Software Engineer, FrontEnd Developer, and amateur astronaut.</h1>
        <p>
          I’m Ali Hassan, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that
          empower regular people to explore space on their own terms.
        </p>
        <div className="icons flex">
          <div className="icon ">
            <span className=" icon-linkedin-square"></span>
          </div>
          <div className="icon ">
            <span className=" icon icon-github"></span>
          </div>
          <div className="icon ">
            <span className=" icon icon-facebook-square"></span>
          </div>
          <div className="icon ">
            <span className=" icon icon-instagram"></span>
          </div>
        </div>
      </div>
      <div className="right-section animation border">animation</div>
    </section>
  );
}
