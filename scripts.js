setInterval(setClock, 0)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]') 
const secondHand = document.querySelector('[data-second-hand]') 
const miliSecondHand = document.querySelector('[data-miliSecond-hand]') 

function setClock(){
    const currentDate = new Date()
    const miliSecondRatio = currentDate.getMilliseconds() / 1000
    const secondsRatio = (miliSecondRatio + currentDate.getSeconds()) / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes())  / 60
    const hoursRatio = (minutesRatio + currentDate.getHours())  / 12

    setRotation(miliSecondHand, miliSecondRatio)
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()