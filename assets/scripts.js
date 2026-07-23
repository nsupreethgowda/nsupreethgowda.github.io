document.querySelectorAll('.accordionStyles .panel-title').forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    const target = document.querySelector(trigger.getAttribute('href'));
    if (!target) return;

    event.preventDefault();
    const isOpen = target.classList.toggle('is-open');
    trigger.setAttribute('aria-expanded', String(isOpen));
  });
});
