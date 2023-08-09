function timerStart() {
    // declare variables
    var _a = [document.getElementById('days'), document.getElementById('hours'), document.getElementById('mins'), document.getElementById('secs')], days = _a[0], hours = _a[1], mins = _a[2], secs = _a[3];
    // if the input isn't blank, set the label to that number
    var setNumber = document.getElementById('daySet');
    if (isNaN(setNumber.valueAsNumber)) {
        return 0;
    }
    days.innerHTML = setNumber.value;
    setNumber = document.getElementById('hourSet');
    if (isNaN(setNumber.valueAsNumber)) {
        return 0;
    }
    hours.innerHTML = setNumber.value;
    setNumber = document.getElementById('minSet');
    if (isNaN(setNumber.valueAsNumber)) {
        return 0;
    }
    mins.innerHTML = setNumber.value;
    setNumber = document.getElementById('secSet');
    if (isNaN(setNumber.valueAsNumber)) {
        return 0;
    }
    secs.innerHTML = setNumber.value;
    // timer
    var timer = setInterval(function () {
        // if theres seconds left, tick them down each second. otherwise, take away from other numbers
        if (secs.innerHTML !== '0') {
            secs.innerHTML = String(parseInt(secs.innerHTML) - 1);
        }
        else {
            if (mins.innerHTML !== '0') {
                mins.innerHTML = String(parseInt(mins.innerHTML) - 1);
                secs.innerHTML = '59';
            }
            else if (hours.innerHTML !== '0') {
                hours.innerHTML = String(parseInt(hours.innerHTML) - 1);
                mins.innerHTML = '59';
                secs.innerHTML = '59';
            }
            else if (days.innerHTML !== '0') {
                days.innerHTML = String(parseInt(days.innerHTML) - 1);
                hours.innerHTML = '23';
                mins.innerHTML = '59';
                secs.innerHTML = '59';
            }
            else {
                clearInterval(timer);
            }
        }
    }, 1000);
    return 0;
}
