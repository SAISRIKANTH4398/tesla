let lastScrollTop = 0;
const header = document.querySelector('.header')

window.addEventListener('scroll', function(){
    let scrollTop = window.scrollY ;
    if(scrollTop===0){
        header.classList.remove('hidden', 'show')
    }
    else if(scrollTop > lastScrollTop){
        header.classList.remove('show');
        header.classList.add('hidden');
    }else{
        header.classList.remove('hidden');
        header.classList.add('show')
    }
    lastScrollTop = scrollTop <= 0 ? 0:scrollTop
})

function showPage(pageId){
    const pages = document.querySelectorAll('.page')
    pages.forEach(page => {
        page.style.display = 'none'
    })

    const selectedPage = document.getElementById(pageId)
    if(selectedPage){
        selectedPage.style.display = 'block'
    }
}