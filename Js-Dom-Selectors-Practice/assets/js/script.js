// console.log(document);



// let heads = document.getElementsByTagName("h3")
// console.log(heads);



// for (const item of heads) {
//     console.log(item);
// }



// let head = document.getElementsByClassName("test");
// console.log(head);
// for (const item of head) {
//     console.log(item);
// }


// let head = document.getElementById("test");
// console.log(head);



// let head = document.querySelector(".test");
// console.log(head);



// let h3 = document.querySelector("#h3 p")
// console.log(h3);



// let h3 = document.querySelectorAll("#h3 p")
// for (const item of h3) {
//     console.log(item);
// }



// let news = document.querySelector("#list-news .test ul");
// console.log(news);



// let elem = document.querySelector(".test");
// elem.className="new-name"
// elem.classList.remove("test2");
// elem.classList.add("new-class");
// console.log(elem);

// if (elem.classList.contains("test")) {
//     elem.classList.remove("test2")
//     console.log("Variydi sildim");
// }else{
//     console.log("Yoxdur");
// }

// let span = document.querySelector("#list-news .small-text");
// console.log(span.innerText);
// console.log(span.innerHTML);
// span.innerHTML = "<b>Deyisdim</b>"

// let addBtn = document.querySelector(".add-btn");

// function clickBtn(){
//     alert("Added")
// }

// addBtn.onclick=function(){
//     clickBtn()
// }

// function test(){
//     alert("Salamlar");
// }
// addBtn.addEventListener("click",function(){
//     console.log("Salam");
// })

// addBtn.addEventListener("click",function(){
//     console.log("Sagol");
// })


// let addBtn = document.querySelector(".add-btn");
// let removeBtn = document.querySelector(".remove-btn");
// let head = document.querySelector("h1");
// let text = document.querySelector(".text-area")




// addBtn.addEventListener("click", function () {
//     head.innerText = text.value;
//     if (text.value == "") {
//         alert("Can't be empty")
//     }
//     if (head.classList.contains("active-head")) {
//         head.classList.remove("active-head")
//         head.classList.add("inActive-head")
//     }
//     text.value = "";
// })



// removeBtn.addEventListener("click", function () {
//     head.innerText = text.value;
//     if (text.value == "") {
//         alert("Can't be empty")
//     }
//     if (head.classList.contains("inActive-head")) {
//         head.classList.remove("inActive-head")
//         head.classList.add("active-head")
//     }
//     text.value = "";
// })




// let addBtn = document.querySelector(".add-btn");
// let removeBtn = document.querySelector(".remove-btn");
// let head = document.querySelector("h1");
// let text = document.querySelector(".text-area");
// let ul = document.querySelector(".list-area");




// addBtn.addEventListener("click", function () {
//     // debugger
//     if (text.value == "") {
//         alert("Can't be empty");
//         return
//     }
//     let li = document.createElement("li");
//     li.innerText = text.value;
//     let icon = document.createElement("i");
//     icon.classList.add("fa-solid");
//     icon.classList.add("fa-trash-can");

//     li.classList.add("list-group-item");
//     li.classList.add("w-25");
//     li.style.border = "2px solid red";
//     li.style.cursor = "pointer";
//     icon.style.float = " right"



//     ul.append(li);
//     li.append(icon);



//     // ul.innerHTML+=`<li class="list-group-item">${text.value}</li>`


//     // text.value = "";


//     icon.onclick = function () {
//         li.remove();
//     }
// })

