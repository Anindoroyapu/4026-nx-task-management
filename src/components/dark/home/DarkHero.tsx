import DarkPartnerLogos from "./DarkPartnerLogos";

export default function DarkHero() {
  return (
    <section className="hero container-wide" data-animate="fade-up">
      <div className="pill">
        <span className="icon-wrap"><img src="/assets/imgFluentTaskListSquareSparkle24Filled.svg" alt="task icon" /></span>
        Task management Solutions for Businesses.
      </div>
      <h1>Boost your productivity with intuitive task <span>management.</span></h1>
      <p>Manage tasks, track progress, and collaborate with your team in one beautifully simple workspace designed for productivity.</p>
      <div className="hero-buttons">
        <button className="btn btn-dark">Start free Trial</button>
        <button className="btn btn-light">Book a Demo</button>
      </div>
      <DarkPartnerLogos />
      <div className="hero-preview">
        <img src="/assets/imgImage2.png" alt="Task dashboard preview" />
      </div>
    </section>
  );
}
