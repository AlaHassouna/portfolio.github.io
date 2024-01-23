// about
function show(ch){
    // alert(ch);
    document.getElementById(ch).style.display = 'block';
    document.getElementById(ch+"_more").style.display = 'none';
    document.getElementById(ch+"_less").style.display = 'block';
}
function hide(ch){
    document.getElementById(ch).style.display = 'none';
    document.getElementById(ch+"_more").style.display = 'block';
    document.getElementById(ch+"_less").style.display = 'none';
}


// quizz
// function showResults() {
//     // Get all radio button groups in the form
    
//     const radioGroups = document.querySelectorAll('input[type="radio"]:checked');
    
    

//     // Display the responses (you can customize this part)
//     console.log(responses);
//     alert("Responses: " + JSON.stringify(responses));
// }
function showResults() {
    const radioGroups = document.querySelectorAll('input[type="radio"]:checked');
    let correctCount = 0;
    // Store responses in an object
    const responses = [];
    radioGroups.forEach(radio => {
        const isCorrect = radio.getAttribute('data-correct') === 'true';

        if (isCorrect) {
            correctCount++;

        }else{
            
    
    // Iterate through each radio group and store the selected value
   
        responses.push(radio.name);
    
        }
    });

    console.log('Correct Answers:', correctCount);
    alert('Correct Answers: ' + correctCount);
    alert('wrong answers : '+JSON.stringify(responses))
}








// toggle icon navbar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () =>{

     sections.forEach(sec => {
        let top =window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top<offset + height){
            // active navbar links
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+ ']').classList.add('active')
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }else{
            sec.classList.remove('show-animate')
        }
     });   


    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
    
    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');  
    // animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);


}
