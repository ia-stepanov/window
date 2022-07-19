import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
  const windowFrom = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeight = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  function bindActionTrueElems(event, elem, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN':
            state[prop] = i;
            break;
          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              i === 0 ? (state[prop] = 'Холодное') : (state[prop] = 'Теплое');
              elem.forEach((box, j) => {
                box.checked = false;
                if (i === j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }
            break;
          case 'SELECT':
            state[prop] = item.value;
            break;
        }
        console.log(state);
      });
    });
  }

  bindActionTrueElems('click', windowFrom, 'form');
  bindActionTrueElems('input', windowWidth, 'width');
  bindActionTrueElems('input', windowHeight, 'height');
  bindActionTrueElems('change', windowType, 'type');
  bindActionTrueElems('change', windowProfile, 'profile');
};

export default changeModalState;
