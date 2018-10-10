// document.getElementById('textarea').oninput = function () {
//     document.getElementById('count').innerHTML = "Con " + (200 - this.value.length) + "/200 ki tu";
// };

// document.getElementById('textarea').onpaste = function () {
//     document.getElementById('count').innerHTML = "Con " + (200 - this.value.length) + "/200 ki tu";
// };

// $(document).ready(function(){
//     $("#textarea").on("paste, drop", 
//         function(e){ 
//             setTimeout(function() {
//             var len = $('#textarea').text().length
//             $("#count").text("Characters left: " + (200 - $(this).val().length));}, 0)
//     });
// });

const maxLength = 200;

document.getElementById('textarea').addEventListener(
    'input',
    function() {
        var remainChar = maxLength - document.getElementById('textarea').value.length;
        document.getElementById('remain').innerHTML = 200 - this.value.length;
    }
);

