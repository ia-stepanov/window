import calcScroll from './calcScroll';

const images = () => {
  const imgPopup = document.createElement('div');
  const workSection = document.querySelector('.works');
  const bigImage = document.createElement('img');
  const scroll = calcScroll();

  imgPopup.classList.add('popup');
  imgPopup.style.cssText = `
    display: none;
    justify-content: center;
    align-items: center;
  `;

  bigImage.style.cssText = `
    max-width: 75vw;
    max-height: 75vh;
  `;

  workSection.appendChild(imgPopup);
  imgPopup.appendChild(bigImage);

  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`;

      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
    }

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
    }
  });
};

export default images;
