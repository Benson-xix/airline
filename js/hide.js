

function myFunction1() {
    var x = document.getElementById("range1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction2() {
    var x = document.getElementById("range2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction3() {
    var x = document.getElementById("range3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction4() {
    
    let x = document.getElementById("range4");
    if (x.style.display === "none") {
      x.style.display = "block";
     
    } else{
      x.style.display = "none";
    }
  }

  function myFunction5() {
    var x = document.getElementById("range5");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  const icon = document.querySelectorAll(".icon");
  icon.forEach(item=>{
    console.log(item);
    item.addEventListener("click", () => {
      
      item.classList.toggle("upside-down");
    });
  
  })

 