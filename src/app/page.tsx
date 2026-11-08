 "use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "918052050846";
const services = ["POP Work", "Gypsum False Ceiling", "PVC False Ceiling", "Grid Ceiling", "Partition Work", "Fluted Panel", "VOX / PVC Wall Panel", "Other Interior Work"];

export default function Home() {
  const [form, setForm] = useState({
    name: "", phone: "", city: "", area: "", service: "Gypsum False Ceiling",
    workType: "Material + Labour", size: "", visitDate: "", details: ""
  });
  const [error, setError] = useState("");
  const update = (key: string, value: string) => setForm(old => ({ ...old, [key]: value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!/^[6-9][0-9]{9}$/.test(form.phone)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    const message = [
      "*New Booking Request – SK POP WORKS*",
      "",
      `*Customer Name:* ${form.name}`,
      `*Mobile Number:* ${form.phone}`,
      `*City:* ${form.city}`,
      `*Area / Location:* ${form.area}`,
      `*Service Required:* ${form.service}`,
      `*Work Requirement:* ${form.workType}`,
      `*Approx. Area:* ${form.size ? `${form.size} sq. ft.` : "Not specified"}`,
      `*Preferred Site Visit:* ${form.visitDate || "Not selected"}`,
      `*Additional Details:* ${form.details || "None"}`
    ].join("\n");
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  return <main>
    <header className="topbar"><a className="brand" href="/">SK POP WORKS</a><a className="adminLink" href="#booking">Book Now</a></header>
    <section className="hero">
      <div className="heroCopy"><h1>Premium Ceiling Designs</h1>
        <p>Book POP, Gypsum, PVC, Grid Ceiling and Partition work — with material and professional installation.</p>
        <a className="primaryLink" href="#booking">Book a Site Visit <span>→</span></a>
      </div>
      <div className="heroArt"><div className="artLabel">DESIGN · MATERIAL · INSTALLATION</div></div>
    </section>
    <section className="content" id="booking">
      <div className="sectionIntro"><span className="eyebrow">LET'S GET STARTED</span><h2>Book Your Work</h2></div>
      <form className="bookingForm" onSubmit={submit}>
        <div className="formGrid">
          <label>Customer Name *<input required value={form.name} onChange={e=>update("name",e.target.value)} placeholder="Enter your full name" maxLength={80}/></label>
          <label>Mobile Number *<input required type="tel" inputMode="numeric" pattern="[6-9][0-9]{9}" title="Enter a valid 10-digit Indian mobile number" value={form.phone} onChange={e=>update("phone",e.target.value)} placeholder="10-digit mobile number"/></label>
          <label>City *<input required value={form.city} onChange={e=>update("city",e.target.value)} placeholder="Enter your city" maxLength={80}/></label>
          <label>Area / Location *<input required value={form.area} onChange={e=>update("area",e.target.value)} placeholder="Enter your area" maxLength={120}/></label>
          <label>Service Required *<select value={form.service} onChange={e=>update("service",e.target.value)}>{services.map(s=><option key={s}>{s}</option>)}</select></label>
          <label>Work Requirement<select value={form.workType} onChange={e=>update("workType",e.target.value)}><option>Material + Labour</option><option>Labour Only</option></select></label>
          <label>Approximate Area (sq. ft.)<input type="number" min="1" max="100000" value={form.size} onChange={e=>update("size",e.target.value)} placeholder="e.g. 500"/></label>
          <label>Preferred Site Visit Date<input type="date" min={new Date().toISOString().slice(0,10)} value={form.visitDate} onChange={e=>update("visitDate",e.target.value)}/></label>
          <label className="full">Additional Details<textarea rows={4} value={form.details} onChange={e=>update("details",e.target.value)} placeholder="Tell us about your design, ceiling or partition requirements..." maxLength={1000}/></label>
        </div>
        <button className="submit" type="submit">Continue<span>→</span></button>
        {error && <p className="error" role="alert">{error}</p>}
      </form>
    </section>
    <footer>© {new Date().getFullYear()} SK POP WORKS · Bangalore & Nearby Areas</footer>
  </main>;
}
