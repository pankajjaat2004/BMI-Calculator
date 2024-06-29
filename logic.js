/*function selectOnlyThis(id){
    for(var i=1;i<3;i++){
        document.getElementById('1').checked = false;
    }
    document.getElementById(id).checked=true;
}   */ 
var clicking =new Audio('click.mp3');
function selectOnlyThis(id){
    var myCheckbox = document.getElementsByName("myCheckbox");
    Array.prototype.forEach.call(myCheckbox,function(el){
        el.checked = false;
    });
    id.checked = true;
}

function clearall(){
    clicking.play();
    var Inputs=document.getElementsByTagName('input')
    for(let i=0;i<Inputs.length;i++){
        Inputs[i].value='';
    }
    document.getElementById('output1').innerText='';
    document.getElementById('result1').innerText='';
}
var BMI;
function CalculateResult(){
    clicking.play();
    var Height = document.getElementById('ht').value;
    var Weight = document.getElementById('wt').value;
    Height=(Height**2);
    BMI= (Weight/Height)*10000;
    BMI=Math.round(BMI*10)/10;
    SetValues();
}
function SetValues(){
    document.getElementById('resultout').value=BMI;
    var name=document.getElementById('Name').value+" your BMI is:- ";
    document.getElementById('output1').innerText=name;
    document.getElementById('result1').innerText='Result';
    if(BMI<18.5){
        console.log('1');
        document.getElementById('status').value='Underweight';
    }
    if(BMI>=18.6 && BMI<=24.9){
        console.log('2');
        document.getElementById('status').value='Healthy Weight'
    }
    if(BMI>=25.0 && BMI<=30.0){
        console.log('3');
        document.getElementById('status').value='Overweight'
    }
    if(BMI>30.0){
        console.log('4');
        document.getElementById('status').value='Obesity'
    }
}



