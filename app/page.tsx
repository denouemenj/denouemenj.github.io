const navItems = ["About", "Our Mission", "Funding", "Impact", "Get Involved", "News"];

function Logo({ className = "" }: { className?: string }) {
  return <img className={className} src="/ytheory-logo.png" alt="YTheory" />;
}

function Mark({ className = "" }: { className?: string }) {
  return <img className={className} src="/ytheory-mark.png" alt="" aria-hidden="true" />;
}

function Icon({ type }: { type: "discover" | "fund" | "amplify" }) {
  if (type === "discover") return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="21" cy="21" r="12"/><path d="m30 30 10 10M15 21a6 6 0 0 1 6-6"/></svg>;
  if (type === "fund") return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 40V23M24 27C20 16 12 12 7 13c1 9 6 15 17 14ZM24 29c2-11 10-16 18-15-1 9-6 15-18 15Z"/></svg>;
  return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="15" r="5"/><circle cx="10" cy="21" r="4"/><circle cx="38" cy="21" r="4"/><path d="M14 40v-5c0-6 4-10 10-10s10 4 10 10v5M3 40v-4c0-5 3-8 8-8 2 0 4 1 5 2M45 40v-4c0-5-3-8-8-8-2 0-4 1-5 2"/></svg>;
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="brand" aria-label="YTheory"><Logo className="brand__logo"/></div>
        <button className="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-disabled="true" disabled><span/><span/></button>
        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => <button type="button" key={item} aria-disabled="true" disabled>{item}</button>)}
          <button type="button" className="nav__donate" aria-disabled="true" disabled>Donate</button>
        </nav>
      </header>

      <main id="top">
        <section className="hero" id="about">
          <div className="hero__content">
            <p className="eyebrow">Research belongs to everyone</p>
            <h1>Funding the<br/>questions that<br/>move us <em>forward.</em></h1>
            <p className="hero__lede">YTheory supports underrepresented research ideas with the potential to create a better future.</p>
            <div className="hero__actions">
              <button type="button" className="button button--primary" aria-disabled="true" disabled>Our Mission</button>
              <button type="button" className="button button--outline" aria-disabled="true" disabled>Apply for Funding</button>
            </div>
          </div>
        </section>

        <section className="mission-wrap" id="mission">
          <article className="mission-card">
            <div className="mission-card__mark"><Mark className="mission-card__logo"/></div>
            <div><p className="section-kicker">Why we exist</p><h2>Our Mission</h2><p>We fund bold, underrepresented research across disciplines and career stages because impactful ideas can come from anywhere.</p></div>
            <button type="button" className="text-link" aria-disabled="true" disabled>Learn more about us <span>→</span></button>
          </article>
        </section>

        <section className="what-we-do" id="funding">
          <div className="section-heading"><p className="section-kicker">From question to impact</p><h2>What We Do</h2></div>
          <div className="pillars">
            <article className="pillar"><div className="pillar__icon"><Icon type="discover"/></div><div><h3>Discover</h3><p>We seek out overlooked questions and researchers with bold ideas and the drive to explore them.</p></div></article>
            <article className="pillar"><div className="pillar__icon"><Icon type="fund"/></div><div><h3>Fund</h3><p>We provide flexible funding and support to help turn promising ideas into meaningful progress.</p></div></article>
            <article className="pillar"><div className="pillar__icon"><Icon type="amplify"/></div><div><h3>Amplify</h3><p>We elevate diverse voices and share their insights to inspire change and drive impact.</p></div></article>
          </div>
        </section>

        <section className="donate" id="donate">
          <div><p className="section-kicker section-kicker--light">Build the next breakthrough</p><h2>Great questions deserve a chance.</h2></div>
          <button type="button" className="button button--light" aria-disabled="true" disabled>Support YTheory</button>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__intro"><h2>Stay Connected</h2><p>Get updates on our funded projects, opportunities, and the impact we&apos;re building together.</p></div>
        <form className="subscribe"><label className="sr-only" htmlFor="email">Email address</label><input id="email" name="email" type="email" inputMode="email" placeholder="Enter your email"/><button type="button" aria-disabled="true" disabled>Subscribe</button></form>
        <div className="socials" aria-label="Social media"><span aria-label="YTheory on X">𝕏</span><span aria-label="YTheory on LinkedIn">in</span><span aria-label="Email YTheory"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg></span></div>
      </footer>
    </>
  );
}
