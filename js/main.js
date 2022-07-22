'use strict';

{

  const nav = document.querySelector('#header');
  const btn = document.querySelector('.toggle-btn');
  const mask = document.querySelector('#mask');

  btn.onclick = () => {
    nav.classList.toggle('open');
  }

  mask.onclick = () => {
    nav.classList.toggle('open');
  }

  // intersection observer api


  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
    });
  }

  const observer = new IntersectionObserver(callback,  {
    threshold: 0.2,
  });

  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });

}