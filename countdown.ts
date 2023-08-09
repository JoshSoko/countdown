function timerStart() {
    // declare variables
    let [days, hours, mins, secs] = [document.getElementById('days'), document.getElementById('hours'), document.getElementById('mins'), document.getElementById('secs')];

    // if the input isn't blank, set the label to that number
    let setNumber = (<HTMLInputElement>document.getElementById('daySet'));
    if (isNaN(setNumber.valueAsNumber)) {
        return 0;
    }
    days.innerHTML = setNumber.value;

    setNumber = (<HTMLInputElement>document.getElementById('hourSet'));
    if (isNaN(setNumber.valueAsNumber)) {
        return 0;
    }
    hours.innerHTML = setNumber.value;

    setNumber = (<HTMLInputElement>document.getElementById('minSet'));
    if (isNaN(setNumber.valueAsNumber)) {
        return 0;
    }
    mins.innerHTML = setNumber.value;

    setNumber = (<HTMLInputElement>document.getElementById('secSet'));
    if (isNaN(setNumber.valueAsNumber)) {
        return 0;
    }
    secs.innerHTML = setNumber.value;

    // timer
    const timer = setInterval(() => {
        
        // if theres seconds left, tick them down each second. otherwise, take away from other numbers
        if (secs.innerHTML !== '0') {
            secs.innerHTML = String(parseInt(secs.innerHTML) - 1);
        } else {
            if (mins.innerHTML !== '0') {
                mins.innerHTML = String(parseInt(mins.innerHTML) - 1);
                secs.innerHTML = '59';
            } else if (hours.innerHTML !== '0') {
                hours.innerHTML = String(parseInt(hours.innerHTML) - 1);
                mins.innerHTML = '59';
                secs.innerHTML = '59';
            } else if (days.innerHTML !== '0') {
                days.innerHTML = String(parseInt(days.innerHTML) - 1);
                hours.innerHTML = '23';
                mins.innerHTML = '59';
                secs.innerHTML = '59';
            } else {
                clearInterval(timer);
            }
        }
        

    }, 1000);

    return 0;
}