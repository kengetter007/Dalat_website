document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.list li');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.3 });

    items.forEach(item => {
        observer.observe(item);
    });
});
document.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  document.querySelector(".layer-bg img").style.transform =
    `translateY(${scroll * 0.2}px)`;

  document.querySelector(".layer-mid img").style.transform =
    `translateY(${(scroll * 0.4)}px)`;

  document.querySelector(".layer-front img").style.transform =
    `translateY(${scroll * 0.5}px)`;

  document.querySelector(".dalat-text").style.transform =
    `translateY(${scroll * 1}px)`;
});