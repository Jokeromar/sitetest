var effect= new Typed(".multiText",{
    strings : ["Web Developer","Programmer","Software Devloper"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500
})
const hire = document.querySelector('.hireMe');
const email= "https://mail.google.com/mail/u/0/?hl=fr&tf=cm&fs=1&to=omarezarouali70@gmail.com";
hire.addEventListener('click',()=>{
    window.open(url=email,target='blank')
});