function getNumber(num){
    var output_1=document.getElementById("output_1");
    output_1.value += num;
    

}
function clearResult(){
    var output_1=document.getElementById("output_1");
    output_1.value= "";

}
function backSpace(){
    var output_1=document.getElementById("output_1")
        output_1= output_1.toString().slice(0, -1)
        printOutput(output_1);
 }

function getResult(){
    var output_1=document.getElementById("output_1");
    output_1.value = eval(output_1.value);

}