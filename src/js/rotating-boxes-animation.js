generateRotationBoxes();

$(window).resize(function () {
  generateRotationBoxes();
});

function generateRotationBoxes() {
  console.log("hi");
  function repeat() {
    $("#repeating").append($(".rotating.box:first").clone());
  }

  let boxesPerRow = Math.floor(window.innerWidth / 115);
  let boxesPerColumn = Math.floor(window.innerHeight / 115);
  let fill = boxesPerRow * boxesPerColumn - 1;

  for (let i = 1; i < fill + 1; i++) {
    repeat();
  }
}

