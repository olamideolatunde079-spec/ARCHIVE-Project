

'use strict';

let _navHeight = 64;

function getNavHeight() {
  return _navHeight;
}

window.addEventListener('resize', function () {
  const h = document.getElementById('site-header');
  if (h) _navHeight = h.offsetHeight || 64;
}, { passive: true });

document.addEventListener('DOMContentLoaded', function () {
  const h = document.getElementById('site-header');
  if (h) _navHeight = h.offsetHeight || 64;
});

const STORIES = {
  'faces-of-lagos': {
    category: 'Photography',
    title: 'A Portrait from Calabar',
    image: 'assets/images/optimized/story-hero-photography.webp',
    imageFallback: 'assets/images/optimized/story-hero-photography.jpg',
    imageAlt: 'Chief and household at Ifako, Calabar — late 19th century portrait photograph',
    content: `
      <p>This late-19th-century group portrait records a chief and household at Ifako, Calabar. The photographer is unknown.</p>
      <p>The photograph is a specific visual record of people, dress, and a place in Calabar. It belongs to a much wider history of portrait-making across Nigeria, whose makers and communities deserve to be identified wherever records allow.</p>
    `,
    credit: 'Image: "Chief and Household at Ifako, Calabar", late 19th century. Photographer unknown; see the image credits.'
  },

  'rise-of-afrobeat': {
    category: 'Music',
    title: 'The Rise of Afrobeat',
    image: 'assets/images/optimized/music-fela-1970.webp',
    imageFallback: 'assets/images/optimized/music-fela-1970.jpg',
    imageAlt: 'Fela Anikulapo-Kuti, Nigerian musician and activist, photographed in 1970',
    content: `
      <p>Fela Anikulapo-Kuti developed Afrobeat through an encounter between West African musical traditions, jazz, and funk. His lyrics often addressed political power and social conditions.</p>
      <p>The Afrika Shrine in Lagos became an important performance space closely associated with Fela and his music.</p>
      <p>Afrobeat remains an influential part of Nigeria's musical history and a reference point for artists working across genres today.</p>
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
      <p>Cloth and dress traditions differ across Nigeria's many communities. The collection includes aso-oke weaving, Yoruba wedding attire, Ibibio dress, and Urhobo clothing.</p>
      <p>These objects and photographs document particular practices and forms of adornment; they are not a single, uniform story of Nigerian fashion.</p>
      <p>Contemporary designers continue to reinterpret inherited materials and techniques in new settings.</p>
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
      <p>The collection brings together distinct Nigerian material practices, from Ife sculpture to indigo dyeing, leatherwork, earthenware, and Bida metalwork.</p>
      <p>The Ife bronze head represented here is dated to approximately the 12th–15th centuries in its source record. The other objects document more recent craft practices and should be understood within their own local histories.</p>
      <p>These works show that design is not a single movement or period, but a broad set of ways of making, shaping, and communicating.</p>
    `,
    credit: 'Image: Bida metalwork, Nigeria, 1960.'
  }
};

const ARTEFACTS = {
  'photo-tinubu-sq': {
    category: 'Photography',
    title: 'Tinubu Square, Lagos Island',
    date: '2014',
    context: 'A street photograph of Tinubu Square, Lagos Island, made in 2014.',
    credit: 'Photograph by Jeremy Weate. CC BY 2.0.',
    source: 'https://commons.wikimedia.org/wiki/File:2014_Tinubu_Square_Lagos_Nigeria_14640600637.jpg'
  },
  'photo-lagos-bookshop': {
    category: 'Photography',
    title: 'Igbosere Road book stalls, Lagos Island',
    date: '2010',
    context: 'Book stalls on Igbosere Road, Lagos Island, photographed in 2010.',
    credit: 'Source and licence details are recorded in the local image credits.'
  },
  'photo-lagos-market': {
    category: 'Photography',
    title: 'Lagos market scene',
    date: 'Date not recorded',
    context: 'A market scene in Lagos, Nigeria.',
    credit: 'CC BY 2.0. Full source details are recorded in the local image credits.',
    source: 'https://commons.wikimedia.org/wiki/File:Market_in_Lagos,_Nigeria.jpg'
  },
  'photo-ransome-kuti-family': {
    category: 'Photography',
    title: 'The Ransome-Kuti family',
    date: 'c. 1940',
    context: 'A family portrait of Reverend Israel Oludotun Ransome-Kuti, Funmilayo Ransome-Kuti and their children, including a young Fela Kuti.',
    credit: 'Photographer unknown. Public domain; see the local image credits.',
    source: 'https://commons.wikimedia.org/wiki/File:Family_Ransome_Kuti_c1940.jpg'
  },
  'photo-kano-market-1960': {
    category: 'Photography',
    title: 'Men at Kano market',
    date: '1960',
    context: 'A photograph of men in traditional northern Nigerian attire at Kano market.',
    credit: 'Photograph by Dr Mary Gillham Archive Project. CC BY 2.0.',
    source: 'https://commons.wikimedia.org/wiki/File:Gentlemen_of_Kano.jpg'
  },
  'photo-obafemi-awolowo': {
    category: 'Photography',
    title: 'Obafemi Awolowo',
    date: 'Independence era',
    context: 'Portrait of Obafemi Awolowo, Nigerian independence-era statesman and political leader.',
    credit: 'Photograph by Eliot Elisofon. Public domain.',
    source: 'https://commons.wikimedia.org/wiki/File:Obafemi_Awolowo.jpg'
  },
  'photo-tafawa-balewa': {
    category: 'Photography',
    title: 'Sir Abubakar Tafawa Balewa with the Mayor of Port Harcourt',
    date: 'Date not recorded',
    context: 'A photograph of Nigeria’s first Prime Minister, Sir Abubakar Tafawa Balewa, with the Mayor of Port Harcourt.',
    credit: 'Photograph by Francis Ibekwe. CC BY-SA 4.0.',
    source: 'https://commons.wikimedia.org/wiki/File:HIS_MAJESTY_AS_MAYOR_OF_PORT_HARCOURT_WITH_SIR_ALHAJI_TAFAWA_BALEWA.jpeg'
  },
  'music-fela-1986': {
    category: 'Music',
    title: 'Fela Kuti',
    date: 'c. 1986',
    context: 'Album artwork featuring Fela Kuti, distributed by Celluloid Records.',
    credit: 'Public-domain status is stated in the project image inventory; see the local image credits.'
  },
  'music-king-sunny-ade': {
    category: 'Music',
    title: 'King Sunny Ade',
    date: 'Date not recorded',
    context: 'A performance image of Nigerian juju musician King Sunny Ade.',
    credit: 'Photograph by master_xpo. CC BY 2.0.',
    source: 'https://commons.wikimedia.org/wiki/File:King_Sunny_Ade.jpg'
  },
  'music-bata-drum': {
    category: 'Music',
    title: 'Bàtá drum — Rhythms of the Gods',
    date: 'Date not recorded',
    context: 'A bàtá drum, an instrument associated with Yoruba musical traditions.',
    credit: 'CC BY-SA 4.0. Full source details are recorded in the local image credits.'
  },
  'music-burna-boy': {
    category: 'Music',
    title: 'Burna Boy, Nativeland Concert, Lagos',
    date: '2016',
    context: 'Burna Boy performing at the Nativeland Concert in Lagos in 2016.',
    credit: 'Photograph by Catherine Omeresan Sutherland. CC BY-SA 4.0.',
    source: 'https://commons.wikimedia.org/wiki/File:Afrobeats_star_Burna_Boy_performing_with_at_Nativeland_Concert,_Lagos,_Nigeria_2016.jpg'
  },
  'fashion-aso-oke': {
    category: 'Fashion',
    title: 'Aso-oke weaving',
    date: 'Date not recorded',
    context: 'Aso-oke, a hand-woven Yoruba textile.',
    credit: 'CC BY-SA 4.0. Full source details are recorded in the local image credits.'
  },
  'fashion-yoruba-bride': {
    category: 'Fashion',
    title: 'Yoruba bride in traditional attire',
    date: 'Date not recorded',
    context: 'A portrait of a bride wearing traditional Yoruba wedding attire.',
    credit: 'CC BY-SA 4.0. Full source details are recorded in the local image credits.'
  },
  'fashion-ibibio-attire': {
    category: 'Fashion',
    title: 'Ibibio traditional attire',
    date: 'Date not recorded',
    context: 'Traditional attire associated with Ibibio culture in southeastern Nigeria.',
    credit: 'Photograph by Akan1. CC BY-SA 4.0.',
    source: 'https://commons.wikimedia.org/wiki/File:Ibibio_in_traditional_attire.jpg'
  },
  'fashion-masquerade': {
    category: 'Fashion',
    title: 'Masorantan Masquerade Festival, Kwara State',
    date: 'Date not recorded',
    context: 'A Masorantan Masquerade Festival scene in Igosun, Kwara State.',
    credit: 'Photograph by Royalesignature. CC BY-SA 4.0.',
    source: 'https://commons.wikimedia.org/wiki/File:Masorantan_Masquerade_Festival_in_Igosun,_Kwara_State,_Nigeria_09.jpg'
  },
  'fashion-urhobo': {
    category: 'Fashion',
    title: 'Urhobo traditional dress',
    date: 'Date not recorded',
    context: 'Traditional dress associated with Urhobo communities in the Niger Delta.',
    credit: 'CC BY-SA 4.0. Full source details are recorded in the local image credits.'
  },
  'design-indigo-dye': {
    category: 'Design',
    title: 'Indigo dyeing workshop',
    date: 'Date not recorded',
    context: 'A Nigerian indigo dyeing workshop documenting textile-making practice.',
    credit: 'CC BY-SA 3.0. Full source details are recorded in the local image credits.'
  },
  'design-leatherwork': {
    category: 'Design',
    title: 'Leatherwork and saddle-making, Minna',
    date: 'Date not recorded',
    context: 'Leatherwork and saddle-making in Minna, Nigeria.',
    credit: 'Photograph by Dr Mary Gillham Archive Project. CC BY 2.0.',
    source: 'https://commons.wikimedia.org/wiki/File:Leatherworker_and_saddle_maker._Minna.jpg'
  },
  'design-earthenware': {
    category: 'Design',
    title: 'Hand-made earthenware pots, Zaria road',
    date: '1981',
    context: 'Hand-made earthenware pots photographed on Zaria road in 1981.',
    credit: 'Photograph by Dr Mary Gillham Archive Project. CC BY 2.0.',
    source: 'https://commons.wikimedia.org/wiki/File:Hand_made_earthenware_pots_1981.jpg'
  },
  'design-abuja-pottery': {
    category: 'Design',
    title: 'Abuja pottery',
    date: '1960',
    context: 'Traditional Abuja pottery documented in 1960.',
    credit: 'Photograph by Dr Mary Gillham Archive Project. CC BY 2.0.',
    source: 'https://commons.wikimedia.org/wiki/File:Abuja_pottery.jpg'
  },
  'design-bida-metalwork': {
    category: 'Design',
    title: 'Bida metalwork and carved calabashes',
    date: '1960',
    context: 'Carved calabashes and glass beads made from old bottles in Bida, Nigeria.',
    credit: 'Photograph by Dr Mary Gillham Archive Project. CC BY 2.0.',
    source: 'https://commons.wikimedia.org/wiki/File:Bida_metal_work_carved_calabashes,_glass_beads_from_old_bottles._Nigeria_1960.jpg'
  }
};

(function initNavigation() {
  const header   = document.getElementById('site-header');
  const toggle   = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const closeBtn = document.getElementById('nav-menu-close');

  if (!header || !toggle || !navLinks || !closeBtn) return;

  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  }

  function syncMenuState(isOpen, restoreFocus) {
    navLinks.classList.toggle('is-open', isOpen);
    header.classList.toggle('is-menu-open', isOpen);
    document.body.classList.toggle('is-menu-open', isOpen && window.matchMedia('(max-width: 899px)').matches);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    if (!isOpen && restoreFocus) toggle.focus();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toggle.addEventListener('click', function () {
    syncMenuState(!navLinks.classList.contains('is-open'), false);
  });

  closeBtn.addEventListener('click', function () { closeMobileMenu(true); });

  navLinks.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () { closeMobileMenu(false); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
      closeMobileMenu(true);
    }
  });

  window.addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 900px)').matches && navLinks.classList.contains('is-open')) {
      closeMobileMenu(false);
    }
  }, { passive: true });

  function closeMobileMenu(restoreFocus) {
    syncMenuState(false, restoreFocus);
  }
})();

(function initSmoothScroll() {
  document.addEventListener('click', function (e) {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const targetId = anchor.getAttribute('href').slice(1);
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    e.preventDefault();

    const top = target.getBoundingClientRect().top + window.scrollY - getNavHeight();
    window.scrollTo({ top, behavior: 'smooth' });
  });
})();

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

  ['home', 'explore', 'catalogue', 'stories', 'timeline', 'about'].forEach(function (id) {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
})();

(function initCollectionCardLinks() {

  const storiesSection = document.getElementById('stories');

  document.querySelectorAll('.collection-card__link').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filter = btn.getAttribute('data-filter');
      if (!filter) return;

      if (storiesSection) {
        const top = storiesSection.getBoundingClientRect().top + window.scrollY - getNavHeight();
        window.scrollTo({ top, behavior: 'smooth' });
      }

      setTimeout(function () { applyStoryFilter(filter); }, 300);
    });
  });
})();

const _storyCards  = [];
const _photoItems  = [];
const _filterTabs  = [];
let   _emptyMsg    = null;

(function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  if (!tabs.length) return;

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

(function initArchiveCompare() {
  const frame = document.getElementById('archive-compare');
  const range = document.getElementById('archive-compare-range');
  if (!frame || !range) return;

  function updateSplit() {
    const position = range.value + '%';
    frame.style.setProperty('--compare-position', position);
    range.setAttribute('aria-valuetext', 'Reveal ' + range.value + '% of the Igbosere Road photograph from 2010');
  }

  range.addEventListener('input', updateSplit);
  updateSplit();
})();

function applyStoryFilter(filter) {
  let visible = 0;

  _storyCards.forEach(function (card) {
    const show = filter === 'all' || card.dataset.discipline === filter;
    card.classList.toggle('is-hidden', !show);
    if (show) visible++;
  });

  _photoItems.forEach(function (item) {
    const show = filter === 'all' || item.dataset.discipline === filter;
    item.classList.toggle('is-hidden', !show);
  });

  if (_emptyMsg) _emptyMsg.hidden = visible > 0;

  _filterTabs.forEach(function (tab) {
    const match = tab.getAttribute('data-filter') === filter;
    tab.classList.toggle('filter-tab--active', match);
    tab.setAttribute('aria-pressed', String(match));
  });
}

(function initStoryModal() {
  const modal    = document.getElementById('story-modal');
  const backdrop = document.getElementById('modal-backdrop');
  const closeBtn = document.getElementById('modal-close');

  if (!modal || !backdrop || !closeBtn) return;

  const modalCategory    = document.getElementById('modal-category');
  const modalTitle       = document.getElementById('modal-title');
  const modalContent     = document.getElementById('modal-content');
  const modalCredit      = document.getElementById('modal-credit');
  const modalImg         = document.getElementById('modal-img');
  const modalPlaceholder = document.getElementById('modal-img-placeholder');
  const modalCatalogue   = document.getElementById('modal-catalogue');
  const modalDate        = document.getElementById('modal-date');
  const modalPanel       = modal.querySelector('.story-modal__panel');

  let triggerElement = null;

  document.querySelectorAll('.story-card').forEach(function (card) {
    card.addEventListener('click', function () { openModal(card, STORIES[card.dataset.story]); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card, STORIES[card.dataset.story]);
      }
    });
  });

  document.querySelectorAll('.photo-grid__item[data-artefact]').forEach(function (item) {
    item.setAttribute('aria-haspopup', 'dialog');
    item.addEventListener('click', function () {
      openModal(item, ARTEFACTS[item.dataset.artefact], item);
    });
    item.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(item, ARTEFACTS[item.dataset.artefact], item);
      }
    });
  });

  backdrop.addEventListener('click', closeModal);

  closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });

  function openModal(card, record, artefact) {
    if (!record) return;

    modalCategory.textContent = record.category;
    modalTitle.textContent    = record.title;
    modalCatalogue.textContent = artefact ? 'Object ' + artefact.dataset.artefact.toUpperCase() : 'Story file';
    modalDate.textContent = record.date || '';
    modalContent.replaceChildren();
    if (artefact) {
      const paragraph = document.createElement('p');
      paragraph.textContent = record.context;
      modalContent.append(paragraph);
      modalCredit.replaceChildren(document.createTextNode(record.credit));
      if (record.source || record.credit) {
        const source = document.createElement('a');
        source.href = record.source || 'assets/images/history/IMAGE-CREDITS.md';
        source.target = '_blank';
        source.rel = 'noopener noreferrer';
        source.textContent = record.source ? 'View source record' : 'Open local image credits';
        modalCredit.append(document.createTextNode(' '), source);
      }
    } else {
      modalContent.innerHTML = record.content;
      modalCredit.textContent = record.credit || '';
    }

    const image = card.querySelector('img');
    const fallbackImage = artefact && image ? image.src : record.imageFallback;
    modalImg.src = artefact && image ? image.currentSrc || image.src : record.image;
    modalImg.alt = artefact ? image.alt : record.imageAlt || record.title;
    modalImg.style.opacity = '0';
    modalImg.dataset.fallbackAttempted = 'false';
    modalImg.dataset.fallbackSrc = fallbackImage || '';

    modalImg.onload = function () {
      modalImg.style.opacity = '1';
      if (modalPlaceholder) modalPlaceholder.style.opacity = '0';
    };
    modalImg.onerror = function () {
      const fallbackSrc = modalImg.dataset.fallbackSrc;
      if (fallbackSrc && modalImg.dataset.fallbackAttempted === 'false'
          && modalImg.src !== new URL(fallbackSrc, document.baseURI).href) {
        modalImg.dataset.fallbackAttempted = 'true';
        modalImg.src = fallbackSrc;
      } else {
        modalImg.style.opacity = '0';
        if (modalPlaceholder) modalPlaceholder.style.opacity = '1';
      }
    };

    if (modalPlaceholder) {
      modalPlaceholder.setAttribute('data-label', artefact ? image.alt : record.imageAlt || record.title);
      modalPlaceholder.style.opacity = '1';
    }

    triggerElement = card;
    modal.hidden   = false;
    document.body.classList.add('has-open-overlay');

    if (modalPanel) modalPanel.scrollTop = 0;

    setTimeout(function () { closeBtn.focus(); }, 50);
    modal.addEventListener('keydown', trapFocus);
  }

  function closeModal() {
    modal.removeEventListener('keydown', trapFocus);
    document.body.classList.remove('has-open-overlay');

    if (triggerElement) {
      triggerElement.focus();
      triggerElement = null;
    }

    modal.hidden = true;
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

(function initSearch() {
  const trigger = document.getElementById('nav-search-btn');
  const overlay = document.getElementById('search-overlay');
  const backdrop = document.getElementById('search-backdrop');
  const closeBtn = document.getElementById('search-close');
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');

  if (!trigger || !overlay || !backdrop || !closeBtn || !input || !results) return;

  const stories = Object.keys(STORIES).map(function (id) {
    const story = STORIES[id];
    return {
      id: id,
      category: story.category,
      title: story.title,
      text: story.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
    };
  });

  trigger.addEventListener('click', openSearch);
  closeBtn.addEventListener('click', closeSearch);
  backdrop.addEventListener('click', closeSearch);
  input.addEventListener('input', renderResults);

  results.addEventListener('click', function (event) {
    const chip = event.target.closest('[data-search-term]');
    if (chip) {
      input.value = chip.dataset.searchTerm;
      renderResults();
      input.focus();
      return;
    }

    const result = event.target.closest('[data-story-result]');
    if (!result) return;

    const card = document.querySelector('.story-card[data-story="' + result.dataset.storyResult + '"]');
    closeSearch();
    if (card) card.click();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !overlay.hidden) closeSearch();
  });

  overlay.addEventListener('keydown', function (event) {
    if (event.key !== 'Tab') return;
    const focusable = Array.from(overlay.querySelectorAll('button, input'))
      .filter(function (element) { return !element.disabled && element.offsetParent !== null; });
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  function openSearch() {
    overlay.hidden = false;
    document.body.classList.add('has-open-overlay');
    trigger.setAttribute('aria-expanded', 'true');
    input.focus();
  }

  function closeSearch() {
    overlay.hidden = true;
    document.body.classList.remove('has-open-overlay');
    trigger.setAttribute('aria-expanded', 'false');
    input.value = '';
    renderResults();
    trigger.focus();
  }

  function renderResults() {
    const query = input.value.trim().toLowerCase();
    if (!query) {
      results.innerHTML = '<div class="search-overlay__hint"><span>Search stories by title, discipline, or topic.</span><div class="search-hint__chips"><button class="search-hint__chip" type="button" data-search-term="photography">Photography</button><button class="search-hint__chip" type="button" data-search-term="music">Music</button><button class="search-hint__chip" type="button" data-search-term="fashion">Fashion</button><button class="search-hint__chip" type="button" data-search-term="design">Design</button></div></div>';
      return;
    }

    const matches = stories.filter(function (story) {
      return (story.title + ' ' + story.category + ' ' + story.text).toLowerCase().includes(query);
    });

    if (!matches.length) {
      results.innerHTML = '<p class="search-overlay__empty">No stories found. Try another search.</p>';
      return;
    }

    results.replaceChildren();
    matches.forEach(function (story) {
      const button = document.createElement('button');
      button.className = 'search-result';
      button.type = 'button';
      button.dataset.storyResult = story.id;

      const category = document.createElement('span');
      category.className = 'search-result__category';
      category.textContent = story.category;

      const title = document.createElement('span');
      title.className = 'search-result__title';
      title.textContent = story.title;

      const excerpt = document.createElement('span');
      excerpt.className = 'search-result__excerpt';
      excerpt.textContent = story.text;

      const content = document.createElement('span');
      content.append(category, title, excerpt);
      button.append(content);
      results.append(button);
    });
  }
})();

(function initTimeline() {
  const wrapper = document.getElementById('timeline-wrapper');
  const prevBtn = document.getElementById('timeline-prev');
  const nextBtn = document.getElementById('timeline-next');
  const periodButtons = Array.from(document.querySelectorAll('.timeline-period[data-era-target]'));

  if (!wrapper || !prevBtn || !nextBtn) return;

  const SCROLL_AMOUNT = 340;
  const timelineItems = Array.from(wrapper.querySelectorAll('.timeline-item[data-era]'));

  function setActivePeriod(era) {
    periodButtons.forEach(function (button) {
      const isActive = button.dataset.eraTarget === era;
      button.classList.toggle('is-active', isActive);
      if (isActive) button.setAttribute('aria-current', 'true');
      else button.removeAttribute('aria-current');
    });
  }

  periodButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const item = timelineItems.find(function (entry) {
        return entry.dataset.era === button.dataset.eraTarget;
      });
      if (!item) return;

      const left = item.getBoundingClientRect().left - wrapper.getBoundingClientRect().left + wrapper.scrollLeft;
      wrapper.scrollTo({ left: left, behavior: 'smooth' });
      setActivePeriod(button.dataset.eraTarget);
    });
  });

  prevBtn.addEventListener('click', function () {
    wrapper.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', function () {
    wrapper.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
  });

  function updateArrows() {
    prevBtn.disabled = wrapper.scrollLeft <= 4;
    nextBtn.disabled = wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth - 4;

    if (timelineItems.length && periodButtons.length) {
      const wrapperLeft = wrapper.getBoundingClientRect().left;
      const current = timelineItems.reduce(function (closest, item) {
        const distance = Math.abs(item.getBoundingClientRect().left - wrapperLeft);
        return distance < closest.distance ? { item: item, distance: distance } : closest;
      }, { item: timelineItems[0], distance: Infinity });
      setActivePeriod(current.item.dataset.era);
    }
  }

  wrapper.addEventListener('scroll', updateArrows, { passive: true });
  updateArrows();

  let isDragging = false, startX = 0, startScroll = 0;

  wrapper.addEventListener('mousedown', function (e) {
    isDragging  = true;
    startX      = e.pageX - wrapper.offsetLeft;
    startScroll = wrapper.scrollLeft;
    wrapper.style.cursor = 'grabbing';
  });

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

  wrapper.setAttribute('tabindex', '0');
  wrapper.setAttribute('role', 'region');
  wrapper.setAttribute('aria-label', 'Scrollable creative history timeline');

  wrapper.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { e.preventDefault(); wrapper.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' }); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); wrapper.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' }); }
  });
})();

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
  });
})();

(function initReveal() {

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const selectors = [
    '.section-intro',
    '.collection-card',
    '.story-card',
    '.timeline-item',
    '.about__image',
    '.about__content',
    '.archive-compare__intro',
    '.archive-compare__work'
  ];

  const elements = document.querySelectorAll(selectors.join(', '));
  if (!elements.length) return;

  elements.forEach(function (el) { el.classList.add('reveal'); });

  document.querySelectorAll('.collections, .stories-grid').forEach(function (group) {
    group.classList.add('reveal-group');
  });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(function (el) { observer.observe(el); });
})();

(function initFooterCollectionLinks() {
  const storiesSection = document.getElementById('stories');

  document.querySelectorAll('.footer__link[data-filter-target]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const filter = link.getAttribute('data-filter-target');

      if (storiesSection) {
        const top = storiesSection.getBoundingClientRect().top + window.scrollY - getNavHeight();
        window.scrollTo({ top, behavior: 'smooth' });
      }

      setTimeout(function () { applyStoryFilter(filter); }, 300);
    });
  });
})();
