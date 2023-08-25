let btn =document.querySelectorAll('.p');
let Elements =document.querySelectorAll('.oopproject');
let container=document.getElementsByClassName('projectscontainer');
let botton=document.querySelector(".contactbutton")
let botton2=document.querySelector(".btn")
let formsection=document.querySelector(".formsection")
let wrapper=document.querySelector(".wrapper")
let close=document.querySelector(".close")
let thankyou=document.querySelector(".thankyou")
let thankyou1=document.querySelector(".th")
botton.addEventListener('click',(e)=>{
    formsection.classList.remove('hide');
    wrapper.classList.remove('hide');
    formsection.style.width='98vw';
    formsection.style.zIndex= "50";
})
botton2.addEventListener('click',(e)=>{
    e.preventDefault();
    if(validateForm())
    {
        wrapper.classList.add('hide');
        formsection.classList.add('hide');
        formsection.style.width='0vw';
        formsection.style.zIndex= "-2";
        thankyou.classList.remove('h');
        thankyou1.classList.remove('h');
        setTimeout(()=>{
            thankyou.classList.add('h');
        thankyou1.classList.add('h');
        },1500)
    }
    
})
close.addEventListener('click',(e)=>{
        wrapper.classList.add('hide');
        formsection.style.width='0vw';
        formsection.style.zIndex= "-2";
    
})
function validateForm() {
    const msg = document.getElementById('msg');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Check if any field is empty
    if (name === '' || email === '') {
    msg.innerHTML = 'Please fill out all the fields.';
    return false;
    }

    // Validate the email format using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    msg.innerHTML = 'Invalid email format.';
    return false;
    }

    // If all validations pass, the form can be submitted
    return true;
}

btn.forEach(Element=>{
    Element.addEventListener('click',(e)=>{
        btn.forEach(ele=>{
            ele.classList.remove("active");
        })
        e.target.classList.add("active");
        Elements.forEach(Element=>{
            Element.classList.remove('hide');
        })
        if(e.target.classList.contains('oop'))
        {
            Elements.forEach(Element=>{
                if(!Element.classList.contains('oop'))
                Element.classList.add('hide');
            })
        }
        if(e.target.classList.contains('Dd'))
        {
            Elements.forEach(Element=>{
                if(!Element.classList.contains('Dd'))
                Element.classList.add('hide');
            })
        }
        if(e.target.classList.contains('ds'))
        {
            Elements.forEach(Element=>{
                if(!Element.classList.contains('ds'))
                Element.classList.add('hide');
            })
        }
        if(e.target.classList.contains('fend'))
        {
            Elements.forEach(Element=>{
                if(!Element.classList.contains('fend'))
                Element.classList.add('hide');
            })
        }
    })
    
})
 //that isn't my code i viewed on internet and learn it 
 let sections=document.querySelectorAll('section')
 let links=document.querySelectorAll('header nav a')
 window.onscroll=()=>{
     sections.forEach(section=>{
         let top=window.scrollY;
         let offset =section.offsetTop -86;
         let height =section.offsetHeight;
         let id =section.getAttribute('id');
         if(top>=offset && top< offset+height)
         {
             links.forEach(link=>{
                 link.classList.remove('active');
                 document.querySelector('header nav a[href*='+id+']').classList.add('active');
             })
         }
     })
 }
   // ------------------------------------------------------------------------
   ScrollReveal({ reset: true,distance:'80px',duration:2000,delay:200 });
   ScrollReveal().reveal('.me', { origin:'top' });
   ScrollReveal().reveal('.myimage', { origin:'bottom' });