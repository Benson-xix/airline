
// dropdown

// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }



// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown");
//     var i;
   
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// } 

// document.getElementById("dropbtn").onclick=function(display){
    
//   var display = document.getElementById('myDropdown');
  

// if (display.style.display === '') {
//   display.style.display = 'none';
  
// }else{
//   display.style.display = '';

//   } 

// };

document.getElementById("dropbtn").onclick = function() {
  var display = document.getElementById('myDropdown');

  if (display.style.display === '') {
    display.style.display = 'none';
  } else {
    display.style.display = '';
  } 
};

document.getElementById("dropbtn2").onclick = function() {
  var display = document.getElementById('myDropdown2');

  if (display.style.display === '') {
    display.style.display = 'none';
  } else {
    display.style.display = '';
  } 
};


var button = document.getElementsByClassName("end")[0];


button.onclick = function () {
  myDropdown.style.display = "none"
};

var button = document.getElementsByClassName("end1")[0];

button.onclick = function () {
  myDropdown2.style.display = "none"
}

//modal

document.getElementById("showdiv").onclick=function(show) {
  var show = document.getElementById('showndiv')

  if(show.style.display === '') {
    show.style.display = 'none';
  }else {
    show.style.display = '';
  }
};


var img = document.getElementsByClassName("close")[0];

img.onclick = function () {
showndiv.style.display = "none"
};

//

var img = document.getElementsByClassName("cancel")[0];
img.onclick = function () {
depart.style.display = "none"
};


// modal

// var modal = document.getElementById("modal");

// var div = document.getElementById("changemodal");

// var img = document.getElementsByClassName("close")[0];

// div.onclick = function() {
//   modal.style.display = "block";
// }

// img.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if(event.target == modal) {
//     modal.style.display = 'none'
//   }
// }


