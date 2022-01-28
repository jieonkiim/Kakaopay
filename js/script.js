

// // 햄버거 클릭 event 
// const button=()=> {
//     const burger = document.querySelector('.burger');   // burger 클래스 가져오기
//     burger.addEventListener.on('click', ()=> {             // 클릭 하면 !!
//         burger.classList.toggle('toggle');              // toggle 클래스 있으면 제거, 없으면 추가
//     })
// }

// button();


// const burger = document.querySelector('.burger');

// burger.addEventListener('click', (event) => {
//     event.currentTarget.classList.toggle('toggle');
// });

$(document).ready(function() {
    $(".burger").on('click', function() {
        $(this).toggleClass("toggle");
    });
})