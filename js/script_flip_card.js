// Ativa clique apenas em dispositivos sem hover (ex: touch)
document.addEventListener('DOMContentLoaded', function () {
  const flipCards = document.querySelectorAll('.flip-card');
  const useClick = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  if (!useClick) {
    return;
  }

  flipCards.forEach(card => {
    card.addEventListener('click', function () {
      this.classList.toggle('flipped');
    });
  });
});
