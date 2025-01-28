import logo1 from '../assets/logo/logo_1.png';
import logo2 from '../assets/logo/logo_2.png';
import face from '../assets/logo/face.png';


export const stickyScrollHandler = (topbar, mobileWidth) => {
    const topbarOffset = topbar.offsetTop;
    
    if (topbar){
        const topTopbar = topbar.children[0];
        const bottomTopbar = topbar.children[1];
        const logo = bottomTopbar.children[0].children[0].children[0];
        const navbarLinks = bottomTopbar.children[1].children[0].children[0];

        //effect while scroll for first time
        if (window.scrollY > topbarOffset){
            if (window.innerWidth <= 767){
                logo.src = face;
                topbar.style.backgroundColor = '#eeeeee00';
                topTopbar.style.display = 'none';
                bottomTopbar.style.backgroundColor = '#74747480';
                navbarLinks.style.color = 'white';
            }
            else {
                logo.src = logo2;
                topbar.style.backgroundColor = '#eeeeee00';
                topTopbar.style.display = 'none';
                bottomTopbar.style.backgroundColor = '#74747480';
                navbarLinks.style.color = 'white';
            }
        }
        else {
            if (window.innerWidth <= 767){
                logo.src = face;
                topbar.style.backgroundColor = '#eeeeee00';
                topTopbar.style.display = 'none';
                bottomTopbar.style.backgroundColor = '#74747480';
                navbarLinks.style.color = 'rgb(77, 77, 77)';
            }
            else {
                logo.src = logo1;
                topbar.style.backgroundColor = '#eeeeee';
                topTopbar.style.display = 'flex';
                bottomTopbar.style.backgroundColor = 'white';
                navbarLinks.style.color = 'rgb(77, 77, 77)';
            }
        }
    }
};

export const logoChangeHandler = (topbar) => {
    const maxWidth = 767;
    const topbarOffset = topbar.offsetTop;
    const logo = topbar.children[1].children[0].children[0].children[0];

    if (window.innerWidth <= maxWidth){
        logo.src = face;
    }
    else {
        if (window.scrollY > topbarOffset){
            logo.src = logo2;
        }
        else {
            logo.src = logo1
        }
    }
}