import "./mainC.css";

export default function MainContent() {
  return (
    <main className="flex">
      <section className="left-section flex">
        <button className="active">all Projcts</button>
        <button>React Js</button>
        <button>React Js</button>
        <button>JavaScript</button>
        <button>Html & Css</button>
      </section>
      <section className="right-section flex  ">
        {["a", "b", "c", "e", "f"].map((index) => (
          <article key={index} className="card ">
            <img width={266} src="/1.jpg" alt="" />
            <div style={{ width: "266px" }} className="box">
              <h1>Landing Page 2</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolorem. Quos illum in nesciunt iure fugit dolor numquam dolorum, veritatis
              </p>
              <div className=" icons flex">
                <div style={{ position: "relative" }} className="flex">
                  <div style={{ left: "2rem" }} className="icon-link"></div>
                  <div className=" icon-github"></div>
                </div>
                <a className="flex" href="">
                  more
                  <span className="icon-arrow-right"></span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
