function mes() {
    alert("３秒経ちました！")
}
function hyoji13() {
    var str13 ="一文字ずつ表示します。";
    var cnt13 = document.timer13.moji13.value.length;
    if (cnt13 < 11) {
        document.timer13.moji13.value = str13.substr(0,cnt13+1);
    } else {
        document.timer13.moji13.value = "";}
        setTimeout("hyoji13()",1000);
    }
