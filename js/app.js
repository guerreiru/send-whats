const formPhone = document.querySelector('#form-phone');
const phone = document.querySelector('#phone');

function onSubmit(e) {
  e.preventDefault();

  if (phone.value.trim().length >= 9) {
    window.open(`http://wa.me/55${phone.value.replace(/\D/g, '')}`, '_blank');
  }
}

formPhone.addEventListener('submit', onSubmit);
