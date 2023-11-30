function add10(){
    var cm = document.getElementById('bmi3').value;
    var kg = document.getElementById('bmi4').value;
    var bmi = kg / ((cm / 100) ** 2);
    
    var bmi1 = Math.round(bmi * 10) / 10;

    alert(bmi1)

    if (bmi < 18.5) {
        alert("あなたは低体重です")
    } else if (18.5 <= bmi && bmi < 25) {
        alert("あなたは普通体重です")
    } else {
        alert("あなたは肥満体重です")
    }
}
