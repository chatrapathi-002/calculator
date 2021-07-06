        function dis(val){ 
             document.getElementById("result").value+=val 
         } 
         function solve(){ 
             try {
    let x = document.getElementById("result").value 
             let y = eval(x) 
             document.getElementById("result").value = y
}
catch(err){
    alert("Please enter valid expression");
    document.getElementById("result").value = "";
}

         } 
         function clr(){ 
             document.getElementById("result").value = "" 
}
