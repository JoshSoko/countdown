function timerStart() {
    setInterval(function () {
        var timer = document.getElementById('timer');
        if (timer.innerHTML == "hello") {
            timer.innerHTML = "goodbye";
            console.log("goodbye");
        }
        else {
            timer.innerHTML = "hello";
            console.log("hello");
        }
    }, 1000);
}
