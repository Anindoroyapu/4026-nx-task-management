const offices = [
  {
    icon: "/assets/imgOffice.svg",
    name: "San Francisco.",
    addr: "100 Market St, Suite 400,United States.",
  },
  {
    icon: "/assets/imgBuilding05.svg",
    name: "London.",
    addr: "25 Old Broad St, 5th Floor, United Kingdom.",
  },
  {
    icon: "/assets/imgNewOffice.svg",
    name: "Singapore.",
    addr: "1 Raffles Place, Tower 2, Singapore.",
  },
];

export default function DarkOfficeSection() {
  return (
    <div className="office-card panel" data-animate>
      <h2>&bull; Our all Office <span>Location.</span></h2>
      <div className="office-list">
        {offices.map((o) => (
          <div className="office-item" key={o.name}>
            <div className="icon"><img src={o.icon} alt="" /></div>
            <div>
              <h3>{o.name}</h3>
              <p>{o.addr}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
