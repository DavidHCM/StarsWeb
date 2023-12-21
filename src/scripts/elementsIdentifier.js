const xhr = new XMLHttpRequest();
const isDevice = /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone/i.test(navigator.userAgent);
const pageProgram = document.getElementById('pageProgram');

function getBaseURL() {
    return window.location.origin;
}

pageProgram.addEventListener('click', async () => {
    try {
        const baseURL = getBaseURL();
        if (isDevice)
        {
            window.location.href = `${baseURL}/stargazeM`;
        }
        else
        {
            window.location.href = `${baseURL}/stargazeC`;
        }

    } catch (e) {
        alert('Error de GET: ' + e);
    }
});




