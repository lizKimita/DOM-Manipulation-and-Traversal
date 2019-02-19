$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why Hello there!</li>");
    $("ul#user").children("li").first().click(function() {
      alert('hi');
      $("ul#webpage").children("li").first().click(function(){
        $(this).remove();
      });
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    $("li").css("background-color", "green");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
      $("ul#webpage").children("li").first().click(function(){
        alert("Goodbye, dear user!");
      });
    });

  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense</li>");
    $("ul#user").children("li").first().click(function() {
      alert('Stop copying me!');
      $("ul#webpage").children("li").first().click(function(){
        alert("pardon me. I meant no offense!");
      });
    });
  });

});
