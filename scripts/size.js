(() => {
    const Blocks = document.querySelectorAll('.goods__size--item');
    const activeClass = 'goods__size--item--active';
    const notActiveClass = 'goods__size--item-none';
  
    Blocks.forEach((block) => {
      block.addEventListener('click', (e) => {
        e.preventDefault();
      if (block.classList.contains(notActiveClass)) {
        return;
      } else {
        block.addEventListener('click', () => {
          Blocks.forEach((item) => 
          item.classList.remove(activeClass));
          block.classList.add(activeClass);
        });
      }
    });
})
  })();