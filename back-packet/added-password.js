/* priority item */
let dataIndex = 0;
/* functions */

//create new Element (pass,login,site)
function create(date, defName, content, login, password, site, title = undefined) {
    const container = document.createElement("div");
    container.setAttribute("data-elem", dataIndex)
    container.classList.add("container");
    container.classList.add(defName);
    toCreate.prepend(container);

    const dateItem = document.createElement("span");
    dateItem.innerHTML = `<span title='Дата добавлениея' class='date-of-create'>${date}</span>`;

    container.prepend(dateItem);

    const passItem = document.createElement("div");
    passItem.setAttribute("class", `pass pass__${defName}`);
    container.append(passItem);

    const titleItem = document.createElement("h1");
    titleItem.classList.add("cont-type");
    titleItem.textContent = content;
    passItem.prepend(titleItem);

    const ulMenuItem = document.createElement("ul");
    passItem.append(ulMenuItem);

    const liTxtItemName = document.createElement("li");
    liTxtItemName.classList.add("text--item");
    liTxtItemName.innerHTML = `Логин: <span class="text--item-select">${login}</span>`
    ulMenuItem.prepend(liTxtItemName);

    const liTxtItemPassword = document.createElement("li");
    liTxtItemPassword.innerHTML = `Пароль: <span class="text--item-select">${password}</span>`
    ulMenuItem.append(liTxtItemPassword);

    if(title != undefined) {
        const titleInContainer = document.createElement("p");
        titleInContainer.textContent = `Описание: ${title}`
        ulMenuItem.append(titleInContainer);
    }


    if (selectedItem === 4 && site !== undefined) {
        const liTxtItemName = document.createElement("li");
        liTxtItemName.innerHTML = `Site: <a href='${site}' target='_blank'>${site}</a>`
        ulMenuItem.prepend(liTxtItemName);
    }
    localStorage.setItem("status", "ok");
    dataIndex++;
}
//create alert box for keypress
function eventKeyPress(code) {
    const item = document.createElement("div");
    item.textContent = `Нажата клавиша: ${key[code]}`
    item.classList.add("alert");
    document.body.prepend(item);

    setTimeout(()=>{
        item.classList.add("re-hide")
    });
    setTimeout(()=>{
        item.classList.add("remove")
    }, 2000);
    setTimeout(()=>{
        item.remove()
    }, 2500);
}
//disabled error
function enabledMode() {
    statusDis.forEach(statusDis=>{
        statusDis.toggleAttribute("disabled")
    });

    statusEn.forEach(statusEn=>{
        statusEn.toggleAttribute("disabled")
    });
}

/* variable */
let selectedItem = 4;
const sel = document.querySelector("select");
const removeAttr = document.querySelectorAll(".selected-type");
const checkedSel = document.querySelectorAll("option");
const toCreate = document.querySelector(".pass-list");
const newPerson = document.querySelector(".add");
const container = document.querySelector(".container-added");
const close = document.querySelector(".close");
const scriptLength = document.querySelectorAll("script");
const statusDis = document.querySelectorAll("input[data-status='disabled']");
const statusEn = document.querySelectorAll("input[data-status='enabled']");
const other__ = document.querySelector(".other__");
const other__off = document.querySelectorAll(".off");
const selAdd = document.querySelector(`input[data-throw-index='${selectedItem}']`)

//objects
const key = {
    27: "Escape"
}
const errorType = {
    error: 0,
    warn: 0
}

/* events */
sel.addEventListener("change", ()=>{
    for (i = 1; i < checkedSel.length; i++) {
        if (checkedSel[i].selected) {
            data[0].type.steam = 0;
            data[0].type.vk = 0;
            data[0].type.mail = 0;
            data[0].type.other = 0;
            data[0].type[checkedSel[i].getAttribute("data-id")] = 1;
            selectedItem = Number(checkedSel[i].getAttribute("data-index"));
        }
    }
    checkedSel.forEach((removeAttr)=>{
        removeAttr.removeAttribute("select");
    });
    removeAttr.forEach((removeAttr)=>{
        removeAttr.removeAttribute("checked");
    });
    document.querySelector(`.type_${selectedItem}`).setAttribute("checked", "");
    if (selectedItem == 1) {
        statusEn.forEach((statusEn)=>{
            if (statusEn.getAttribute("disabled") != null || statusEn.getAttribute("disabled") != undefined) {
                enabledMode()
            }
        });
    } else {
        statusDis.forEach((statusDis)=>{
            if (statusDis.getAttribute("disabled") != null || statusDis.getAttribute("disabled") != undefined) {
                enabledMode()
            }
        });
    }
});

//press to create box
newPerson.addEventListener("click", ()=>{
    container.classList.toggle("visible")
});

//close box
close.addEventListener("click", ()=>{
    container.classList.toggle("visible")
});

//close box (2)
container.addEventListener("click", (event)=>{
    if (event.target.classList[0] == "container-added") {
        event.target.classList.toggle("visible")
    }
});

other__.addEventListener("click", ()=>{
    statusEn.forEach((statusEn)=>{
        if (statusEn.getAttribute("disabled") != null || statusEn.getAttribute("disabled") != undefined) {
            enabledMode()
        }
    });
}, {once: false});

for (fast of other__off) {
    fast.addEventListener("click", ()=>{
        statusDis.forEach((statusDis)=>{
            if (statusDis.getAttribute("disabled") != null || statusDis.getAttribute("disabled") != undefined) {
                enabledMode()
            }
        });
    }, {once: false});}

window.addEventListener("keyup", (event)=>{
    if (container.classList[1] !== undefined && event.keyCode === 27) {
        container.classList.remove("visible");
        eventKeyPress(event.keyCode);
        return true
    }
});

window.addEventListener("load", ()=>{
    if (document.readyState == "complete") {
        console.warn("Loading success!");
    }
    console.warn("data/base.json load");
    console.warn(`error: ${errorType.error}`);
    console.warn("jQuery length: 1");
    console.warn(`Script length: ${scriptLength.length + 2}`);
});