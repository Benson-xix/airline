// function getVals(){ 
//     var parent = this.parentNode;
//     var slides = parent.getElementsByTagName("input");
//       var slide1 = parseFloat( slides[0].value );
//       var slide2 = parseFloat( slides[1].value );
  
  
//       if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }
    
//       var displayElement = parent.getElementsByClassName("rangeValues")[0];
//           displayElement.innerHTML = " $" + slide1 + "k - $" + slide2 + "k";
  
//   }
  
  
//   window.onload = function(){
//     var sliderDiv = document.getElementsByClassName("range");
//         for( var x = 0; x < sliderDiv.length; x++ ){
//           var sliders = sliderDiv[x].getElementsByTagName("input");
//           for( var y = 0; y < sliders.length; y++ ){
//             if( sliders[y].type ==="range" ){
//               sliders[y].oninput = getVals;
//               sliders[y].oninput();
//             }
//           }
//         }
//   }


function getVals() {
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
    let slide1 = parseFloat(slides[0].value);
    let slide2 = parseFloat(slides[1].value);


    if(slide1 > slide2){
        let tmp = slide2; slide2 = slide1; slide1 = tmp;
    }

    let displayElement = parent.getElementsByClassName("range-values")[0];
    displayElement.innerHTML = "₦" + slide1 + " &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; ₦" + slide2; 
}

window.onload = function(){
let sliderSections = document.getElementsByClassName("range-slider");

for (let x = 0; x < sliderSections.length; x++) {
    let sliders =  sliderSections[x].getElementsByTagName("input");
    

    for(let y = 0; y < sliders.length; y++){
        if(sliders[y].type === "range"){
            sliders[y].oninput = getVals;

            sliders[y].oninput();
        }
    }
}
}

