document.addEventListener("DOMContentLoaded", function() {
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const container = document.querySelector('.container');
  const search = document.querySelector('.search');
  const btn = document.querySelector('.btn');
  const input = document.querySelector('.input');

  if (open && close && container) {
    open.addEventListener('click', () => container.classList.add('show-nav'));
    close.addEventListener('click', () => container.classList.remove('show-nav'));
  } else {
    console.error("One or more elements with the IDs 'open' or 'close' or class 'container' not found.");
  }

  if (search && btn && input) {
    btn.addEventListener('click', () => {
      search.classList.toggle('active');
      input.focus();
    });
  } else {
    console.error("One or more elements with the classes 'search', 'btn', or 'input' not found.");
  }

  const panels = document.querySelectorAll('.panel');
  const progress = document.getElementById('progress');
  const circles = document.querySelectorAll('.circle');

  panels.forEach((panel, index) => {
    panel.addEventListener('click', () => {
      removeActiveClasses();
      panel.classList.add('active');
      updateProgress(index);
    });
  });

  function removeActiveClasses() {
    panels.forEach(panel => {
      panel.classList.remove('active');
    });
  }

  function updateProgress(index) {
    const width = (index / (panels.length - 1)) * 100 + '%';
    progress.style.width = width;
    updateCircles(index);
  }

  function updateCircles(index) {
    circles.forEach((circle, idx) => {
      if (idx <= index) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });
  }
});
