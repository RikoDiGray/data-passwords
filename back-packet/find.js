let input = document.querySelector(".find");
let filterActive = document.querySelectorAll(".checked-item");
let filterContaienr = document.querySelector(".filter-container");
let filterButton = document.querySelector(".filter--find");
let filterText = document.querySelector(".find-to-cast");
let textSide = ["Другой", "Telegram", "Vk", "Steam", "Mail"];
const findText = {
    "Другой" : "pass__other",
    "Telegram" : "pass__other",
    "Steam" : "pass__steam",
    "Vk" : "pass__vk",
    "Mail" : "pass__mail"
}
let i = 0;
let words
let textItems;
let findContainer;
var passTitle = document.querySelector(".pass--title");
function start() {
    textItems = document.querySelectorAll(".text--item");
    findContainer = document.querySelectorAll(".container");
    words = [];
    if(words.length == textItems.length) {
        return false
    } else {
        for(addMain of textItems) {
            words.push(addMain);
        }
    }
}

input.addEventListener("input", () => {
    filterActive.forEach((k) => {
        k.classList.remove("active");
    });
    filterActive[0].classList.add("active");
    let a;
    for(i = 0; i < words.length; i++) {
        a = words[i].textContent.split("Логин: ")[1];
        if(input.value.indexOf(a[i]) > -1) {
            findContainer[i].classList.remove("hidden");
        } else if(input.value.trim() == '') {
            findContainer.forEach((x) => {
                x.classList.remove("hidden");
            })
        } else {
            findContainer[i].classList.add("hidden");
        }
    }
});

setTimeout(() => {
    start();
}, 150);

filterButton.addEventListener("click", () => {
    filterContaienr.classList.toggle("hidden");
    if(filterContaienr.classList[1] == 'hidden') console.log(`Filter container: close.`);
    else console.log(`Filter container: open.`);
});


var a,b,c,d,f;
filterActive.forEach((x) => {
    setTimeout(() => {
        a = document.querySelectorAll("div[class='container other']");
        b = document.querySelectorAll("div[class='container vk']");
        d = document.querySelectorAll("div[class='container steam']");
        z = document.querySelectorAll("div[class='container mail']");
        f = document.querySelectorAll(".container");
    }, 1000);
    x.addEventListener("click", () => {
        filterActive.forEach((k) => {
            k.classList.remove("active");
        });
        x.classList.add("active");
        var c = x.textContent;
        switch(c) {
            case "Все":
                    filterSet(f);
                    filterText.textContent = "Все";
                    passTitle.textContent = `Всего аккаунтов: ${f.length}`;
                break;
            case "Vk":
                    filterSet(b,f);
                    filterText.textContent = "ВКонтакте";
                    passTitle.textContent = `Аккаунтов ВКонтакте: ${b.length}`;
                break;
            case "Steam":
                    filterSet(d,f);
                    filterText.textContent = "Steam";
                    passTitle.textContent = `Аккаунтов Steam: ${d.length}`;
                break;
            case "Mail":
                    filterSet(z,f);
                    filterText.textContent = "Mail";
                    passTitle.textContent = `Аккаунтов Mail: ${z.length}`;
                break;
        }
    }); 
})

function filterSet(visible = undefined, hidden = undefined) {
    if(hidden != undefined) {
        hidden.forEach((x) => {
            x.classList.add("hidden");
        });
    }

    visible.forEach((k) => {
        k.classList.remove("hidden");
    });
}
