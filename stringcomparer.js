function min(){
    var x = document.getElementById("input1").value;
    var y = document.getElementById("input2").value;
    var l = x.length;
    var k = y.length;
    
 document.getElementById("result").innerHTML = Math.min(l,k);

}