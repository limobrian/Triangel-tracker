

function limo(){
    var a=parseInt(document.getElementById('a').value);
    var b=parseInt(document.getElementById('b').value);
    var c=parseInt(document.getElementById('c').value);

    if (a<=0 || b<=0 || c<=0){
      alert("check your values!");
   }else if (a===b && b===c && c===a) {
      alert(  "Equilateral triangle!");
   }else if (a+b<=c || b+c<=a || a+c<=b) {
      alert("NOT a triangle");
   }else if (a==b || b==c || c==a) {
      alert ( "An isosceles triangle!");
   } else if (!(a+b<=c || b+c<=a || a+c<=b ) && !(a===b && b===c && c===a)) {
      alert("A scalene triangle!");
   }
   else{
      alert("Kindly check your values!")
   }
   }