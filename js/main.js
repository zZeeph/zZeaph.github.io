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

  // smooth scroll

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()

      const target = document.querySelector(link.hash),
            offsetTop = window.pageYOffset + target.getBoundingClientRect().top

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    })
  })

}