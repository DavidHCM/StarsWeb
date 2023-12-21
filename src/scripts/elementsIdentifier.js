
function identifier()
{
    var isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone/i.test(navigator.userAgent);

    if (isMobile) {
        console.log("User is using a mobile device");
    } else {
        console.log("User is using a computer");
    }
}