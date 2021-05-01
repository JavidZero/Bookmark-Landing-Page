/* Navigation */
const navhamburger = document.querySelector(".container .nav .wrapper-nav .flex .nav-hamburger");
const navList = document.querySelector(".container .nav .wrapper-nav .flex .nav-navigation");
const nav = document.querySelector(".container .nav");
const navLogo = document.querySelectorAll(".container .nav .wrapper-nav .flex .nav-logo");

navhamburger.addEventListener('click', ()=>{
    document.querySelector('.container').classList.toggle('open');
    document.querySelector('.container .header').classList.toggle('open');
    navhamburger.classList.toggle('open');
    navList.classList.toggle('open');
    nav.classList.toggle('open');

})

/* Features */
const featureLinks = document.querySelectorAll(".container .features .feature-item-links ul li");
const featureText = document.querySelectorAll(".container .features .feature-items .feature-item");

featureLinks.forEach((fea)=>{
    fea.addEventListener('click',()=>{
        featureLinks.forEach((f)=>{
            f.classList.remove('checked');
        });
        featureText.forEach((text)=>{
            text.classList.remove('checked')
        })
        fea.classList.add('checked');
        featureText[fea.value].classList.add('checked');
        console.log(fea.value);
    })


})

/* Frequently Asked Questions */
const questions = document.querySelectorAll(".container .frequent .frequent-questions .frequent-question ");

questions.forEach((question)=>{
 
    question.addEventListener('click',()=>{
        if(question.classList.contains('open')) {
            question.classList.remove('open');
        }
        else {
            questions.forEach((q)=>{
                q.classList.remove('open');
            });
            question.classList.add('open');
        }
    })
})

/* Form */

const form = document.querySelector(".container .join .wrapper-join .join-form");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var val = form.querySelector("label span input");

    if (validateEmail(val.value)) {
        form.classList.remove("error-email");
    }
    else {
        form.classList.add("error-email");
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}