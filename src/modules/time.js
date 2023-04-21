function time(deadline, id) {
  //Time

  function getTimeRemaining(endTime) {
    const timer = Date.parse(endTime) - Date.parse(new Date())
    let days, hours, minutes, seconds

    if (timer >= 0) {
      days = Math.floor(timer / (1000 * 60 * 60 * 24))
      hours = Math.floor((timer / (1000 * 60 * 60)) % 24)
      minutes = Math.floor((timer / (1000 * 60)) % 60)
      seconds = Math.floor((timer / 1000) % 60)
    } else {
      days = 0
      hours = 0
      minutes = 0
      seconds = 0
    }

    return { timer: timer, days, hours, minutes, seconds }
  }

  function getZero(num) {
    if (num >= 0 && num < 10) return `0${num}`
    else return num
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000)

    updateClock()

    function updateClock() {
      const getTime = getTimeRemaining(endtime)

      if (getTime.days <= 0) {
        clearInterval(timeInterval)
      }

      days.innerHTML = getZero(getTime.days)
      hours.innerHTML = getZero(getTime.hours)
      minutes.innerHTML = getZero(getTime.minutes)
      seconds.innerHTML = getZero(getTime.seconds)
    }
  }

  setClock(id, deadline)
  //Time
}

// module.exports = time
export default time
