// JavaScript for adding hover animation to images
document.querySelectorAll('.baby-maya-img').forEach(img => {
    img.addEventListener('mouseover', () => {
      img.classList.add('shake');
    });
    img.addEventListener('mouseleave', () => {
      img.classList.remove('shake');
    });
  });
  