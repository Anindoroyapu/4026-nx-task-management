const supportCards = [
  {
    icon: "/assets/imgDiscountTag01.svg",
    title: "Sales.",
    desc: "Talk to our sales team about plans and pricing.",
    email: "sales@office.com",
  },
  {
    icon: "/assets/imgQuestion.svg",
    title: "Support.",
    desc: "Get help with your account or technical issues.",
    email: "support@office.com",
  },
  {
    icon: "/assets/imgAgreement02.svg",
    title: "Partnerships.",
    desc: "Explore integration and partnership opportunities.",
    email: "partners@office.com",
  },
];

export default function DarkContactHero() {
  return (
    <div className="hero container-1230" data-animate>
      <h1>We&rsquo;re Here to Help You <span>Success.</span></h1>
      <p>Have questions or need support? Reach out and our team will make sure your tasks stay on track.</p>
      <div className="support-cards">
        {supportCards.map((card) => (
          <article className="support" key={card.title}>
            <div className="top">
              <div className="icon"><img src={card.icon} alt="" /></div>
              <div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
            <div className="mail">&bull; {card.email} <img src="/assets/imgCopy.svg" alt="" /></div>
          </article>
        ))}
      </div>
    </div>
  );
}
