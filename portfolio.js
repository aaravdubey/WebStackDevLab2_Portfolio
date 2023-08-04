function messageMe(event) {
  event.preventDefault();
  event.target.reset();
  // return false;
}

const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('a[href^="#"]');
const headerHeight = document.getElementsByTagName("header")[0].offsetHeight;

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByTagName("header")[0].style.padding = "0.5% 15%";
  } else {
    document.getElementsByTagName("header")[0].style.padding = "2.5% 15%";
  }

  const currentScroll = window.scrollY;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (currentScroll >= (sectionTop - 300) && currentScroll < (sectionBottom - 500)) {
      links.forEach(link => link.classList.remove('active'));
      links[index].classList.add('active');
    }
  });
})

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href').substring(1);

    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition = section.getBoundingClientRect().top;
      const offsetPosition = sectionPosition - headerHeight;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});