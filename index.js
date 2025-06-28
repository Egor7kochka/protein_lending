document.addEventListener('DOMContentLoaded', function() {
  const switchLeft = document.querySelector('.switch-left');
  const switchRight = document.querySelector('.switch-right');
  const korobka = document.querySelectorAll('.korobka');
  const plant = document.querySelectorAll('.plant');
  const imagesContainer = document.querySelector('.images-container');
  const mText = document.querySelectorAll('.milk-protein-text')
  const pText = document.querySelectorAll('.plant-protein-text')
  // Инициализация
  plant.forEach(el => el.classList.add('hidden'));
  pText.forEach(el => el.classList.add('hidden'));
  imagesContainer.classList.add('bg-animate');

  // Клик на Milk Protein
  switchLeft.addEventListener('click', function() {
    imagesContainer.classList.remove('bg-animate');
    void imagesContainer.offsetWidth; // Триггер рефлоу
    imagesContainer.classList.add('bg-animate');
    
    plant.forEach(el => el.classList.add('hidden'));
    korobka.forEach(el => el.classList.remove('hidden'));
       pText.forEach(el => el.classList.add('hidden'));
    mText.forEach(el => el.classList.remove('hidden'));
  });
  
  // Клик на Plant Protein
  switchRight.addEventListener('click', function() {
    imagesContainer.classList.remove('bg-animate');
    void imagesContainer.offsetWidth;
    imagesContainer.classList.add('bg-animate');
    
    korobka.forEach(el => el.classList.add('hidden'));
    plant.forEach(el => el.classList.remove('hidden'));
        mText.forEach(el => el.classList.add('hidden'));
    pText.forEach(el => el.classList.remove('hidden'));
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const switchLeft = document.querySelector('.switch-left');
  const switchRight = document.querySelector('.switch-right');
  const switchBg = document.querySelector('.switch-bg');
  const imagesContainer = document.querySelector('.images-container-wrapper');
  const structure = document.querySelector('.structure');
  const nuts = document.querySelectorAll('.nuts');

  // Создаем элементы-клоны для псевдоэлементов
  const manClone = document.createElement('div');
  const womanClone = document.createElement('div');
  
  manClone.className = 'pseudo-man';
  womanClone.className = 'pseudo-woman';
  nuts.className = 'nuts';
  // Стили для плавных переходов
  const pseudoStyles = `
    .images-container-wrapper {
      position: relative;
      width: 100%;
   
    }
    
    .pseudo-man, .pseudo-woman {
      position: absolute;
      bottom: 0;
      z-index: -1;
      opacity: 0;
      transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
           -webkit-mask-image: linear-gradient(to bottom, 
    rgba(0,176,240,1) 70%,  /* Голубой цвет (подставьте ваш HEX/RGB) */
    rgba(0,176,240,0) 100%   /* Плавное исчезновение */
  );
  mask-image: linear-gradient(to bottom, 
    rgba(0,176,240,1) 70%, 
    rgba(0,176,240,0) 100%
  );
    }
    
    .pseudo-man {
      left: 0;
      background: url(/images/man.png) no-repeat;
      width: 679px;
      height: 787px;
      transform: translateX(-20px);
      
    }
    .nuts {
       transition: transform 1s ease, opacity 1s ease;
      }
    .pseudo-woman {
      right: 0;
      background: url(/images/woman.png) no-repeat;
      width: 414px;
      height: 808px;
      transform: translateX(20px);
      
    }
    
    .pseudo-man.active, .pseudo-woman.active {
      opacity: 1;
      transform: translateX(0);
    }
    
    .structure::before, .structure::after {
      transition: opacity 0.6s ease;
    }
    
    .structure.hide-pseudo::before,
    .structure.hide-pseudo::after {
      opacity: 0;
    }
  `;
  
  // Добавляем стили в head
  const styleElement = document.createElement('style');
  styleElement.innerHTML = pseudoStyles;
  document.head.appendChild(styleElement);

  // Клик на Milk Protein
  switchLeft.addEventListener('click', function() {
    if (!this.classList.contains('active')) {
      this.classList.add('active');
      switchRight.classList.remove('active');
      
      // Плавное скрытие клонов
      manClone.classList.remove('active');
      womanClone.classList.remove('active');
      
      setTimeout(() => {
        // Возвращаем псевдоэлементы в structure
        structure.classList.remove('hide-pseudo');
        if (manClone.parentNode) manClone.remove();
        if (womanClone.parentNode) womanClone.remove();
      }, 600); // Должно совпадать с длительностью анимации
      
      // Анимация фона
      switchBg.style.transform = 'translateX(0) scaleX(1)';
      setTimeout(() => {
        switchBg.style.left = '0';
        switchBg.style.transform = 'translateX(0) scaleX(1)';
      }, 10);
    }
  });
  
  // Клик на Plant Protein
  switchRight.addEventListener('click', function() {
    if (!this.classList.contains('active')) {
      this.classList.add('active');
      switchLeft.classList.remove('active');
      
      // Переносим псевдоэлементы в images-container
      structure.classList.add('hide-pseudo');
      imagesContainer.appendChild(manClone);
      imagesContainer.appendChild(womanClone);
      
      // Запускаем анимацию появления после добавления в DOM
      setTimeout(() => {
        manClone.classList.add('active');
        womanClone.classList.add('active');
      }, 10);
      
      // Анимация фона
      switchBg.style.transform = 'translateX(-10%) scaleX(1.2)';
      setTimeout(() => {
        switchBg.style.left = '50%';
        switchBg.style.transform = 'translateX(0) scaleX(1)';
      }, 10);
    }
  });
});