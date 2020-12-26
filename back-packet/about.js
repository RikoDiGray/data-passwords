let take__password = prompt("Send Password");
function notHaveAccess() {
    document.write('Вы ввели неверно пароль.')
    setTimeout(() => {
        location.reload();
    }, 4000);
} 
window.addEventListener("load", ()=>{
    var passCount = document.querySelector(".pass-length");
    var notifIcon = document.querySelector(".norif-bar i");
    var notifContainer = document.querySelector(".notifications");
    var notifContainerClose = document.querySelector(".close-notif");
    var notifIconCount = document.querySelector(".active");
    var newItem = document.querySelectorAll("strong.new-item");
    var dateOfOpen = document.querySelectorAll(".date-of-send");
    var getIndexOf = localStorage.getItem("date--side");
    function removed() {
        notifContainer.classList.toggle("visible");
        notifIconCount.classList.add("remove--item");
    }
    notifIcon.addEventListener("click", () => {
        removed()
        localStorage.setItem("side", true);
        if(getIndexOf == null) {
            localStorage.setItem("date--side", new Date().toLocaleString());
        }
        if(localStorage.getItem("side") !=null && notifContainer.classList[1] !== "visible") {
            newItem.forEach((f) => {
                f.remove();
            });
        }
    });
    notifContainerClose.addEventListener("click", () => {
        notifContainer.classList.toggle("visible");
        newItem.forEach((f) => {
            f.remove();
        });
    });
    if(localStorage.getItem("side") !=null) {
        notifIconCount.classList.add("remove--item");
        dateOfOpen.forEach((x) => {
            x.textContent = getIndexOf;
        });
        newItem.forEach((f) => {
            f.remove();
        });
    } else {
        dateOfOpen.forEach((x) => {
            x.textContent = new Date().toLocaleString();
        });
    }
    if(take__password == data[0].link.password) {
        switch(location.href) {
            case "http://127.0.0.1:5500/":
            case "http://127.0.0.1:5500/index.html":
                ffmdfmdjdsajsdjdjs();
                const addSrc = document.createElement("script");
                addSrc.src = "back-packet/find.js";
                document.body.prepend(addSrc);
                break;
            default:
                notHaveAccess();
                break;
        }
    } else {
        notHaveAccess();
    }
    let init = setTimeout(() => {
        passCount.textContent = findContainer.length;
    }, 300);
});