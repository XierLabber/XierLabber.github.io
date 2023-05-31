let div2 = document.querySelector(".div2");
let div5 = document.querySelector(".div5");

// 5月17日 - 5月31日
let firstDay = 17;
let lastDay = 31;

let curMonth = 5;
let curDay = firstDay;

function getYesterDay(){
    if(curDay === 1){
        return [5, 31]
    }
    return [curMonth, curDay - 1]
}

function getTomorrow(){
    if(curDay === 31){
        return [6, 1]
    }
    return [curMonth, curDay + 1]
}

div2.onclick = function() {
    let div3 = document.querySelector(".div3");
    let div4 = document.querySelector(".div4");
    let div1 = document.querySelector(".target");
    if(div3.textContent === "是第一天啦" || div3.textContent === "不能再往前啦"){
        div3.textContent = "不能再往前啦";
        return;
    }
    [curMonth, curDay] = getYesterDay();
    var a, b;
    [a, b] = getYesterDay()
    if(curDay != firstDay){
        div3.textContent = `2023年${a}月${b}日`;
    } else{
        div3.textContent = "是第一天啦";
    }
    [a, b] = getTomorrow()
    div4.textContent = `2023年${a}月${b}日`;
    let name = `食堂占座率2023-05-${curDay}.html`;
    div1.setAttribute("src", name)
}

div5.onclick = function() {
    let div3 = document.querySelector(".div3");
    let div4 = document.querySelector(".div4");
    let div1 = document.querySelector(".target");
    if(div4.textContent === "是最后一天啦" || div4.textContent === "不能再往后啦"){
        div4.textContent = "不能再往后啦";
        return;
    }
    [curMonth, curDay] = getTomorrow();
    var a, b;
    [a, b] = getTomorrow()
    if(curDay != lastDay){
        div4.textContent = `2023年${a}月${b}日`;
    } else{
        div4.textContent = "是最后一天啦";
    }
    [a, b] = getYesterDay()
    div3.textContent = `2023年${a}月${b}日`;
    let name = `食堂占座率2023-05-${curDay}.html`;
    div1.setAttribute("src", name)
}