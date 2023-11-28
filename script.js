const Cookies = document.querySelector('.cookies');
const cookiesBanner = document.getElementById('cookieBanner');

localStorage.removeItem('cookieConsent');

if (localStorage.getItem('cookieConsent') === 'Accepted') {
    cookiesBanner.style.display = 'none';
} else {
    Cookies.classList.add('cookies-enter');
}

function agree() {
    localStorage.setItem('cookieConsent', 'Accepted');
    Cookies.classList.add('cookies-leave');
    setTimeout(() => {
        cookiesBanner.style.display = 'none';
    }, 900);
}

function disagree() {
    alert("Cookies Are Necessary For The Proper Functioning Of The Website.");
}