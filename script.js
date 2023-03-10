const notifications = document.getElementById("amount");
const messages = document.getElementsByClassName("single_message");
const newMessages = document.getElementsByClassName("new");
const readAll = document.getElementById("read_all");
const newDott = document.querySelectorAll(".new span");

notifications.innerText = newMessages.length;



readAll.onclick = () => {
    for (let i = 0; i < messages.length; i++) {
        messages[i].classList.remove("new");
        newDott.forEach(function (e) {
            e.remove();
        })
        notifications.innerText = newMessages.length;
    }
}


for (let i = 0; i < newMessages.length; i++) {
    newMessages[i].onclick = function () {
        messages[i].classList.remove('new');
        newDott[i].remove();
        notifications.innerText = newMessages.length;
    }
}

// another possibility. Just style to none. With eventListener
// for (let i = 0; i < newMessages.length; i++) {
//     newMessages[i].addEventListener('click', function () {
//         messages[i].classList.remove('new');
//         newDott[i].style.display = 'none';
//         notifications.innerText = newMessages.length;
//     })
// }