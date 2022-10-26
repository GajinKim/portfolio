let previousScrollPosition = window.pageYOffset;

window.onscroll = () => {
  let currentScrollPosition = window.pageYOffset;

  previousScrollPosition > currentScrollPosition
    ? (document.getElementById("navbar").style.top = "0")
    : (document.getElementById("navbar").style.top = "-15vh");

  previousScrollPosition = currentScrollPosition;
};
