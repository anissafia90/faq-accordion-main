const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const plusIcon = question.querySelector('.fa-plus');
  const minusIcon = question.querySelector('.fa-minus');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    faqItems.forEach(faqItem => {
      if (faqItem !== item) {
        faqItem.classList.remove('active');
        faqItem.querySelector('.faq-answer').style.display = 'none';
        faqItem.querySelector('.fa-plus').style.display = 'inline';
        faqItem.querySelector('.fa-minus').style.display = 'none';
      }
    });

    item.classList.toggle('active');
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    plusIcon.style.display = plusIcon.style.display === 'none' ? 'inline' : 'none';
    minusIcon.style.display = minusIcon.style.display === 'none' ? 'inline' : 'none';
  });
});
