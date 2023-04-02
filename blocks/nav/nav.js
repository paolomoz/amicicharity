import { getMetadata, decorateIcons } from '../../scripts/lib-franklin.js';

export default async function decorate(block) {

  const navLogo = document.createElement('div');
  navLogo.classList.add('nav-logo');
  navLogo.innerHTML = "<a href='https://www.amicicharity.org/welcome.html'><img alt='Amici Camping Charity' title='logo' src='/images/amicicolored.png'></a>";

  const navRow = document.createElement('div');
  navRow.classList.add('nav-row');
  navRow.innerHTML = "<a href='https://amici.akaraisin.com/ui/AmiciCampingCharityDonate/donations/start' target='_blank' rel='noopener noreferrer' itemprop='url'>Donate</a>";

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
    block.innerHTML = '';

    block.append(navLogo);
    block.append(nav);
    block.append(navRow);

    decorateIcons(nav);
  }
}