$(document).ready(function(){
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello</li>");
    $("ul#they").prepend("<li>Hello back.</li>");
    $("ul#they").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye</li>");
    $("ul#they").prepend("<li>Goodbye back to you!!</li>");
    $("ul").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me.</li>");
    $("ul#they").prepend("<li>Stop copying ME!</li>");
    $("ul").children("li").first().click(function(){
      $(this).remove();
    });
  });

});
