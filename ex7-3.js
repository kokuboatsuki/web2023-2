function add3(){
    var x = document.getElementById('bmi1').value;
    var y = document.getElementById('bmi2').value;
    alert(Math.round(Number(y) / (Number((x / 100)**2))*10)/10);
}
