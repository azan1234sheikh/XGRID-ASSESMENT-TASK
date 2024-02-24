
// window.addEventListener('scroll', function(event){
//     if(window.pageXOffset > 150){
//         document.body.style.background = "red";
//     }
//     else{
//         document.body.style.background = "white";
//     }
// });
// alert("kesa hai...!");
// document.body.style.background = "red";


     let x = document.getElementById("input1");
     x.addEventListener('focus',myfocusfn);
     x.addEventListener('blur',myblurfn);
     function myfocusfn(){
        x.style.background ="blue";
     }
     function myblurfn(){
        x.style.background = "white";
     }
     alert("azan");
 

      var myvar;
     console.log("myvar");

     document.createElement('div');