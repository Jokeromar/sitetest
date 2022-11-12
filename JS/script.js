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
                ul.children[i].children[0].style.color = "#172317";
            }
            else 
            {
                ul.children[i].children[0].style.color = "#f8f9fa";
            }
        }
        else
        {
            ul.children[i].children[0].style.color = "#212529";
        }
    }
}


window.addEventListener("scroll", function() {
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky",window.scrollY > 0);
    if(page == "Blog.html")
    {
        nav.classList.toggle("font-color",window.scrollY > 0);
    }
}
)




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

//email msg 
// const form = document.querySelector('.contact_form');

// function sendMSG(e){
//     e.preventDefault();


// const nameuser = document.getElementById('userName').value;
//  const     nameemail = document.getElementById('InputEmail').value;
//  const     YourMSG = document.getElementById('YourMSG').value;
// Email.send({
//     SecureToken : "763c0d50-bfe8-47f3-bca8-9f144f6982b7",
//     To : 'let.corebrains@gmail.com',
//     From : nameemail,
//     Subject : "Contact From "+ nameuser,
//     Body :YourMSG
// }).then(
//   message => alert('message')
// );

// form.addEventListener('submit',sendMSG)

// }  

// let TextMSG = 'Name User: ' +nameuser+ '<br/> Email: ' +nameemail+ '<br/> Message: '+ YourMSG + '<br/>' 
    
//     Email.send({
//     Host : "smtp.gmail.com",
//     Username : "let.corebrains@gmail.com",
//     Password : "fziqqiocghqekili",
//     To : 'let.corebrains@gmail.com',
//     From : nameemail,
//     Subject : "",
//     Body : TextMSG
// }).then(
//   alert('Your msg have been sent')
// );