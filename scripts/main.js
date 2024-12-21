function showSideIcons() {
    const sideBarElement = document.querySelector('.small-sidebar');

    // if ()
    if (sideBarElement.style.display === 'flex') {
        sideBarElement.style.display = 'none';
    }
    else {
        sideBarElement.style.display = 'flex';
    }

}

window.addEventListener('resize', () => {
    if (window.innerWidth > 650) {
        const sideBarElement = document.querySelector('.small-sidebar');
        sideBarElement.style.display = 'none';
    }
})