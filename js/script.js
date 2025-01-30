// Botão Voltar ao Topo
const backToTopButton = document.getElementById('back-to-top');

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// FAQ
const faqCards = document.querySelectorAll('.faq-card');

faqCards.forEach(card => {
  const question = card.querySelector('.faq-question');
  const answer = card.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    card.classList.toggle('active');

    // Fecha outros cards abertos
    faqCards.forEach(otherCard => {
      if (otherCard !== card && otherCard.classList.contains('active')) {
        otherCard.classList.remove('active');
      }
    });
  });
});