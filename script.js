function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu>li')
  const tabContent = document.querySelectorAll('.js-tabcontent>section')

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo')

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo') 
    }

    tabMenu.forEach((itemMenu, index) =>{
      itemMenu.addEventListener('click', function(){
        activeTab(index)
      }) 
    }) 
  }
}
initTabNav()

function initAccordionList() {
const accordionList = document.querySelectorAll(' .js-accordion dt')

if(accordionList.length) {
  function activeAccordion() {
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')
  }

  accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion)
})}
}
initAccordionList()

function smoothScrollLinks() {
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    // const topo = section.offsetTop
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth"
    //   })
  }

  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
  linksInternos.forEach ((link) => {
    link.addEventListener('click', scrollToSection)
  })
}
smoothScrollLinks()

function animaScroll() {
  const sections = document.querySelectorAll('.js-scroll')
  const windowMetade = window.innerHeight * 0.7

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - windowMetade
    if(sectionTop <0) {
      section.classList.add('ativo')
    }
  })
window.addEventListener('scroll', animaScroll)
}
animaScroll()
