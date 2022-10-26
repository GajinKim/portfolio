$(document).ready(function () {
  $("a").on("click", (event) => {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        400,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
