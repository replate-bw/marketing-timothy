// alert('help')

function burgerDisplay() {
    let x = document.getElementById("burgerMenu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    
}

// function burgerOpen(){
//     let y = document.getElementById("burgerMenu");
//     if (screen.width > 1026){
//         y.style.display==="block"
//     }
// }



window.addEventListener("resize", function(){
    if (screen.width > 926){
        document.getElementById("burgerMenu").style.display==="block"
     }
   
  });