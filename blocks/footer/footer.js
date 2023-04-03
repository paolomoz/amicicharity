import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  // fetch footer content
  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});

  if (resp.ok) {
    const html = await resp.text();
    block.innerHTML = html;

    // decorate footer DOM
    const row1 = document.createElement('div');
    row1.classList.add('footer-row');
    const row2 = document.createElement('div');
    row2.classList.add('footer-row');

    [...block.children].forEach((div, i) => {
      if (i < 3) {
        row1.append(div);
      } else {
        row2.append(div);
      }
    })

    block.append(row1);
    block.append(row2);
    await decorateIcons(block);
  }
}
