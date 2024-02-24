function initObserverSelectNavbar() {
  const [vectorSkullBar, vectorClockBar, vectorSkull, vectorClock] = document.querySelectorAll('.navbar__vector--hidden');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar__buttons-link')

  function activeSectionHandler(currentSectionId) {{
    navLinks.forEach((link) => {
      if (link.dataset.section === currentSectionId) {
        link.classList.add('navbar__buttons-link--active');

        if (currentSectionId === 'landing' || currentSectionId === 'history') {
          vectorSkullBar.classList.add('navbar__vector--show');
          vectorSkull.classList.add('navbar__vector--show');
        } else {
          vectorSkullBar.classList.remove('navbar__vector--show');
          vectorSkull.classList.remove('navbar__vector--show');
        }

        if (currentSectionId === 'discography') {
          vectorClockBar.classList.add('navbar__vector--show');
          vectorClock.classList.add('navbar__vector--show');
        } else {
          vectorClockBar.classList.remove('navbar__vector--show');
          vectorClock.classList.remove('navbar__vector--show');
        }

        return;
      }
      link.classList.remove('navbar__buttons-link--active');
    });

  }};

  function sectionWatcherCallback(section, sectionWatcher) {
    section.forEach((section) => {
      if (!section.isIntersecting) return;
      activeSectionHandler(section.target.id);
    });
  }

  const sectionWatcherOptions = { threshold: 0.3, rootMargin: '0px' };
  const sectionWatcher = new IntersectionObserver(sectionWatcherCallback, sectionWatcherOptions);

  sections.forEach((section) => sectionWatcher.observe(section));
}

function initObserverFadeSections() {
  const hiddenElements = document.querySelectorAll('.element--hidden');

  const observerElem = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('element--show');
      } else {
        entry.target.classList.remove('element--show');
      }
    });
  });

  hiddenElements.forEach((elem) => observerElem.observe(elem));
}

function setCurrentYear() {
  document.getElementById("footerLabel").textContent = "@happy-valley-rock - " + new Date().getFullYear();
}

initObserverFadeSections();
initObserverSelectNavbar();
setCurrentYear();
