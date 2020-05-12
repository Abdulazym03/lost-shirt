(function() {
    const circleButtons = document.querySelectorAll('.circle-btn__item');
    const tshirts = document.querySelectorAll('.goods__item');
    const visiblePic = 'tsherts__item--visible';
  
    circleButtons.forEach((button) => {
      button.addEventListener('click', () => {
        let colorPick = button.getAttribute('data-filter');
        let colorTshirt = document.querySelector(`.${colorPick}`)
        tshirts.forEach((tshirt) => {
          tshirt.classList.remove(visiblePic);
          colorTshirt.classList.add(visiblePic);
        });
      });
    });
  })();