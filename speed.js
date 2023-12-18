function speedofCar (speed) {
    if (speed < 70){
    return "Ok"
    }
    else if (speed > 70) {
    let demeritPoints = (speed - 70)/5
    return "Points: " + demeritPoints
    }

}
function LicenceSuspended () {
    let demeritPoints = speedofCar ()
    if (demeritPoints > 12 )
    return "LicenceSuspended"
}