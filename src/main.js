/* ── Scroll reveal ─────────────────────────────────────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -24px' });

document.querySelectorAll('.reveal, .feature, .compare, .plans article, .comparison-table').forEach((element) => {
  element.classList.add('reveal');
  observer.observe(element);
});

/* ── Cursor glow (desktop only) ────────────────────────────────────────── */
const glow = document.querySelector('.cursor-glow');
if (glow && matchMedia('(pointer: fine)').matches) {
  window.addEventListener('pointermove', (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }, { passive: true });
}

/* ── Mobile nav ────────────────────────────────────────────────────────── */
const menuButton = document.querySelector('.menu');
const mobileNav  = document.querySelector('.mobile-nav');
if (menuButton && mobileNav) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    document.body.classList.toggle('menu-open', !isOpen);
  });
  mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('keydown', (event) => event.key === 'Escape' && closeMenu());
}

/* ── Dynamic nav: transparent → solid → hide/reveal on scroll ─────────── */
const dynNav = document.querySelector('.nav');
if (dynNav) {
  const SCROLL_THRESHOLD = 80;  // px before nav morphs from bar to pill
  let lastY   = window.scrollY;
  let ticking = false;

  const updateNav = () => {
    const y        = window.scrollY;
    const menuOpen = document.body.classList.contains('menu-open');

    /* Solid/transparent state */
    if (y > SCROLL_THRESHOLD) {
      dynNav.classList.add('nav-scrolled');
    } else {
      dynNav.classList.remove('nav-scrolled', 'nav-hidden');
    }

    /* Hide/reveal on scroll direction (only when past threshold) */
    if (!menuOpen && y > SCROLL_THRESHOLD) {
      if (y < lastY) {
        dynNav.classList.remove('nav-hidden');   /* scrolling up → show */
      } else if (y > lastY + 4) {
        dynNav.classList.add('nav-hidden');       /* scrolling down → hide */
      }
    }

    lastY   = y;
    ticking = false;
  };

  /* Run once on load to set correct initial state */
  updateNav();

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateNav);
  }, { passive: true });
}

/* ── Pricing toggle ────────────────────────────────────────────────────── */
document.querySelectorAll('.toggle button').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.toggle button').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
}));

/* ── FAQ accordion ─────────────────────────────────────────────────────── */
document.querySelectorAll('.accordion details').forEach((item) => item.addEventListener('toggle', () => {
  if (item.open) {
    document.querySelectorAll('.accordion details').forEach((other) => {
      if (other !== item) other.open = false;
    });
  }
}));

/* ── Waitlist form: rich metadata collection ───────────────────────────── */
const waitlistForm = document.querySelector('#waitlistForm');
if (waitlistForm) {

  /* Returns a clean browser name from userAgent */
  const getBrowser = () => {
    const ua = navigator.userAgent;
    if (ua.includes('Edg/'))             return 'Edge';
    if (ua.includes('OPR/'))             return 'Opera';
    if (ua.includes('SamsungBrowser'))   return 'Samsung';
    if (ua.includes('Chrome/') && ua.includes('Safari/')) return 'Chrome';
    if (ua.includes('Firefox/'))         return 'Firefox';
    if (ua.includes('Safari/') && !ua.includes('Chrome')) return 'Safari';
    return 'Other';
  };

  /* Returns a clean OS name from userAgent */
  const getOS = () => {
    const ua = navigator.userAgent;
    if (/iPhone|iPad|iPod/.test(ua)) return 'iOS';
    if (/Android/.test(ua))          return 'Android';
    if (/Windows/.test(ua))          return 'Windows';
    if (/Mac OS X/.test(ua))         return 'macOS';
    if (/Linux/.test(ua))            return 'Linux';
    return 'Other';
  };

  /* Returns Mobile / Tablet / Desktop */
  const getDevice = () => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return window.innerWidth >= 768 ? 'Tablet' : 'Mobile';
    }
    return 'Desktop';
  };

  /* Returns the referrer hostname, or 'Direct' */
  const getReferrer = () => {
    try {
      const ref = document.referrer;
      if (!ref) return 'Direct';
      return new URL(ref).hostname.replace('www.', '') || 'Direct';
    } catch { return 'Direct'; }
  };

  /* Fetches IP + geo from ipapi.co (free, CORS, no API key).
     Aborts after 4 s so the form never hangs. */
  const getGeo = async () => {
    try {
      const ctrl  = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 4000);
      const res   = await fetch('https://ipapi.co/json/', { signal: ctrl.signal });
      clearTimeout(timer);
      if (!res.ok) return {};
      const d = await res.json();
      return {
        ip:          d.ip           || '',
        country:     d.country_name || '',
        countryCode: d.country      || '',
        region:      d.region       || '',
        city:        d.city         || '',
        isp:         d.org          || '',
      };
    } catch { return {}; }
  };

  /* ── Pre-fetch geo immediately (cached Promise) ──────────────────────────
     Fires as soon as the script loads — not on submit. By the time the user
     fills the 3 form fields and clicks Submit (≥5 s), this is already done.
     The submit handler just awaits the cached result = near-instant. */
  const geoPromise = getGeo();

  /* ── UI helpers ── */
  const submitBtn       = waitlistForm.querySelector('button[type="submit"]');
  const originalBtnHTML = submitBtn?.innerHTML ?? '';

  const setLoading = (on) => {
    if (!submitBtn) return;
    if (on) {
      submitBtn.setAttribute('disabled', 'true');
      submitBtn.innerHTML = '<span class="btn-spinner"></span>Sending…';
    } else {
      submitBtn.removeAttribute('disabled');
      submitBtn.innerHTML = originalBtnHTML;
    }
  };

  const showError = (msg) => {
    waitlistForm.querySelector('.form-error')?.remove();
    const el = document.createElement('p');
    el.className = 'form-error';
    el.setAttribute('role', 'alert');
    el.textContent = msg;
    submitBtn
      ? submitBtn.insertAdjacentElement('afterend', el)
      : waitlistForm.appendChild(el);
  };

  /* ── Submit handler ── */
  waitlistForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    waitlistForm.querySelector('.form-error')?.remove();

    const endpoint  = waitlistForm.dataset.scriptUrl?.trim();
    const isRealUrl = endpoint && endpoint.startsWith('http') && !endpoint.includes('YOUR_');

    /* No real endpoint configured → demo-mode success (local / staging) */
    if (!isRealUrl) {
      waitlistForm.classList.add('submitted');
      waitlistForm.querySelector('.form-success')?.focus();
      return;
    }

    setLoading(true);

    /* ── Gather all metadata silently ── */
    const now  = new Date();
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const geo  = await geoPromise;  // already resolved — near-instant

    const fd = new FormData();

    /* User-entered */
    fd.append('name',    waitlistForm.querySelector('[name="name"]')?.value.trim()  || '');
    fd.append('email',   waitlistForm.querySelector('[name="email"]')?.value.trim() || '');
    fd.append('usecase', waitlistForm.querySelector('[name="usecase"]')?.value      || '');

    /* Timestamps */
    fd.append('submittedAt', now.toISOString());
    fd.append('date',        now.toLocaleDateString('en-GB'));
    fd.append('time',        now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));
    fd.append('dayOfWeek',   days[now.getDay()]);
    fd.append('hourOfDay',   String(now.getHours()));
    fd.append('year',        String(now.getFullYear()));

    /* Geo — IP-based, no browser permission required */
    fd.append('ip',          geo.ip          || '');
    fd.append('country',     geo.country     || '');
    fd.append('countryCode', geo.countryCode || '');
    fd.append('region',      geo.region      || '');
    fd.append('city',        geo.city        || '');
    fd.append('isp',         geo.isp         || '');

    /* Browser, device & preferences */
    fd.append('browser',     getBrowser());
    fd.append('os',          getOS());
    fd.append('device',      getDevice());
    fd.append('language',    navigator.language || '');
    fd.append('timezone',    Intl.DateTimeFormat().resolvedOptions().timeZone || '');
    fd.append('screen',      `${window.screen.width}x${window.screen.height}`);
    fd.append('referrer',    getReferrer());
    fd.append('landingPage', window.location.pathname);

    try {
      await fetch(endpoint, { method: 'POST', mode: 'no-cors', body: fd });
      waitlistForm.classList.add('submitted');
      waitlistForm.querySelector('.form-success')?.focus();
    } catch (err) {
      console.error('Waitlist submission failed', err);
      showError('Something went wrong — please try again or email hello@mixingo.dev.');
    } finally {
      setLoading(false);
    }
  });
}
