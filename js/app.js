/* ── Render nav ── */
(function renderNav() {
  document.querySelector('.nbrand').innerHTML =
    `${DATA.brandName}<span>.</span>dev`;

  const links = ['hero','about','experience','skills','projects','contact'];
  document.querySelector('.navl').innerHTML = links
    .map(l => `<li><a href="#${l}">${l.charAt(0).toUpperCase()+l.slice(1)}.</a></li>`)
    .join('');
})();

/* ── Render hero ── */
(function renderHero() {
  const s = document.getElementById('hero');
  const badges = DATA.heroBadges.map(b =>
    `<div class="fb ${b.pos}">${b.text}</div>`).join('');
  const stats = DATA.stats.map(st =>
    `<div class="hst"><div class="hsn">${st.number}</div><div class="hsl">${st.label}</div></div>`).join('');

  s.innerHTML = `
  <div class="hgrid">
    <div>
      ${DATA.available ? `<div class="htag"><span class="pd"></span>Available for opportunities</div>` : ''}
      <h1 class="hname">${DATA.name.first}<br><span class="gr">${DATA.name.last}</span></h1>
      <p class="hrole"><strong>${DATA.role}</strong> · ${DATA.roleTag}</p>
      <p class="hdesc">${DATA.heroDesc}</p>
      <div class="hbtns">
        <a href="#contact" class="ba">Get in touch</a>
        <a href="#projects" class="bb">View Projects</a>
      </div>
      <div class="hsoc">
        <a class="hs" href="${DATA.social.github}" target="_blank">⌥</a>
        <a class="hs" href="${DATA.social.linkedin}" target="_blank">◈</a>
        <a class="hs" href="mailto:${DATA.social.email}">✉</a>
      </div>
      <div class="hstats">${stats}</div>
    </div>
    <div class="hpwrap">
      <div class="pring">
        ${badges}
        ${DATA.profilePhoto
          ? `<img class="pav-img" src="${DATA.profilePhoto}" alt="${DATA.name.first} ${DATA.name.last}"/>`
          : `<div class="pav"><div class="pavtx">${DATA.initials}</div></div>`
        }
      </div>
    </div>
  </div>`;
})();

/* ── Render about ── */
(function renderAbout() {
  const delays = ['rv d1','rv d2','rv d3','rv d4'];
  const paras = DATA.aboutParagraphs
    .map((p, i) => `<p class="${delays[i] || 'rv'}">${p}</p>`).join('');

  document.getElementById('about').innerHTML = `
  <div class="container">
    <div class="stag">About me</div>
    <h2 class="shead rv">A <span>Data Engineer</span> at ${DATA.currentCompany}</h2>
    <div class="agrid">
      <div class="atext">
        ${paras}
        ${DATA.openToWork ? `<div class="opill rv"><span class="odot"></span>Currently open to new opportunities</div>` : ''}
      </div>
    </div>
  </div>`;
})();

/* ── Render experience ── */
(function renderExperience() {
  const delays = ['rv','rv d1','rv d2','rv d3'];
  const cards = DATA.experience.map((e, i) => `
    <div class="ecard ${delays[i] || 'rv'}">
      <div class="elogo">${e.logo}</div>
      <div>
        <div class="etop">
          <span class="eco">${e.company}</span>
          <span class="edate">${e.date}</span>
        </div>
        <div class="etitle">${e.title}</div>
        <div class="eloc">📍 ${e.location}</div>
        <div class="pband">
          <span class="pbl">Project</span>
          <span class="pbn">${e.project.name}</span>
          <span class="pbd">${e.project.date}</span>
        </div>
        <ul class="eul">
          ${e.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
        <div class="imps">${e.impacts.map(im => `<span class="imp">${im}</span>`).join('')}</div>
      </div>
    </div>`).join('');

  document.getElementById('experience').innerHTML = `
  <div class="container">
    <div class="stag">Work Experience</div>
    <h2 class="shead rv">My <span>Professional Journey</span></h2>
    <div class="explist">${cards}</div>
  </div>`;
})();

/* ── Render skills ── */
(function renderSkills() {
  const tabs = DATA.skills.tabs.map((t, i) =>
    `<div class="stab${i===0?' active':''}" data-tab="${t.id}">${t.label}</div>`).join('');

  const grids = DATA.skills.tabs.map((t, i) => `
    <div id="tab-${t.id}" class="skgrid"${i!==0?' style="display:none"':''}>
      ${t.items.map(it => `
        <div class="ski rv d1">
          <div class="skiico">${it.icon}</div>
          <div class="skinm">${it.name}</div>
        </div>`).join('')}
    </div>`).join('');

  const bars = DATA.skills.proficiency.map(p => `
    <div class="pbari">
      <div class="pbartop">
        <span class="pbarn">${p.name}</span>
        <span class="pbarp">${p.pct}%</span>
      </div>
      <div class="pbart"><div class="pbarf" data-p="${p.pct/100}"></div></div>
    </div>`).join('');

  document.getElementById('skills').innerHTML = `
  <div class="container">
    <div class="stag">My Skills</div>
    <h2 class="shead rv">What My <span>Programming Skills</span> Include</h2>
    <p class="sdesc rv d1">I excel at extracting meaningful insights from complex datasets, transforming raw data into actionable strategies and impactful business outcomes.</p>
    <div class="stabs">${tabs}</div>
    ${grids}
    <div class="pbars rv">${bars}</div>
  </div>`;

  // Tab switching
  document.querySelector('.stabs').addEventListener('click', e => {
    const tab = e.target.closest('[data-tab]');
    if (!tab) return;
    DATA.skills.tabs.forEach(t => {
      document.getElementById('tab-'+t.id).style.display = 'none';
    });
    document.getElementById('tab-'+tab.dataset.tab).style.display = 'grid';
    document.querySelectorAll('.stab').forEach(t => t.classList.toggle('active', t === tab));
  });
})();

/* ── Render projects ── */
(function renderProjects() {
  const cards = DATA.projects.map((p, i) => {
    const delay = ['rv d1','rv d2','rv d3','rv d1'][i % 4];
    const spanStyle = p.wide ? ' style="grid-column:span 2"' : '';
    const thumbH    = p.wide ? 'height:110px' : '';
    return `
    <div class="pcard ${delay}"${spanStyle}>
      <div class="pthumb ${p.thumb}"${thumbH ? ` style="${thumbH}"` : ''}>${p.icon}</div>
      <div class="pbody">
        <div class="pdt">${p.year}</div>
        <div class="pnm">${p.name}</div>
        <div class="pds">${p.desc}</div>
        <div class="pft">
          <div class="pstk">${p.stack.map(s=>`<span class="pst">${s}</span>`).join('')}</div>
          <a class="plk" href="${p.github}"${p.github!=='#'?' target="_blank"':''}>github ↗</a>
        </div>
      </div>
    </div>`;
  }).join('');

  document.getElementById('projects').innerHTML = `
  <div class="container">
    <div class="stag">My Works</div>
    <h2 class="shead rv">Explore My <span>Work &amp; Projects</span></h2>
    <p class="sdesc rv d1">These projects reflect my commitment to understanding complex datasets and creating decision-support tools to maximize the effective use of data.</p>
    <div class="pgrid">${cards}</div>
  </div>`;
})();

/* ── Render education ── */
(function renderEducation() {
  const edCards = DATA.education.map((e, i) => `
    <div class="edcard rv d${i+1}">
      <div class="edlogo">${e.logo}</div>
      <div class="edsch">${e.school}</div>
      <div class="eddeg">${e.degree}</div>
      <div class="edinfo">📍 ${e.location}</div>
      <div class="edbadge">✓ ${e.badge}</div>
    </div>`).join('');

  const certCards = DATA.certifications.map(c => `
    <div class="ccard"><div class="cico">${c.icon}</div><div class="cnm">${c.name}</div></div>`).join('');

  document.getElementById('education').innerHTML = `
  <div class="container">
    <div class="stag">Education</div>
    <h2 class="shead rv">My <span>Educational Background</span></h2>
    <div class="edgrid">${edCards}</div>
    <div style="margin-top:2.5rem">
      <div class="stag">Certifications &amp; Achievements</div>
      <h3 style="font-size:1.3rem;font-weight:700;color:#fff;margin:0.5rem 0 1.5rem" class="rv">Professional Certifications</h3>
      <div class="cgrid rv">${certCards}</div>
    </div>
  </div>`;
})();

/* ── Render contact ── */
(function renderContact() {
  const c = DATA.contact;
  const s = DATA.social;

  document.getElementById('contact').innerHTML = `
  <div class="container">
    <div class="stag">Contact</div>
    <h2 class="shead rv">Let's <span>Connect and Collaborate!</span></h2>
    <p class="sdesc rv d1">I'm currently working as a Data Engineer and always open to meaningful conversations and collaboration opportunities. Whether you have a project in mind or just want to connect — feel free to reach out!</p>
    <div class="cgr">
      <div class="cinfo rv">
        <div class="citem"><div class="cicn">📍</div><div><div class="cilbl">Address</div><div class="cival">${c.address}</div></div></div>
        <div class="citem"><div class="cicn">✉️</div><div><div class="cilbl">Email</div><div class="cival"><a href="mailto:${c.email}">${c.email}</a></div></div></div>
        <div class="citem"><div class="cicn">📱</div><div><div class="cilbl">Phone</div><div class="cival">${c.phone}</div></div></div>
        <div>
          <div class="cilbl" style="margin-bottom:0.6rem">Find me on</div>
          <div class="srow">
            <a class="sbtn" href="${s.github}" target="_blank">⌥</a>
            <a class="sbtn" href="${s.linkedin}" target="_blank">◈</a>
            <a class="sbtn" href="mailto:${s.email}">✉</a>
          </div>
        </div>
      </div>
      <form class="cform rv d1" id="contact-form">
        <div class="cfrow">
          <div class="cfg"><label>Name</label><input type="text" placeholder="Your name" required/></div>
          <div class="cfg"><label>Email</label><input type="email" placeholder="your@email.com" required/></div>
        </div>
        <div class="cfg"><label>Phone</label><input type="tel" placeholder="+1 (555) 000-0000"/></div>
        <div class="cfg"><label>Message</label><textarea placeholder="Tell me about your project or opportunity..."></textarea></div>
        <button type="submit" class="ba" id="sbn" style="align-self:flex-start;border:none;cursor:pointer">Send →</button>
        <div id="fok">✔ Message sent! I'll get back to you very soon.</div>
      </form>
    </div>
  </div>`;

  document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const btn = document.getElementById('sbn');
    btn.disabled = true; btn.textContent = 'Sending...';
    setTimeout(() => {
      btn.style.display = 'none';
      document.getElementById('fok').style.display = 'block';
    }, 1000);
  });
})();

/* ── Render footer ── */
(function renderFooter() {
  document.getElementById('footer').innerHTML =
    `<p><span>${DATA.brandName}.dev</span> · © ${new Date().getFullYear()} All rights reserved · ${DATA.role} · ${DATA.location}</p>`;
})();

/* ── Starfield canvas ── */
(function initCanvas() {
  const cv = document.getElementById('sf'), cx = cv.getContext('2d');
  let W, H, stars = [], shooters = [], pSY = 0;
  function rsz() { W = cv.width = window.innerWidth; H = cv.height = window.innerHeight; }
  function mkS() { return { x: Math.random()*W, y: Math.random()*H, r: Math.random()*1.2+0.2, a: Math.random()*0.6+0.1, da: (Math.random()-0.5)*0.003, sp: Math.random()*0.18+0.02, px: Math.random()*0.35+0.05, hue: Math.random()<0.15?190:Math.random()<0.07?165:215 }; }
  function init() { stars = []; const n = Math.floor(W*H/5500); for (let i=0;i<n;i++) stars.push(mkS()); }
  function shoot() { shooters.push({ x: Math.random()*W*0.7+W*0.1, y: Math.random()*H*0.4, vx: (Math.random()-0.5)*5+3, vy: Math.random()*3+1.5, a: 1, life: 0 }); }
  function frame() {
    cx.clearRect(0,0,W,H);
    const sd = (window.scrollY-pSY)*0.015; pSY = window.scrollY;
    stars.forEach(s => {
      s.a += s.da; if (s.a>0.85||s.a<0.05) s.da *= -1;
      s.y -= s.sp+sd*s.px;
      if (s.y<-3) { s.y=H+3; s.x=Math.random()*W; } if (s.y>H+3) s.y=-3;
      const g = cx.createRadialGradient(s.x,s.y,0,s.x,s.y,s.r*3);
      g.addColorStop(0,`hsla(${s.hue},85%,88%,${s.a})`); g.addColorStop(1,`hsla(${s.hue},75%,65%,0)`);
      cx.beginPath(); cx.arc(s.x,s.y,s.r*3,0,Math.PI*2); cx.fillStyle=g; cx.fill();
      cx.beginPath(); cx.arc(s.x,s.y,s.r,0,Math.PI*2);
      cx.fillStyle=`hsla(${s.hue},80%,95%,${Math.min(s.a*1.4,1)})`; cx.fill();
    });
    shooters = shooters.filter(s => s.a>0);
    shooters.forEach(s => {
      s.life++; s.x+=s.vx; s.y+=s.vy; s.a=Math.max(0,1-s.life/40);
      const g2 = cx.createLinearGradient(s.x,s.y,s.x-s.vx*16,s.y-s.vy*16);
      g2.addColorStop(0,`rgba(186,230,253,${s.a})`); g2.addColorStop(1,'rgba(186,230,253,0)');
      cx.beginPath(); cx.moveTo(s.x,s.y); cx.lineTo(s.x-s.vx*16,s.y-s.vy*16);
      cx.strokeStyle=g2; cx.lineWidth=1.4; cx.stroke();
    });
    if (Math.random()<0.0012) shoot();
    requestAnimationFrame(frame);
  }
  window.addEventListener('resize', () => { rsz(); init(); });
  rsz(); init(); frame();
})();

/* ── Scroll animations ── */
(function initAnimations() {
  document.body.classList.add('js-ok');

  const ro = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); } });
  }, { threshold: 0.05, rootMargin: '0px 0px -10px 0px' });
  document.querySelectorAll('.rv').forEach(el => ro.observe(el));

  const bo = new IntersectionObserver(es => {
    es.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.pbarf').forEach((b, i) =>
          setTimeout(() => b.style.transform = `scaleX(${b.dataset.p})`, i*120));
        bo.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.pbars').forEach(el => bo.observe(el));
})();

/* ── Active nav highlight ── */
(function initNavHighlight() {
  const scs = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let c = '';
    scs.forEach(s => { if (window.scrollY >= s.offsetTop-120) c = s.id; });
    document.querySelectorAll('.navl a').forEach(a =>
      a.classList.toggle('active', a.getAttribute('href') === '#'+c));
  }, { passive: true });
})();
