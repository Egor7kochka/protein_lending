document.addEventListener('DOMContentLoaded', function() {
  const switchLeft = document.querySelector('.switch-left');
  const switchRight = document.querySelector('.switch-right');
  const korobka = document.querySelector('.korobka');
  const plant = document.querySelector('.plant');

  // Инициализация
  plant.classList.add('hidden');

  // Клик на Milk Protein
  switchLeft.addEventListener('click', function() {
    plant.classList.add('hidden');
    korobka.classList.remove('hidden');
  });
  
  // Клик на Plant Protein
  switchRight.addEventListener('click', function() {
    korobka.classList.add('hidden');
    plant.classList.remove('hidden');
  });

   switchRight.addEventListener('click', function() {
    korobka.classList.add('hidden');
    plant.classList.remove('hidden');
  });
});