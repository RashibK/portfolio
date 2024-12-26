function showSideIcons() {
    const sideBarElement = document.querySelector('.small-sidebar');

    // if ()
    if (sideBarElement.style.display === 'flex') {
        sideBarElement.style.display = 'none';

        const spanFirstLineElement = document.querySelector('.line1');
        spanFirstLineElement.style.transform = 'rotate(0deg)';

        const spanThirdLineElement = document.querySelector('.line3');
        spanThirdLineElement.style.transform = 'rotate(0deg)';


        const spanSecondLineElement = document.querySelector('.line2');
  
        spanSecondLineElement.style.display = 'flex';
        spanSecondLineElement.style.transition = '0.8s ease-out';

    }
    else {
        sideBarElement.style.display = 'flex';
        const spanFirstLineElement = document.querySelector('.line1');
        spanFirstLineElement.style.transform = 'rotate(50deg)';
        // spanFirstLineElement.style.transition-duration = '1s';

        const spanThirdLineElement = document.querySelector('.line3');
        spanThirdLineElement.style.transform = 'rotate(-50deg)';

        const spanSecondLineElement = document.querySelector('.line2');

        spanSecondLineElement.style.display = 'none';
        spanSecondLineElement.style.transition = '0.8s ease-out';
    }


    

}

window.addEventListener('resize', () => {
    if (window.innerWidth > 650) {
        const sideBarElement = document.querySelector('.small-sidebar');
        sideBarElement.style.display = 'none';
    }
})