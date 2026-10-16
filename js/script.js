/**
 * ARCHIVE — Nigeria's Creative History Museum
 * Main JavaScript — Performance-optimised build
 *
 * Key fixes applied:
 *  - All DOM queries cached once at startup (no repeated querySelector in handlers)
 *  - navHeight read once and cached; refreshed only on resize
 *  - scroll event listeners all marked { passive: true }
 *  - applyStoryFilter uses cached NodeLists
 *  - Scroll indicator animation paused after first scroll
 *  - console.log removed from production path
 *  - Chained setTimeout in footer links simplified
 */

'use strict';

/* ==========================================================================
   SHARED STATE — queried once, reused everywhere
   ========================================================================== */

// Cache nav height once; update on resize (reading offsetHeight forces reflow)
let _navHeight = 64;

function getNavHeight() {
  return _navHeight;
}

window.addEventListener('resize', function () {
  const h = document.getElementById('site-header');
  if (h) _navHeight = h.offsetHeight || 64;
}, { passive: true });

// Run once at startup
document.addEventListener('DOMContentLoaded', function () {
  const h = document.getElementById('site-header');
  if (h) _navHeight = h.offsetHeight || 64;
});


/* ==========================================================================
   1. STORY DATA
   ========================================================================== */

const STORIES = {
  'faces-of-lagos': {
    category: 'Photography',
    title: 'The Faces of Lagos',
    image: 'assets/images/optimized/story-hero-photography.webp',
    imageFallback: 'assets/images/optimized/story-hero-photography.jpg',
    imageAlt: 'Chief and household at Ifako, Calabar — late 19th century portrait photograph',
    content: `
      <p>Before high-rises changed the skyline, Lagos wore its soul on its streets. The city's earliest documentary photographers — working from studios on Lagos Island and later venturing into Balogun market and Broad Street — produced a portrait of a city in transition.</p>
      <p>These images, shot between the 1850s and 1970s, capture a Nigeria that was simultaneously colonial and proudly self-determining. Faces look directly into the camera with an ease that speaks of familiarity, not performance.</p>
      <p>The photographic studios of that era — some run by returning professionals trained in London and Paris — treated portraiture as both commerce and civic record. To sit for a photograph was to assert that your life was worth preserving.</p>
    `,
    credit: 'Image: "Chief and Household at Ifako, Calabar", late 19th century.'
  },

  'rise-of-afrobeat': {
    category: 'Music',
    title: 'The Rise of Afrobeat',
    image: 'assets/images/optimized/music-fela-1970.webp',
    imageFallback: 'assets/images/optimized/music-fela-1970.jpg',
    imageAlt: 'Fela Anikulapo-Kuti, Nigerian musician and activist, photographed in 1970',
    content: `
      <p>Fela Anikulapo-Kuti did not invent protest — he gave it a rhythm section. Drawing from American jazz and funk, Yoruba traditional music, and the unfiltered urgency of Lagos street life, Fela built Afrobeat into a form of political confrontation that governments genuinely feared.</p>
      <p>The Afrika Shrine — first on Pepple Street in Ikeja, later in Agidingbi — was more than a music venue. Between 1970 and the late 1990s it served as commune, court, church and political rally, a space where the boundaries between music and civic life dissolved entirely.</p>
      <p>Afrobeat's influence on contemporary Nigerian and global music is difficult to overstate. The rhythmic vocabulary Fela established continues to surface in Afrobeats, hip hop, and electronic music produced worldwide today.</p>
    `,
    credit: 'Image: Fela Kuti, 1970.'
  },

  'style-through-decades': {
    category: 'Fashion',
    title: 'Style Through the Decades',
    image: 'assets/images/optimized/story-fashion-decades.webp',
    imageFallback: 'assets/images/optimized/story-fashion-decades.jpg',
    imageAlt: 'Men in traditional northern Nigerian dress, Kano, 1960',
    content: `
      <p>Nigerian dress has never been static. Long before colonialism introduced European tailoring, the country's many peoples had developed sophisticated textile traditions — aso-oke woven in Yorubaland, akwete cloth woven by Igbo women, adire resist-dyed indigo from Abeokuta.</p>
      <p>The 1960s and 70s produced a particularly confident Lagos style — an era where traditional fabric was cut into contemporary silhouettes, creating a distinctly Nigerian urban aesthetic that drew global attention.</p>
      <p>Today, designers from Lagos to London continue working within and against this history, producing work that is simultaneously local and international, and impossible to categorise simply as "African fashion".</p>
    `,
    credit: 'Image: Gentlemen of Kano, Nigeria, 1960.'
  },

  'nigerian-design': {
    category: 'Design',
    title: 'Nigerian Design: Then & Now',
    image: 'assets/images/optimized/story-design.webp',
    imageFallback: 'assets/images/optimized/story-design.jpg',
    imageAlt: 'Bida metalwork — carved calabashes and glass beads, Nigeria, 1960',
    content: `
      <p>The geometric vocabulary of Uli — a traditional Igbo drawing practice applied to walls and bodies — is one of the oldest design systems in Nigerian history. Abstract, precise, and deeply communicative, it anticipated the visual language of twentieth-century modernism without any reference to it.</p>
      <p>The bronze heads of Ife, cast between roughly the 12th and 15th centuries CE, represent one of the world's great sculptural traditions. Naturalistic, formally sophisticated, and technically remarkable, they confounded European assumptions about African art when they reached wider audiences in the 20th century.</p>
      <p>By the 1960s, Nigerian graphic designers were producing poster work and advertising that blended indigenous visual traditions with post-independence optimism. Contemporary Nigerian designers continue this conversation on a global stage.</p>
    `,
    credit: 'Image: Bida metalwork, Nigeria, 1960.'
  }
};


/* ==========================================================================
   2. NAVIGATION
   ========================================================================== */

(function initNavigation() {
  const header   = document.getElementById('site-header');
  const toggle   = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!header || !toggle || !navLinks) return;

  // Always show a background — hero is transparent so we need it visible
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Toggle open / close
  toggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    // Update label so screen readers announce the current action
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close when any nav link is clicked
  navLinks.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  // Escape key closes the menu
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
      closeMobileMenu();
    }
  });

  function closeMobileMenu() {
    navLinks.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
    document.body.style.overflow = '';
    toggle.focus();
  }
})();


/* ==========================================================================
   3. SMOOTH SECTION SCROLLING
   ========================================================================== */

(function initSmoothScroll() {
  document.addEventListener('click', function (e) {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const targetId = anchor.getAttribute('href').slice(1);
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    e.preventDefault();

    // Use cached navHeight — avoids triggering a layout reflow on every click
    const top = target.getBoundingClientRect().top + window.scrollY - getNavHeight();
    window.scrollTo({ top, behavior: 'smooth' });
  });
})();


/* ==========================================================================
   4. ACTIVE NAV LINK ON SCROLL (IntersectionObserver — no scroll listener)
   ========================================================================== */

(function initActiveNav() {
  const navLinks = document.querySelectorAll('.nav__link[data-section]');
  if (!navLinks.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle('is-active', link.dataset.section === id);
        });
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });

  ['home', 'explore', 'stories', 'timeline', 'about'].forEach(function (id) {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
})();


/* ==========================================================================
   5. COLLECTION CARDS → FILTER + SCROLL TO STORIES
   ========================================================================== */

(function initCollectionCardLinks() {
  // Cache stories section reference
  const storiesSection = document.getElementById('stories');

  document.querySelectorAll('.collection-card__link').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filter = btn.getAttribute('data-filter');
      if (!filter) return;

      if (storiesSection) {
        const top = storiesSection.getBoundingClientRect().top + window.scrollY - getNavHeight();
        window.scrollTo({ top, behavior: 'smooth' });
      }

      // Apply filter after scroll starts (reduced from 400ms)
      setTimeout(function () { applyStoryFilter(filter); }, 300);
    });
  });
})();


/* ==========================================================================
   6. FILTER TABS
   ========================================================================== */

// Cache at module level — queried once at startup, reused by applyStoryFilter
const _storyCards  = [];
const _photoItems  = [];  // photo-grid items also filtered by discipline
const _filterTabs  = [];
let   _emptyMsg    = null;

(function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  if (!tabs.length) return;

  // Populate caches once
  document.querySelectorAll('.story-card').forEach(function (c)     { _storyCards.push(c); });
  document.querySelectorAll('.photo-grid__item').forEach(function (c){ _photoItems.push(c); });
  tabs.forEach(function (t) { _filterTabs.push(t); });
  _emptyMsg = document.getElementById('stories-empty');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      applyStoryFilter(tab.getAttribute('data-filter'));
    });
  });
})();

/**
 * applyStoryFilter — filters both story cards AND photo-grid items.
 * Uses cached arrays; zero querySelectorAll calls per invocation.
 */
function applyStoryFilter(filter) {
  let visible = 0;

  // Filter featured story cards
  _storyCards.forEach(function (card) {
    const show = filter === 'all' || card.dataset.discipline === filter;
    card.classList.toggle('is-hidden', !show);
    if (show) visible++;
  });

  // Filter expanded photo grid
  _photoItems.forEach(function (item) {
    const show = filter === 'all' || item.dataset.discipline === filter;
    item.classList.toggle('is-hidden', !show);
  });

  if (_emptyMsg) _emptyMsg.hidden = visible > 0;

  // Sync tab active states
  _filterTabs.forEach(function (tab) {
    const match = tab.getAttribute('data-filter') === filter;
    tab.classList.toggle('filter-tab--active', match);
    tab.setAttribute('aria-selected', String(match));
  });
}


/* ==========================================================================
   7. STORY MODAL
   ========================================================================== */

(function initStoryModal() {
  const modal    = document.getElementById('story-modal');
  const backdrop = document.getElementById('modal-backdrop');
  const closeBtn = document.getElementById('modal-close');

  if (!modal || !backdrop || !closeBtn) return;

  // Cache modal inner elements
  const modalCategory    = document.getElementById('modal-category');
  const modalTitle       = document.getElementById('modal-title');
  const modalContent     = document.getElementById('modal-content');
  const modalCredit      = document.getElementById('modal-credit');
  const modalImg         = document.getElementById('modal-img');
  const modalPlaceholder = document.getElementById('modal-img-placeholder');
  const modalPanel       = modal.querySelector('.story-modal__panel');

  let triggerElement = null;

  // Attach click + keyboard on story cards
  document.querySelectorAll('.story-card').forEach(function (card) {
    card.addEventListener('click', function () { openModal(card); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card); }
    });
  });

  backdrop.addEventListener('click', function () {
    if (!modal.classList.contains('is-closing')) closeModal();
  });

  closeBtn.addEventListener('click', function () {
    if (!modal.classList.contains('is-closing')) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden && !modal.classList.contains('is-closing')) {
      closeModal();
    }
  });

  function openModal(card) {
    const story = STORIES[card.getAttribute('data-story')];
    if (!story) return;

    // Populate — use cached element refs
    modalCategory.textContent = story.category;
    modalTitle.textContent    = story.title;
    modalContent.innerHTML    = story.content;
    modalCredit.textContent   = story.credit || '';

    // Image with WebP + JPEG fallback
    modalImg.src = story.image;
    modalImg.alt = story.imageAlt || story.title;
    modalImg.style.opacity = '0';

    modalImg.onload = function () {
      modalImg.style.opacity = '1';
      if (modalPlaceholder) modalPlaceholder.style.opacity = '0';
    };
    modalImg.onerror = function () {
      // Try JPEG fallback
      if (story.imageFallback && modalImg.src !== location.origin + '/' + story.imageFallback) {
        modalImg.src = story.imageFallback;
      } else {
        if (modalPlaceholder) modalPlaceholder.style.opacity = '1';
      }
    };

    if (modalPlaceholder) {
      modalPlaceholder.setAttribute('data-label', story.imageAlt || story.title);
      modalPlaceholder.style.opacity = '1';
    }

    triggerElement = card;
    modal.hidden   = false;
    document.body.style.overflow = 'hidden';

    if (modalPanel) modalPanel.scrollTop = 0;

    setTimeout(function () { closeBtn.focus(); }, 50);
    modal.addEventListener('keydown', trapFocus);
  }

  function closeModal() {
    modal.classList.add('is-closing');
    document.body.style.overflow = '';
    modal.removeEventListener('keydown', trapFocus);

    if (triggerElement) {
      triggerElement.focus();
      triggerElement = null;
    }

    setTimeout(function () {
      modal.hidden = true;
      modal.classList.remove('is-closing');
    }, 310);
  }

  function trapFocus(e) {
    if (e.key !== 'Tab') return;

    const focusable = Array.from(
      modal.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])')
    ).filter(function (el) { return !el.disabled && el.offsetParent !== null; });

    if (!focusable.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  }
})();


/* ==========================================================================
   8. TIMELINE — arrows + drag scroll + keyboard
   ========================================================================== */

(function initTimeline() {
  const wrapper = document.getElementById('timeline-wrapper');
  const prevBtn = document.getElementById('timeline-prev');
  const nextBtn = document.getElementById('timeline-next');

  if (!wrapper || !prevBtn || !nextBtn) return;

  const SCROLL_AMOUNT = 340;

  prevBtn.addEventListener('click', function () {
    wrapper.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', function () {
    wrapper.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
  });

  function updateArrows() {
    prevBtn.disabled = wrapper.scrollLeft <= 4;
    nextBtn.disabled = wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth - 4;
  }

  wrapper.addEventListener('scroll', updateArrows, { passive: true });
  updateArrows();

  // Mouse drag
  let isDragging = false, startX = 0, startScroll = 0;

  wrapper.addEventListener('mousedown', function (e) {
    isDragging  = true;
    startX      = e.pageX - wrapper.offsetLeft;
    startScroll = wrapper.scrollLeft;
    wrapper.style.cursor = 'grabbing';
  });

  // Single document mouseup listener, attached once
  document.addEventListener('mouseup', function () {
    if (isDragging) {
      isDragging = false;
      wrapper.style.cursor = 'grab';
    }
  }, { passive: true });

  wrapper.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    const x = e.pageX - wrapper.offsetLeft;
    wrapper.scrollLeft = startScroll - (x - startX) * 1.4;
  }, { passive: true });

  // Keyboard scrolling
  wrapper.setAttribute('tabindex', '0');
  wrapper.setAttribute('role', 'region');
  wrapper.setAttribute('aria-label', 'Scrollable creative history timeline');

  wrapper.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { e.preventDefault(); wrapper.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' }); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); wrapper.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' }); }
  });
})();


/* ==========================================================================
   9. BACK TO TOP
   ========================================================================== */

(function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  function onScroll() {
    const show = window.scrollY > window.innerHeight * 0.6;
    btn.hidden = !show;
    btn.classList.toggle('is-visible', show);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelector('.skip-link')?.focus();
  });
})();


/* ==========================================================================
   10. SCROLL REVEAL (IntersectionObserver — zero scroll listeners)
   ========================================================================== */

(function initReveal() {
  // Skip if user prefers reduced motion — don't even attach the observer
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const selectors = [
    '.section-intro',
    '.collection-card',
    '.story-card',
    '.timeline-item',
    '.about__image',
    '.about__content'
  ];

  const elements = document.querySelectorAll(selectors.join(', '));
  if (!elements.length) return;

  elements.forEach(function (el) { el.classList.add('reveal'); });

  // Stagger cards inside their parent grid
  document.querySelectorAll('.collections, .stories-grid').forEach(function (group) {
    group.classList.add('reveal-group');
  });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Animate once, then stop watching
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(function (el) { observer.observe(el); });
})();


/* ==========================================================================
   11. SCROLL INDICATOR — pause animation after first scroll
   ========================================================================== */

(function initScrollIndicator() {
  const arrow = document.querySelector('.hero__scroll-arrow');
  if (!arrow) return;

  function pauseOnScroll() {
    if (window.scrollY > 60) {
      arrow.style.animationPlayState = 'paused';
      window.removeEventListener('scroll', pauseOnScroll);
    }
  }

  window.addEventListener('scroll', pauseOnScroll, { passive: true });
})();


/* ==========================================================================
   12. FOOTER COLLECTION LINKS
   ========================================================================== */

(function initFooterCollectionLinks() {
  const storiesSection = document.getElementById('stories');

  document.querySelectorAll('.footer__link[data-filter-target]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const filter = link.getAttribute('data-filter-target');

      // Scroll to stories section and apply filter — simplified single scroll
      if (storiesSection) {
        const top = storiesSection.getBoundingClientRect().top + window.scrollY - getNavHeight();
        window.scrollTo({ top, behavior: 'smooth' });
      }

      setTimeout(function () { applyStoryFilter(filter); }, 300);
    });
  });
})();
