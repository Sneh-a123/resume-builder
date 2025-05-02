const images = document.querySelectorAll('.template-img');

  images.forEach(img => {
    img.addEventListener('click', () => {
      images.forEach(i => i.classList.remove('ring-4', 'ring-blue-500'));
      img.classList.add('ring-4', 'ring-blue-500');
    });
  });