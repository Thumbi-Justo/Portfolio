const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const whatsappLink = document.getElementById('whatsappLink');
const toast = document.getElementById('toast');

document.getElementById('year').textContent = new Date().getFullYear();

// Set your WhatsApp number with country code and digits only before publishing.
const whatsappNumber = '254797854720';
const validWhatsAppNumber = /^\d+$/.test(whatsappNumber);

if (validWhatsAppNumber) {
  whatsappLink.href = `https://wa.me/${whatsappNumber}`;
} else {
  whatsappLink.addEventListener('click', event => {
    event.preventDefault();
    showToast('Add your WhatsApp number in script.js.');
  });
}

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2400);
}
