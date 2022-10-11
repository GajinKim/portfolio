generateRotationBoxes();

$(window).resize(function () {
  generateRotationBoxes();
});

function repeatBoxes() {
  $("#repeating").append($(".rotating.box:first").clone());
}

function generateRotationBoxes() {
  let boxesPerRow = Math.floor(window.innerWidth / 115);
  let boxesPerColumn = Math.floor(window.innerHeight / 115);
  let fill = boxesPerRow * boxesPerColumn - 1;

  for (let i = 1; i < fill + 1; i++) {
    repeatBoxes();
  }
}

