export default {
    showNav() {
        const hamburguerBtn = document.querySelector('#hamburguer');
        const mobileNav = document.querySelector('#nav-list');

        hamburguerBtn.addEventListener('click', () => {
            if(mobileNav.style.display === 'block') {
                mobileNav.style.display = 'none';
            }
            else {
                mobileNav.style.display = 'block';
            }
        })
    
    }
}