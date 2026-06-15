const features = [
  { name: "Kanban Boards", core: true, growth: true, enterprise: true },
  { name: "Task Automation", core: true, growth: true, enterprise: true },
  { name: "Time Tracking", core: true, growth: true, enterprise: true },
  { name: "Advanced Analytics", core: false, growth: true, enterprise: true },
  { name: "API Access", core: false, growth: true, enterprise: true },
  { name: "SSO & SAML", core: false, growth: true, enterprise: true },
  { name: "Custom Integrations", core: false, growth: false, enterprise: true },
  { name: "Dedicated Support", core: false, growth: false, enterprise: true },
  { name: "SLA Guarantee", core: false, growth: false, enterprise: true },
];

export default function DarkInsightsSection() {
  return (
    <section className="insights wrap-1480">
      <div className="roi-box panel">
        <div className="roi-left">
          <h2>Calculate Your ROI with Confidence</h2>
          <p>Quickly calculate potential returns and see how your investment drives results.</p>
          <div className="sliders">
            <div className="slider">
              <div><span>Team Size</span><strong>10 People</strong></div>
              <i></i>
            </div>
            <div className="slider">
              <div><span>Average Annual Salary</span><strong>$75,000</strong></div>
              <i></i>
            </div>
          </div>
        </div>
        <div className="roi-right">
          <p>Based on 8% productivity improvement</p>
          <h3>$60,000</h3>
        </div>
      </div>

      <div className="compare panel">
        <h2>Feature Simple Comparison.</h2>
        <p>Quickly review and compare features across all plans in one place.</p>
        <table>
          <thead>
            <tr>
              <th>All Features</th>
              <th>Core</th>
              <th>Growth</th>
              <th>Enterprise</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {features.map((f) => (
              <tr key={f.name}>
                <td>{f.name}</td>
                <td><img src={`/assets/imgFrame${f.core ? "" : "4"}.svg`} alt={f.core ? "yes" : "no"} /></td>
                <td><img src={`/assets/imgFrame${f.growth ? "" : "4"}.svg`} alt={f.growth ? "yes" : "no"} /></td>
                <td><img src={`/assets/imgFrame${f.enterprise ? "" : "4"}.svg`} alt={f.enterprise ? "yes" : "no"} /></td>
                <td className="act">
                  <img src="/assets/imgFrame1.svg" alt="edit" />
                  <img src="/assets/imgFrame2.svg" alt="menu" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
