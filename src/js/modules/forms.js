import checkNumInputs from './checkNumInputs';

const forms = (state) => {
  const form = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');

  checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: 'Загрузка…',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так…',
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
      method: 'POST',
      body: data,
    });

    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = '';
    });
  };

  function closeModal() {
    const modal = document.querySelector('.popup_calc_end');
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  function formReset() {
    for (let key in state) {
      delete state[key];
    }
  }

  form.forEach((item) => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);

      const formData = new FormData(item);
      if (item.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      postData('assets/server.php', formData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = message.success;
          statusMessage.remove();
        })
        .catch(() => (statusMessage.textContent = message.failure))
        .finally(() => {
          clearInputs();
          formReset();
          closeModal();
        });
    });
  });
};

export default forms;
