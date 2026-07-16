document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('primary-nav');
  const toggle = document.querySelector('.menu-toggle');

  if (nav && toggle) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const dateEl = document.getElementById('current-date');
  const greetingEl = document.getElementById('greeting');
  if (dateEl) {
    const now = new Date();
    dateEl.textContent = now.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  }
  if (greetingEl) {
    const hour = new Date().getHours();
    let greeting = 'Good evening!';
    if (hour < 12) greeting = 'Good morning!';
    else if (hour < 18) greeting = 'Good afternoon!';
    greetingEl.textContent = greeting;
  }

  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const status = document.getElementById('form-status');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  const clearErrors = () => {
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    status.textContent = '';
    status.style.color = '';
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearErrors();

    let valid = true;
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) {
      nameError.textContent = 'Please enter your full name.';
      valid = false;
    }
    if (!emailPattern.test(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      valid = false;
    }
    if (message.length < 10) {
      messageError.textContent = 'Please write at least 10 characters.';
      valid = false;
    }

    if (valid) {
      status.textContent = 'Form checked successfully. Message ready to send.';
      status.style.color = '#15803d';
      form.reset();
    } else {
      status.textContent = 'Please fix the errors before submitting.';
      status.style.color = '#c02626';
    }
  });
});
