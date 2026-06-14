"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function setBillingMode(mode: string) {
  const isAnnual = mode === "annual";
  const toggleButtons = document.querySelectorAll(".billing-toggle button");
  const priceFields = document.querySelectorAll<HTMLElement>(".pricing-cards .price");

  toggleButtons.forEach((button) => button.classList.remove("active"));
  toggleButtons[isAnnual ? 1 : 0].classList.add("active");

  priceFields.forEach((price) => {
    if (price.classList.contains("custom")) {
      const label = isAnnual ? price.dataset.annualLabel : price.dataset.monthlyLabel;
      price.innerHTML = '<img src="/assets/imgGroup.svg" alt=""> /' + label;
      return;
    }

    const amount = isAnnual ? price.dataset.annualPrice : price.dataset.monthlyPrice;
    const period = isAnnual ? "year" : "month";
    price.innerHTML = "$" + amount + ' <small>/' + period + "</small>";
  });
}

function setFaqItem(item: HTMLElement) {
  const parent = item.parentElement!;
  const openIcon = "/assets/imgRemoveCircleHalfDot.svg";
  const closedIcon = "/assets/imgAddCircleHalfDot.svg";

  parent.querySelectorAll(".item").forEach((entry) => {
    entry.classList.remove("open");
    const icon = entry.querySelector("img");
    if (icon) {
      icon.src = closedIcon;
      icon.alt = "expand";
    }
  });

  item.classList.add("open");
  const activeIcon = item.querySelector("img");
  if (activeIcon) {
    activeIcon.src = openIcon;
    activeIcon.alt = "collapse";
  }
}

export default function PricingDarkPage() {
  useEffect(() => {
    setBillingMode("annual");
  }, []);

  return (
    <div className="dark-mode">
      <div className="relative overflow-hidden pricing-page">
        <img className="block max-w-full opacity-[0.12] absolute w-[216px] h-[216px] top-[303px] left-0 decor d1" src="/assets/imgVector.svg" alt="" />
        <img className="block max-w-full opacity-[0.12] absolute w-[216px] h-[216px] top-[303px] right-0 decor d2" src="/assets/imgVector.svg" alt="" />

        <Header active="pricing" isDark={true} />

        <section className="pt-[112px] pb-[52px] grid justify-items-center gap-6 mx-auto hero wrap-1480">
          <div className="text-center w-full max-w-[910px] title-box">
            <h1 className="m-0">Modern, Scalable Pricing Designed for Growing Teams of <span>Every Size.</span></h1>
            <p className="mt-4 text-xl m-0">Transparent plans built to support startups, growing teams, and large organizations.</p>
          </div>

          <div className="flex gap-2 p-1 border-[1.5px] border-[#f0f0f0] rounded-full bg-[#f5f5f7] border-[#31333c] bg-[#14161d] billing-toggle">
            <button type="button" className="border-0 bg-transparent font-bold rounded-full px-4 py-2.5 cursor-pointer text-[#868686] text-[#a9adb8]" onClick={() => setBillingMode("monthly")}>Monthly</button>
            <button type="button" className="border-0 bg-transparent font-bold rounded-full px-4 py-2.5 cursor-pointer inline-flex gap-2 items-center text-[#868686] text-[#a9adb8] bg-white border-[1.5px] border-[#fafafa] bg-[#22252f] border-[#3f4350] text-[#f2f3f7] active" onClick={() => setBillingMode("annual")}>Annual <span className="text-[10px] text-white px-1.5 py-[5px] rounded-full">-20%</span></button>
          </div>

          <div className="w-full grid gap-4 pricing-cards">
            <article className="relative h-[600px] rounded-xl bg-white p-6 flex flex-col gap-[18px] border-[#2f3139] bg-[#171920] card">
              <h3 className="text-xl m-0">Starter Package</h3>
              <p className="text-sm text-[#a5a8b2] m-0">Perfect for individuals and small teams getting started.</p>
              <div className="text-3xl font-extrabold price" data-monthly-price="9.99" data-annual-price="95.88">$9.99 <small className="text-sm font-normal text-[#a5a8b2]">/month</small>
              </div>
              <button className="border-0 rounded-full px-5 py-3.5 text-base font-bold bg-[#e7e7e7] bg-[#2a2d36] text-[#f0f0f2] btn light">Get Started Today</button>
              <h4 className="text-xl mt-0.5 m-0">Included Features:</h4>
              <ul className="m-0 pl-[22px] grid gap-2 text-base">
                <li className="text-left">Up to 10 projects</li>
                <li className="text-left">Basic Kanban boards</li>
                <li className="text-left">5GB secure storage</li>
                <li className="text-left">Email support</li>
                <li className="text-left">Basic task management</li>
                <li className="text-left">Activity tracking</li>
              </ul>
            </article>

            <article className="relative h-[600px] rounded-xl bg-white p-6 flex flex-col gap-[18px] border-[#2f3139] bg-[#171920] card glow">
              <h3 className="text-xl m-0">Growth Package</h3>
              <p className="text-sm text-[#a5a8b2] m-0">Best for growing teams that need advanced collaboration.</p>
              <div className="text-3xl font-extrabold price" data-monthly-price="29.99" data-annual-price="287.90">$29.99 <small className="text-sm font-normal text-[#a5a8b2]">/month</small></div>
              <button className="border-0 rounded-full px-5 py-3.5 text-base font-bold bg-[#e7e7e7] bg-[#2a2d36] text-[#f0f0f2] btn light">Get Started Today</button>
              <h4 className="text-xl mt-0.5 m-0">Included Features:</h4>
              <ul className="m-0 pl-[22px] grid gap-2 text-base">
                <li className="text-left">Unlimited projects</li>
                <li className="text-left">Advanced analytics</li>
                <li className="text-left">Workflow automation</li>
                <li className="text-left">Priority support</li>
                <li className="text-left">Team dashboards</li>
                <li className="text-left">API access</li>
                <li className="text-left">File sharing</li>
              </ul>
            </article>

            <article className="relative h-[600px] rounded-xl bg-white p-6 flex flex-col gap-[18px] border-[#2f3139] bg-[#171920] card">
              <h3 className="text-xl m-0">Business Package</h3>
              <p className="text-sm text-[#a5a8b2] m-0">Designed for teams managing complex workflows.</p>
              <div className="text-3xl font-extrabold price" data-monthly-price="49.99" data-annual-price="479.90">$49.99 <small className="text-sm font-normal text-[#a5a8b2]">/month</small></div>
              <button className="border-0 rounded-full px-5 py-3.5 text-base font-bold text-white btn dark">Get Business Package</button>
              <h4 className="text-xl mt-0.5 m-0">Included Features:</h4>
              <ul className="m-0 pl-[22px] grid gap-2 text-base">
                <li className="text-left">Everything in Growth</li>
                <li className="text-left">Advanced reporting</li>
                <li className="text-left">Custom workflows</li>
                <li className="text-left">Team performance insights</li>
                <li className="text-left">Integration with external tools</li>
                <li className="text-left">Role</li>
                <li className="text-left">Permission management</li>
              </ul>
            </article>

            <article className="relative h-[600px] rounded-xl bg-white p-6 flex flex-col gap-[18px] border-[#2f3139] bg-[#171920] card">
              <h3 className="text-xl m-0">Enterprise Package</h3>
              <p className="text-sm text-[#a5a8b2] m-0">Built for large organizations with advanced security needs.</p>
              <div className="text-3xl font-extrabold flex items-center gap-[6px] text-sm text-[#a5a8b2] price custom" data-monthly-label="Custom Pricing" data-annual-label="Custom Pricing"><img className="block max-w-full w-[38px] h-[38px]" src="/assets/imgGroup.svg" alt="" /> /Custom Pricing</div>
              <button className="border-0 rounded-full px-5 py-3.5 text-base font-bold bg-[#e7e7e7] bg-[#2a2d36] text-[#f0f0f2] btn light">Request a Quote</button>
              <h4 className="text-xl mt-0.5 m-0">Included Features:</h4>
              <ul className="m-0 pl-[22px] grid gap-2 text-base">
                <li className="text-left">Everything in Business</li>
                <li className="text-left">SSO & SAML authentication</li>
                <li className="text-left">Dedicated support manager</li>
                <li className="text-left">Custom integrations</li>
                <li className="text-left">SLA uptime guarantee</li>
                <li className="text-left">Advanced security controls</li>
                <li className="text-left">Audit logs</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="py-6 pb-[112px] grid gap-6 mx-auto insights wrap-1480">
          <div className="border-[1.5px] border-[#f0f0f0] rounded-2xl p-5 grid gap-4 grid-cols-[1fr_460px] border-[#2f3139] bg-[#13151b] roi-box panel">
            <div className="border-[1.5px] border-[#f0f0f0] rounded-[10px] bg-white p-10 border-[#2f3139] bg-[#1a1d24] roi-left">
              <h2 className="text-[34px] m-0">Calculate Your ROI with Confidence</h2>
              <p className="mt-1 text-base m-0">Quickly calculate potential returns and see how your investment drives results.</p>
              <div className="mt-12 grid grid-cols-2 gap-[6px] sliders">
                <div className="bg-[#fafafa] border-[1.5px] border-[#f0f0f0] rounded-xl p-5 border-[#2f3139] bg-[#1a1d24] slider">
                  <div className="flex justify-between text-base"><span>Team Size</span><strong className="font-bold">10 People</strong></div><i className="mt-6 block h-4 rounded-full"></i>
                </div>
                <div className="bg-[#fafafa] border-[1.5px] border-[#f0f0f0] rounded-xl p-5 border-[#2f3139] bg-[#1a1d24] slider">
                  <div className="flex justify-between text-base"><span>Average Annual Salary</span><strong className="font-bold">$75,000</strong></div><i className="mt-6 block h-4 rounded-full"></i>
                </div>
              </div>
            </div>
            <div className="border-[1.5px] border-[#f0f0f0] rounded-[10px] bg-white p-10 flex flex-col justify-between border-[#2f3139] bg-[#1a1d24] roi-right">
              <p className="text-xl font-bold m-0">Based on 8% productivity improvement</p>
              <h3 className="text-[60px] text-[#34a853] m-0">$60,000</h3>
            </div>
          </div>

          <div className="border-[1.5px] border-[#f0f0f0] rounded-2xl p-10 border-[#2f3139] bg-[#13151b] compare panel">
            <h2 className="text-[34px] m-0">Feature Simple Comparison.</h2>
            <p className="mt-1 text-base m-0">Quickly review and compare features across all plans in one place.</p>
            <table className="mt-12 w-full border-separate border-spacing-[0_8px]">
              <thead>
                <tr>
                  <th className="bg-white border border-[#e5e7eb] px-4 py-3 text-base text-left bg-[#1d2029] border-[#323542]">All Features</th>
                  <th className="bg-white border border-[#e5e7eb] px-4 py-3 text-base text-left bg-[#1d2029] border-[#323542]">Core</th>
                  <th className="bg-white border border-[#e5e7eb] px-4 py-3 text-base text-left bg-[#1d2029] border-[#323542]">Growth</th>
                  <th className="bg-white border border-[#e5e7eb] px-4 py-3 text-base text-left bg-[#1d2029] border-[#323542]">Enterprise</th>
                  <th className="bg-white border border-[#e5e7eb] px-4 py-3 text-base text-left bg-[#1d2029] border-[#323542]">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#171920]">
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]">Kanban Boards</td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame.svg" alt="yes" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame.svg" alt="yes" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame.svg" alt="yes" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base flex justify-center gap-1 items-center border-t-[#2c2f39] border-b-[#2c2f39] act"><img className="block max-w-full w-7 h-[29px] border border-[#e5e7eb] rounded-[6px] p-1.5 bg-white border-[#373b48] bg-[#1f2128]" src="/assets/Frame4.svg" alt="edit" /><img className="block max-w-full w-7 h-[29px] border border-[#e5e7eb] rounded-[6px] p-1.5 bg-white border-[#373b48] bg-[#1f2128]" src="/assets/Frame3.svg" alt="menu" /></td>
                </tr>
                <tr className="bg-[#171920]">
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]">Task Automation</td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame.svg" alt="yes" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame.svg" alt="yes" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame.svg" alt="yes" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base flex justify-center gap-1 items-center border-t-[#2c2f39] border-b-[#2c2f39] act"><img className="block max-w-full w-7 h-[29px] border border-[#e5e7eb] rounded-[6px] p-1.5 bg-white border-[#373b48] bg-[#1f2128]" src="/assets/Frame4.svg" alt="edit" /><img className="block max-w-full w-7 h-[29px] border border-[#e5e7eb] rounded-[6px] p-1.5 bg-white border-[#373b48] bg-[#1f2128]" src="/assets/Frame3.svg" alt="menu" /></td>
                </tr>
                <tr className="bg-[#171920]">
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]">Time Tracking</td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame.svg" alt="yes" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame.svg" alt="yes" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame.svg" alt="yes" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base flex justify-center gap-1 items-center border-t-[#2c2f39] border-b-[#2c2f39] act"><img className="block max-w-full w-7 h-[29px] border border-[#e5e7eb] rounded-[6px] p-1.5 bg-white border-[#373b48] bg-[#1f2128]" src="/assets/Frame4.svg" alt="edit" /><img className="block max-w-full w-7 h-[29px] border border-[#e5e7eb] rounded-[6px] p-1.5 bg-white border-[#373b48] bg-[#1f2128]" src="/assets/Frame3.svg" alt="menu" /></td>
                </tr>
                <tr className="bg-[#171920]">
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]">Advanced Analytics</td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame4.svg" alt="no" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame.svg" alt="yes" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame.svg" alt="yes" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base flex justify-center gap-1 items-center border-t-[#2c2f39] border-b-[#2c2f39] act"><img className="block max-w-full w-7 h-[29px] border border-[#e5e7eb] rounded-[6px] p-1.5 bg-white border-[#373b48] bg-[#1f2128]" src="/assets/Frame4.svg" alt="edit" /><img className="block max-w-full w-7 h-[29px] border border-[#e5e7eb] rounded-[6px] p-1.5 bg-white border-[#373b48] bg-[#1f2128]" src="/assets/Frame3.svg" alt="menu" /></td>
                </tr>
                <tr className="bg-[#171920]">
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]">API Access</td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame4.svg" alt="no" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame.svg" alt="yes" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame.svg" alt="yes" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base flex justify-center gap-1 items-center border-t-[#2c2f39] border-b-[#2c2f39] act"><img className="block max-w-full w-7 h-[29px] border border-[#e5e7eb] rounded-[6px] p-1.5 bg-white border-[#373b48] bg-[#1f2128]" src="/assets/Frame4.svg" alt="edit" /><img className="block max-w-full w-7 h-[29px] border border-[#e5e7eb] rounded-[6px] p-1.5 bg-white border-[#373b48] bg-[#1f2128]" src="/assets/Frame3.svg" alt="menu" /></td>
                </tr>
                <tr className="bg-[#171920]">
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]">SSO & SAML</td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame4.svg" alt="no" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame.svg" alt="yes" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame.svg" alt="yes" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base flex justify-center gap-1 items-center border-t-[#2c2f39] border-b-[#2c2f39] act"><img className="block max-w-full w-7 h-[29px] border border-[#e5e7eb] rounded-[6px] p-1.5 bg-white border-[#373b48] bg-[#1f2128]" src="/assets/Frame4.svg" alt="edit" /><img className="block max-w-full w-7 h-[29px] border border-[#e5e7eb] rounded-[6px] p-1.5 bg-white border-[#373b48] bg-[#1f2128]" src="/assets/Frame3.svg" alt="menu" /></td>
                </tr>
                <tr className="bg-[#171920]">
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]">Custom Integrations</td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame4.svg" alt="no" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame4.svg" alt="no" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame.svg" alt="yes" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base flex justify-center gap-1 items-center border-t-[#2c2f39] border-b-[#2c2f39] act"><img className="block max-w-full w-7 h-[29px] border border-[#e5e7eb] rounded-[6px] p-1.5 bg-white border-[#373b48] bg-[#1f2128]" src="/assets/Frame4.svg" alt="edit" /><img className="block max-w-full w-7 h-[29px] border border-[#e5e7eb] rounded-[6px] p-1.5 bg-white border-[#373b48] bg-[#1f2128]" src="/assets/Frame3.svg" alt="menu" /></td>
                </tr>
                <tr className="bg-[#171920]">
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]">Dedicated Support</td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame4.svg" alt="no" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame4.svg" alt="no" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame.svg" alt="yes" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base flex justify-center gap-1 items-center border-t-[#2c2f39] border-b-[#2c2f39] act"><img className="block max-w-full w-7 h-[29px] border border-[#e5e7eb] rounded-[6px] p-1.5 bg-white border-[#373b48] bg-[#1f2128]" src="/assets/Frame4.svg" alt="edit" /><img className="block max-w-full w-7 h-[29px] border border-[#e5e7eb] rounded-[6px] p-1.5 bg-white border-[#373b48] bg-[#1f2128]" src="/assets/Frame3.svg" alt="menu" /></td>
                </tr>
                <tr className="bg-[#171920]">
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]">SLA Guarantee</td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame4.svg" alt="no" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame4.svg" alt="no" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base border-t-[#2c2f39] border-b-[#2c2f39]"><img className="block max-w-full w-6 h-6" src="/assets/imgFrame.svg" alt="yes" /></td>
                  <td className="border-t border-t-[#f7f7f7] border-b border-b-[#f7f7f7] px-4 py-2 h-10 text-base flex justify-center gap-1 items-center border-t-[#2c2f39] border-b-[#2c2f39] act"><img className="block max-w-full w-7 h-[29px] border border-[#e5e7eb] rounded-[6px] p-1.5 bg-white border-[#373b48] bg-[#1f2128]" src="/assets/Frame4.svg" alt="edit" /><img className="block max-w-full w-7 h-[29px] border border-[#e5e7eb] rounded-[6px] p-1.5 bg-white border-[#373b48] bg-[#1f2128]" src="/assets/Frame3.svg" alt="menu" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="relative py-[112px] bg-white bg-[#0f1015] faq">
          <div className="relative z-[1] grid justify-between items-center gap-6 mx-auto wrap-1480 faq-wrap">
            <div className="grid gap-12 faq-left">
              <h2 className="text-[55px] m-0">Your <span>Questions</span> About Workflow Management, Answered</h2>
              <p className="text-xl m-0">Explore helpful insights and solutions to streamline the way your team works.</p>
              <button className="border-0 rounded-full px-5 py-3.5 text-base font-bold text-white btn dark">Contact Us</button>
            </div>
            <div className="grid gap-2 faq-right">
              <article className="relative border-[1.5px] border-[#f1f1f1] rounded-2xl p-6 cursor-pointer border-[#2f3139] bg-[#171920] item" onClick={(e) => setFaqItem(e.currentTarget)}>
                <h4 className="text-2xl pr-[44px] m-0">• Can I try the platform for free?</h4><img className="block max-w-full absolute top-6 right-6 w-[30px] h-[30px]" src="/assets/imgAddCircleHalfDot.svg" alt="" />
                <p className="hidden mt-4 text-base m-0">Yes. You can start with the free trial to explore core task management, team collaboration, and workspace setup before choosing a paid plan.</p>
              </article>
              <article className="relative border-[1.5px] border-[#f1f1f1] rounded-2xl p-6 cursor-pointer border-[#2f3139] bg-[#171920] item open" onClick={(e) => setFaqItem(e.currentTarget)}>
                <h4 className="text-2xl pr-[44px] m-0">• What happens when my trial ends?</h4><img className="block max-w-full absolute top-6 right-6 w-[30px] h-[30px]" src="/assets/imgRemoveCircleHalfDot.svg" alt="" />
                <p className="hidden mt-4 text-base m-0">When your trial ends, you can choose to upgrade to any of our paid plans to continue using the platform without interruption. If you do not upgrade, your account will remain inactive until a plan is selected.</p>
              </article>
              <article className="relative border-[1.5px] border-[#f1f1f1] rounded-2xl p-6 cursor-pointer border-[#2f3139] bg-[#171920] item" onClick={(e) => setFaqItem(e.currentTarget)}>
                <h4 className="text-2xl pr-[44px] m-0">• Can I change plans later?</h4><img className="block max-w-full absolute top-6 right-6 w-[30px] h-[30px]" src="/assets/imgAddCircleHalfDot.svg" alt="" />
                <p className="hidden mt-4 text-base m-0">Yes. You can upgrade or switch plans whenever your team grows or your workflow changes. Billing is adjusted based on the plan you pick next.</p>
              </article>
              <article className="relative border-[1.5px] border-[#f1f1f1] rounded-2xl p-6 cursor-pointer border-[#2f3139] bg-[#171920] item" onClick={(e) => setFaqItem(e.currentTarget)}>
                <h4 className="text-2xl pr-[44px] m-0">• Do you offer discounts for annual plans?</h4><img className="block max-w-full absolute top-6 right-6 w-[30px] h-[30px]" src="/assets/imgAddCircleHalfDot.svg" alt="" />
                <p className="hidden mt-4 text-base m-0">Annual billing includes a discount compared to monthly billing, which is why the toggle shows the yearly plan with a lower effective rate.</p>
              </article>
              <article className="relative border-[1.5px] border-[#f1f1f1] rounded-2xl p-6 cursor-pointer border-[#2f3139] bg-[#171920] item" onClick={(e) => setFaqItem(e.currentTarget)}>
                <h4 className="text-2xl pr-[44px] m-0">• Is my data secure on the platform?</h4><img className="block max-w-full absolute top-6 right-6 w-[30px] h-[30px]" src="/assets/imgAddCircleHalfDot.svg" alt="" />
                <p className="hidden mt-4 text-base m-0">Yes. Your workspace data is protected with secure access controls, encrypted storage, and role-based permissions for your team.</p>
              </article>
              <article className="relative border-[1.5px] border-[#f1f1f1] rounded-2xl p-6 cursor-pointer border-[#2f3139] bg-[#171920] item" onClick={(e) => setFaqItem(e.currentTarget)}>
                <h4 className="text-2xl pr-[44px] m-0">• Do you offer support for teams?</h4><img className="block max-w-full absolute top-6 right-6 w-[30px] h-[30px]" src="/assets/imgAddCircleHalfDot.svg" alt="" />
                <p className="hidden mt-4 text-base m-0">Yes. Paid plans include team support options, and higher tiers unlock priority assistance and dedicated support coverage.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="pt-[112px] cta-footer">
          <div className="relative border-[1.5px] border-[#f5f5f7] rounded-[20px] text-center p-20 mx-auto mb-[-194px] z-[2] border-[#2f3139] bg-[#171920] cta-card wrap-1230">
            <h2 className="m-0">Reclaim Your Team's Peak <span>Productivity</span></h2>
            <p className="mt-4 text-xl m-0">Empower your team with a centralized platform designed to connect people, simplify complex workflows, and help everyone stay focused, productive, and aligned.</p>
            <div className="mt-8 flex gap-2 justify-center btn-row">
              <button className="border-0 rounded-full px-5 py-3.5 text-base font-bold text-white btn dark">Start free Trial</button>
              <button className="border-0 rounded-full px-5 py-3.5 text-base font-bold bg-[#e7e7e7] bg-[#2a2d36] text-[#f0f0f2] btn light">Book a Demo</button>
            </div>
            <aside className="absolute right-20 top-[270px] w-[180px] bg-white border-[1.5px] border-[#f6f5f5] rounded-2xl px-5 py-3.5 text-left border-[#2f3139] bg-[#13151b] mini-card">
              <div className="flex icons"><img className="block max-w-full w-12 h-12 border-[1.5px] border-[#f6f5f5] rounded-full bg-white -mr-4 p-2.5 border-[#373a45] bg-[#1a1d24] shadow-none" src="/assets/imgSolarCodeFileBold.svg" alt="" /><img className="block max-w-full w-12 h-12 border-[1.5px] border-[#f6f5f5] rounded-full bg-white -mr-4 p-2.5 border-[#373a45] bg-[#1a1d24] shadow-none" src="/assets/imgMdiFileCad.svg" alt="" /><img className="block max-w-full w-12 h-12 border-[1.5px] border-[#f6f5f5] rounded-full bg-white -mr-4 p-2.5 border-[#373a45] bg-[#1a1d24] shadow-none" src="/assets/imgFluentTaskListSquareSparkle20Filled.svg" alt="" /></div>
              <h4 className="mt-2 text-base m-0">Good Morning, <span>Sayra ali!</span></h4>
              <p className="mt-1 text-sm m-0">You have 12 tasks due today</p>
            </aside>
          </div>

          <Footer logoSrc="/assets/imgTaxky1.svg" containerClass="wrap-1480" socialSrc="/assets/imgGroup1.svg" />
        </section>
      </div>
    </div>
  );
}
