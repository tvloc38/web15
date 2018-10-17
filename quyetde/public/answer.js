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

// axios.get('http://localhost:6969/randomquestion')
// .then(function (response) {
//     console.log(response.data);
//     if (response.data) {
//         document.getElementById('questionContent').innerText = response.data.questionContent;
//     }
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

getRandomQuestion();

function getRandomQuestion() {
  $.ajax({
    url: 'http://localhost:6969/randomquestion',
    type: "GET",
    success: function(response) {
      if(response) {
        console.log(response);
        $('#questionContent').text(response.questionContent);
        $(".answer_btn").data("questionId", response.id);
        // $("#result").data("questionId", response.id);
        $('#result').attr("href", "/question/"+response.id)
      }
    },
    error: function(err) {
      console.log(err);
    }
  });
}

// $("#otherQuestion").on("click", function() {
//   getRandomQuestion();
// })

$('.answer_btn').on("click", function() {
  console.log($(this).data());
  let questionId = $(this).data("questionid")
  $.ajax({
    url: 'http://localhost:6969/answer',
    type: "POST",
    data: $(this).data(),
    success: function(response) {
      if(response.success) {
        window.location.href = "/question/"+questionId;
      }
    },
    error: function(err) {
      console.log(err)
    }
  });
});

// $("#result").on("click", function(){
//   console.log($(this).data());
//   $.ajax({
//       url: "http://localhost:6969/result",
//       type: "POST",
//       data: $(this).data(),
//       success: function(response){
//           if(response.success){
//               window.location.href="/result";
//           }
//       },
//       error: function(err){
//           console.log(err);
//       }
//   })
// })
