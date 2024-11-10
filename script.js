const navigation = document.getElementById('navigation');
const navLinks  = document.getElementById('nav-links');
const openIcon  = document.getElementById('open-icon');
const closeIcon = document.getElementById('close-icon');

navigation.addEventListener('click', toggleBar);


function toggleBar(e){
    if(e.target.classList.contains('open-icon')){
        // console.log('this is working');

        e.target.style.display = 'none';
        closeIcon.style.display = 'block';
        navLinks.style.display = 'block';
    
    } else if(e.target.classList.contains('close-icon')) {
        e.target.style.display = 'none';
        openIcon.style.display = 'block';
        navLinks.style.display = 'none';
     }
}