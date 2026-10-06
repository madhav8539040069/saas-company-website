import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';

const features = [
  ['⌁','Smart workflows','Automate repetitive work and keep every process moving with less manual effort.'],
  ['◫','Real-time analytics','See the numbers that matter with clear dashboards and actionable insights.'],
  ['◉','Team collaboration','Bring conversations, tasks and decisions together so nothing gets lost.']
];

function App(){
  const [open,setOpen]=useState(null);
  const [menu,setMenu]=useState(false);
  const [sent,setSent]=useState(false);

  const go = id => { setMenu(false); document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); };

  return <div>
    <header className="header"><div className="container nav">
      <button className="logo" onClick={()=>go('home')}><span>✦</span>NexaFlow</button>
      <button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">☰</button>
      <nav className={menu?'open':''}>
        {['features','solutions','pricing','faq','contact'].map(x=><button key={x} onClick={()=>go(x)}>{x[0].toUpperCase()+x.slice(1)}</button>)}
        <button className="btn btn-small btn-outline" onClick={()=>go('contact')}>Book a demo</button>
      </nav>
    </div></header>

    <main id="home">
      <section className="hero"><div className="container hero-grid">
        <div><div className="eyebrow">● BUILT FOR MODERN TEAMS</div>
        <h1>Turn complex work into <span>simple growth.</span></h1>
        <p className="lead">NexaFlow brings projects, customer data and business insights together in one beautifully simple SaaS platform.</p>
        <div className="actions"><button className="btn" onClick={()=>go('contact')}>Start free</button><button className="btn btn-ghost" onClick={()=>go('features')}>Explore features →</button></div>
        <div className="trust"><span>✓ No credit card required</span><span>✓ 14-day free trial</span><span>✓ Cancel anytime</span></div></div>
        <div className="dashboard-card"><div className="dash-top"><b>Overview</b><span className="status">● Live</span></div>
          <div className="metric"><small>Monthly revenue</small><strong>₹12,84,500</strong><span className="up">+18.4%</span></div>
          <div className="chart">{[32,48,42,64,58,78,92].map((h,i)=><i key={i} style={{height:h+'%'}} />)}</div>
          <div className="dash-row"><div><small>Active users</small><b>24,892</b></div><div><small>Conversion</small><b>8.42%</b></div><div><small>Growth</small><b>+32%</b></div></div>
        </div>
      </div></section>

      <section className="logos"><div className="container logo-row"><span>TRUSTED BY TEAMS AT</span><b>ORBIT</b><b>vertex</b><b>ACME</b><b>northstar</b><b>lumen</b></div></section>

      <section id="features" className="section"><div className="container">
        <div className="section-head"><div className="eyebrow">POWERFUL, NOT COMPLICATED</div><h2>Everything your team needs to move faster.</h2><p>One focused workspace for planning, collaboration, analytics and growth.</p></div>
        <div className="cards">{features.map(([icon,title,desc])=><article key={title}><div className="icon">{icon}</div><h3>{title}</h3><p>{desc}</p><button onClick={()=>go('contact')}>Learn more →</button></article>)}</div>
      </div></section>

      <section id="solutions" className="section soft"><div className="container split"><div>
        <div className="eyebrow">DESIGNED FOR SCALE</div><h2>From first customer to global team.</h2><p>Start simple and expand as your business grows. NexaFlow adapts to your workflow without adding unnecessary complexity.</p>
        <ul className="checks"><li>Centralized workspace</li><li>Role-based team access</li><li>Secure cloud infrastructure</li><li>API-ready integrations</li></ul>
      </div><div className="feature-panel"><div className="mini"><span>Growth score</span><strong>92/100</strong></div><div className="progress"><span/></div><div className="mini"><span>Tasks automated</span><strong>74%</strong></div><div className="progress"><span style={{width:'74%'}}/></div><div className="activity"><b>Today</b><p>✓ Campaign report generated</p><p>✓ 18 tasks automated</p><p>✓ Weekly insights ready</p></div></div></div></section>

      <section id="pricing" className="section"><div className="container"><div className="section-head"><div className="eyebrow">SIMPLE PRICING</div><h2>Choose a plan that fits your stage.</h2></div>
        <div className="pricing">
          {[
            ['Starter','For individuals and small teams.','₹999','Up to 5 users','Core analytics','Email support'],
            ['Growth','For growing businesses.','₹2,499','Up to 25 users','Advanced analytics','Automation workflows'],
            ['Scale','For larger organizations.','Custom','Unlimited teams','Custom integrations','Priority support']
          ].map((p,i)=><article className={i===1?'popular':''} key={p[0]}>{i===1&&<label>Most popular</label>}<h3>{p[0]}</h3><p>{p[1]}</p><strong>{p[2]}{p[2]!=='Custom'&&<span>/month</span>}</strong><button className={i===1?'btn':'btn btn-outline'} onClick={()=>go('contact')}>{i===2?'Talk to sales':'Start trial'}</button><ul><li>{p[3]}</li><li>{p[4]}</li><li>{p[5]}</li></ul></article>)}
        </div>
      </div></section>

      <section className="cta"><div className="container cta-box"><div><div className="eyebrow">READY WHEN YOU ARE</div><h2>Build a smarter way to work.</h2><p>Start your free trial today and see what your team can accomplish.</p></div><button className="btn" onClick={()=>go('contact')}>Get started →</button></div></section>

      <section id="faq" className="section faq"><div className="container"><div className="section-head"><div className="eyebrow">FAQ</div><h2>Questions, answered.</h2></div>
        {['Is there a free trial?','Can I change plans later?','Is my data secure?'].map((q,i)=><div className="faq-item" key={q}><button onClick={()=>setOpen(open===i?null:i)}><span>{q}</span><span>{open===i?'−':'+'}</span></button>{open===i&&<p>{i===0?'Yes. Every plan starts with a 14-day free trial and no credit card is required.':i===1?'Yes. You can upgrade or downgrade as your team and needs change.':'We use industry-standard encryption, access controls and secure cloud infrastructure.'}</p>}</div>)}
      </div></section>

      <section id="contact" className="section contact"><div className="container contact-grid"><div><div className="eyebrow">LET'S TALK</div><h2>Ready to see NexaFlow in action?</h2><p>Tell us what you are building. Our team will get back to you shortly.</p></div>
        <form onSubmit={e=>{e.preventDefault();setSent(true);e.currentTarget.reset()}}><input required placeholder="Your name"/><input required type="email" placeholder="Work email"/><textarea required placeholder="Tell us about your business"/><button className="btn">Request a demo</button>{sent&&<p className="success">Thanks! Your request has been received.</p>}</form>
      </div></section>
    </main>

    <footer><div className="container footer-grid"><div><button className="logo" onClick={()=>go('home')}><span>✦</span>NexaFlow</button><p>Simple tools for ambitious teams.</p></div><div><b>Product</b><button onClick={()=>go('features')}>Features</button><button onClick={()=>go('pricing')}>Pricing</button></div><div><b>Company</b><button onClick={()=>go('solutions')}>About</button><button onClick={()=>go('contact')}>Contact</button></div><div><b>Legal</b><button>Privacy</button><button>Terms</button></div></div><div className="container copyright">© 2026 NexaFlow. All rights reserved.</div></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
