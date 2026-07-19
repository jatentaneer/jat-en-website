const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

function submitForm(event) {
  event.preventDefault();
  const note = document.getElementById('form-note');
  note.textContent = 'ได้รับข้อมูลตัวอย่างแล้ว — ขั้นตอนต่อไปต้องเชื่อม Formspree หรือบริการอีเมลก่อนใช้งานจริง';
  note.style.fontWeight = '700';
  return false;
}
