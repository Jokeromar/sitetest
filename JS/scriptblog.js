// JS Just for theMain blog

let path = window.location.pathname;
let page = path.split("/").pop();

let ul = document.querySelector("ul")

for (let i = 0 ; i < ul.children.length;i++)
{ 
    if(page == ul.children[i].children[0].getAttribute("href"))
    {
        ul.children[i].children[0].style.color = "#ffc825";
        
        
    }
    else
    {
        if(page == "Blog.html")
        {   
            if(window.scrollY > 0)
            {
                ul.children[i].children[0].style.color = "#e7ecff";
            }
            else 
            {
                ul.children[i].children[0].style.color = "#e7ecff";
            }
        }
        else
        {
            ul.children[i].children[0].style.color = "#e7ecff";
        }
    }
}
window.addEventListener("scroll", function() {
    let nav = document.querySelector("nav");
    nav.classList.toggle("blog",window.scrollY > 0);
    if(page == "Blog.html")
    {
        nav.classList.toggle(window.scrollY > 0);
    }
}
)
//blog 
$(document).ready(function() {
    $('.filter-item').click(function() {
        const value= $(this).attr('data-filter');
        if (value == 'all') {
            $('.post-box').show('1000');
        }
        else{
            $('.post-box').not('.'+value).hide('500');
            $('.post-box').filter('.'+value).show('500');
        }
    });
    //remove hover from old selection
    $('.filter-item').click(function() {
        $(this).addClass('active-filter').siblings().removeClass('active-filter');
    });
});

const telegram = document.querySelector('.telegram');
const twitter = document.querySelector('.twitter');
const whatsapp = document.querySelector('.whatsapp');
const hrl= location.href;
const message= 'This website Blog have great articles on features technologies';
const telegramAPI = "https://t.me/share/url?url={https://c0rebrains.github.io/Blogs/}&text={This website Blog have great articles on features technologies}";
const twitterAPI =   'https://twitter.com/intent/tweet?text=This website Blog have great articles on features technologies https://c0rebrains.github.io/Blogs/' ;
const whatsappAPI = 'whatsapp://send?text=This website Blog have great articles on features technologies https://c0rebrains.github.io/Blogs/';

telegram.addEventListener('click',()=>{
    window.open(url=telegramAPI,target='blank')
});

twitter.addEventListener('click',()=>{
    window.open(url=twitterAPI,target='blank')
});

whatsapp.addEventListener('click',()=>{
    window.open(url=whatsappAPI,target='blank')
});


/////////////////////////////





const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else 
        {
            entry.target.classList.remove('show')
        }
    })
})




let hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el)=>observer.observe(el))

let titleHiddenElements = document.querySelectorAll(".title-hidden")
titleHiddenElements.forEach((el)=>observer.observe(el))

