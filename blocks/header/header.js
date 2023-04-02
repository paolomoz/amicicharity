import { getMetadata, decorateIcons } from '../../scripts/lib-franklin.js';

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  const headerLogo = document.createElement('div');
  headerLogo.classList.add('header-logo');
  headerLogo.innerHTML = 
    `<a href='/'>
      <img alt='Amici Camping Charity' title='logo' src='../../images/amiciwhite.png'>
    </a>`;

  const searchBlock = document.createElement('div');
  searchBlock.classList.add('content-block', 'search-block');
  searchBlock.innerHTML = `  
    <div class='search-form search-form--031ce854a9ad44ddadf98c09aa453b8e' role='search'>
      <form class='form--inline form--inline--no-button' novalidate=''>
        <div class='form-row'>
          <div class='form-row__controls'>
            <div class='form-control--search' style='position: relative;'>
              <div id='unibox-suggest-box--ss360_1' class='unibox' role='listbox' aria-label='Search Suggestions' style='min-width: 251px;'></div>
              <i class='fa fa-search'></i>
              <input placeholder='Search' aria-label='Search our site' type='search' id='search-form__input--031ce854a9ad44ddadf98c09aa453b8e' autocomplete='off' role='combobox' aria-describedby='unibox-controls-description--ss360_1' aria-owns='unibox-suggest-box--ss360_1' aria-controls='unibox-suggest-box--ss360_1' aria-expanded='false'>
              <span id='unibox-controls-description--ss360_1' style='position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0' class='unibox-sr-only' tabindex='-1'>
                Use the up and down arrows to select a result. Press enter to go to the selected search result. Touch device users can use touch and swipe gestures.
              </span>
              <span id='unibox-status-message--ss360_1' style='position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0' tabindex='-1' aria-live='polite' aria-atomic='true' role='status' class='unibox-sr-only'></span>
              <div id='unibox-invisible--ss360_1' class='unibox__invisible' style='display: none;'></div>
            </div>
          </div>
        </div>
      </form>
    </div>`;

  block.innerHTML = '';
  block.append(headerLogo);
  block.append(searchBlock);
  await decorateIcons(block);
}
