document.getElementById("ham").addEventListener("click", function(){

  document.getElementById("nav").style.transform = "translateX(0)";

  document.getElementById("ham").style.display = "none";

  document.getElementById("close").style.display = "flex";

});
document.getElementById("close").addEventListener("click", function(){

  document.getElementById("nav").style.transform = "translateX(100%)";

  document.getElementById("ham").style.display = "flex";

  document.getElementById("close").style.display = "none";

});

document.querySelectorAll('.nav-link').forEach(function(link) {
  link.addEventListener('click', function() {
    
    document.getElementById("nav").style.transform = "translateX(100%)";

    document.getElementById("ham").style.display = "flex";

    document.getElementById("close").style.display = "none";
  });
});