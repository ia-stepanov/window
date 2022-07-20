const images = () => {
  const imgPopup = document.createElement('div');
  const workSection = document.querySelector('.works');
  const bigImage = document.querySelector('img');

  imgPopup.classList.add('popup');
  imgPopup.style.cssText = `
    display: none;
    justify-content: center;
    align-items: center;
  `;

  bigImage.style.cssText = `
    max-height: 75vh;
    max-width: 75vw;
  `;

  workSection.appendChild(imgPopup);
  imgPopup.appendChild(bigImage);

  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';

      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
    }

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
    }
  });
};

export default images;
