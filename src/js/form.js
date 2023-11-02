const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const span = document.querySelectorAll('.span-required');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     nameValidate();
//     emailValidate();
//     numberValidate();
//     menssageValidate();


// });

function spanError(index) {
    campos[index].style.border = '2px solid #F52E2E'
    span[index].style.display = 'block'
}
function removeError(index) {
    campos[index].style.border = '2px solid #00C22B';
    span[index].style.display = 'none';
}
// function nameValidate() {
//     if (campos[0].value.length < 3) {
//         spanError(0);
//     } else {
//         removeError(0);
//     };
// };

// function numberValidate() {
//     if (campos[2].value.length < 8) {
//         spanError(2);
//     } else {
//         removeError(2);
//     };
// };

// function emailValidate() {
//     if (!emailRegex.test(campos[1].value)) {
//         spanError(1);
//     } else {
//         removeError(1);
//     };
// };
// function menssageValidate() {
//     if (campos[3].value.length < 15) {
//         spanError(3);
//     } else {
//         removeError(3);
//     };
// };







