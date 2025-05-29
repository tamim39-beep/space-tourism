
export default function Home() {
  return (
    <main className="home-container">
      <section className="home-content">
        <div className="intro-text">
          <h5 className="heading-5">So, you want to travel to</h5>
          <h1 className="heading-1">Space</h1>
          <p className="body-text">
            Let’s face it: if you want to go to space, you might as well genuinely <span></span>
            go to outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!
          </p>
        </div>

        <div className="explore-wrapper">
          <button className="explore-button" aria-label="Explore Space Tourism" >
            Explore
          </button>
        </div>
      </section>
    </main>
  );
}
