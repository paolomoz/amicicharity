import { getMetadata, decorateIcons } from '../../scripts/lib-franklin.js';

// media query match that indicates mobile/tablet width
const isDesktop = window.matchMedia('(min-width: 900px)');

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {

  const navContainer = block.querySelector('div');
  navContainer.classList.add('nav-container');

  const navLogo = document.createElement('div');
  navLogo.classList.add('nav-logo');
  navLogo.innerHTML = "<a href='https://www.amicicharity.org/welcome.html'><img alt='Amici Camping Charity' title='logo' src='/images/amicicolored.png'></a>";

  const navRow = document.createElement('nav-row');
  navRow.classList.add('nav-row');
  navRow.innerHTML = "<a href='https://amici.akaraisin.com/ui/AmiciCampingCharityDonate/donations/start' target='_blank' rel='noopener noreferrer' itemprop='url'>Donate</a>"

  // fetch nav content
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta).pathname : '/nav';
  const resp = await fetch(`${navPath}.plain.html`);

  if (resp.ok) {
    const html = await resp.text();

    // decorate nav DOM
    const nav = document.createElement('nav');
    nav.id = 'nav';
    nav.classList.add('dropdown');
    nav.innerHTML = html;
    navContainer.innerHTML = '';

    navContainer.append(navLogo);
    navContainer.append(nav);
    navContainer.append(navRow);

    decorateIcons(nav);
    block.append(navContainer);
  }
}
