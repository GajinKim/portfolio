generateRotationBoxes();

$(window).resize(function() {generateRotationBoxes()});

function generateRotationBoxes() {
  console.log('hi'); 
  function repeat() {
    $("#repeating").append($(".rotating.box:first").clone());
  }

  let fill = Math.floor(
    (window.innerHeight * window.innerWidth) /
      ($(".rotating.box:first").width() * $(".rotating.box:first").height())
  );

  for (let i = 1; i < fill + 1; i++) {
    repeat();
  }
}
