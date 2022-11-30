import throttle from 'lodash.throttle';



const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  input: document.querySelector('input'),
};


const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('input', throttle(saveDataToStorage, 500));
refs.form.addEventListener('submit', onFormSubmit);
window.addEventListener('load', getData);

getData();

function saveDataToStorage() {
  const email = refs.form.elements.email.value;
  const message = refs.form.elements.message.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message })); 
};

function onFormSubmit(event) {
  console.log({
    email: event.currentTarget.email.value,
    message: event.currentTarget.message.value
  });

    if (refs.input.value === '' || refs.textarea.value === ''){
        return alert(' feel up all form!');}
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function getData(event) {
  const dataFromStorage = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(dataFromStorage);

  if (dataFromStorage) {
    refs.input.value = parsedData.email || '';
    refs.textarea.value = parsedData.message || '';
  }
  return dataFromStorage;
}