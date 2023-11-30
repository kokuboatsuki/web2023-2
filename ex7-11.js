function uru01() {
    var year = document.getElementById('uru1').value;

    if (!year) {
        alert("数字が入力されていません");
        return;
    }

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        alert("うるう年です");
    } else {
        alert("うるう年ではありません");
    }
}
