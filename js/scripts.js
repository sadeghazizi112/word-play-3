const sentencedash = function(userSentence) {
  let array = [];
  console.log(userSentence.length);
  for (let i = 0; i < userSentence.length; i++) {
    let userWord = (userSentence[i]).split("");
    for (let x = 0; x <= userWord.length; x++) {
      if (userWord[x] === "a" || userWord[x] === "e" || userWord[x] === "i" || userWord[x] === "o" || userWord[x] === "u") {
        array.push("-")
      } else {
        array.push(userWord[x]);
      }
    }
  }
  console.log(array.join(" "));
  return array.join(" ");
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault()
    const inputSentence = $("#inputsentence").val().split(" ");
    console.log(inputSentence)
    const outputArray = sentencedash(inputSentence);
    $('ul').append(outputArray)
  });
    // $('wordplay').append();
    // $("#wordplay").show();
  });
