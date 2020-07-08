const myForm = document.timeForm;

function updateTimeZone() {
    const cityName = myForm.cityName;
    const selected = cityName.options[cityName.selectedIndex];
    const offset = selected.value;
    const selectedCity = selected.text;
    let dstAdjust = 0;

    if (myForm.dST.checked) {
        dstAdjust = 60;
    }
    console.log("DST checked! " + dstAdjust);
    updateOutput(selectedCity, offset, dstAdjust)
}

function updateOutput(city, offset, dstAdjust) {
    let now = new Date();
    document.getElementById("spanLocalTime").innerHTML = now.toLocaleString();
    now.setMinutes(now.getMinutes() + now.getTimezoneOffset() + parseInt(offset, 10) + dstAdjust);
    let results = city + "  date and time is " + now.toLocaleString();
    document.getElementById("cityTime").innerHTML = results;
}

myForm.cityName.addEventListener("change", updateTimeZone);
myForm.dST.addEventListener("click", updateTimeZone);

updateTimeZone();