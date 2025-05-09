const form = document.querySelector('.feedback-form');

const feedbackState =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};

if (feedbackState.email) {
  form.email.value = feedbackState.email;
}
if (feedbackState.message) {
  form.message.value = feedbackState.message;
}
//depoya kadetmek icin
form.addEventListener('input', event => {
  const { name, value } = event.target;

  feedbackState[name] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
});
//depoyu ve formu temizlemek icin
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!form.email.value || !form.message.value) {
    alert('Both email and message are required!');
    return;
  }

  const submittedData = {
    email: form.email.value,
    message: form.message.value,
  };
  console.log(submittedData);

  localStorage.removeItem('feedback-form-state');
  form.reset();
});
