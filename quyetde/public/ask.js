const maxLength = 200;

// document.getElementById('textarea').addEventListener(
//     'input',
//     function() {
//         var remainChar = maxLength - document.getElementById('textarea').value.length;
//         document.getElementById('remain').innerHTML = 200 - this.value.length;
//     }
// );

$("#questionContent").on("input", function() {
    var remainChar = maxLength - $("#questionContent").val().length;
    $("#remain").text(remainChar);
})