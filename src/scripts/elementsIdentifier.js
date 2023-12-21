const xhr = new XMLHttpRequest();
const isDevice = /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone/i.test(navigator.userAgent);
const pageProgram = document.getElementById('pageProgram');


function getBaseURL() {
    return window.location.origin;
}

pageProgram.addEventListener('click', () =>
{
    const baseURL = getBaseURL();
    window.location.href = `${baseURL}/stargaze`;
});


