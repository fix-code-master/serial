function slider({
  container,
  slide,
  nextArrow,
  prevArrow,
  totalCounter,
  currentCounter,
  wrapper,
  field,
}) {
  // Slider
  // Hard version start
  const slides = document.querySelectorAll(slide),
    next = document.querySelector(nextArrow),
    prev = document.querySelector(prevArrow),
    total = document.querySelector(totalCounter),
    current = document.querySelector(currentCounter),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    width = window.getComputedStyle(slidesWrapper).width,
    slider = document.querySelector(container)

  let slideIndex = 1
  let offset = 0

  slidesField.style.width = 100 * slides.length + '%'
  slidesField.style.display = 'flex'
  slidesField.style.transition = 'all .5s ease'
  slidesWrapper.style.overflow = 'hidden'

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`
    current.textContent = `0${slideIndex}`
  } else {
    total.textContent = slides.length
    current.textContent = slideIndex
  }

  slides.forEach((slide) => (slide.style.width = width))

  function deleteNotDigits(str) {
    return +str.replace(/\D/g, '')
  }

  next.addEventListener('click', () => {
    if (offset == deleteNotDigits(width) * (slides.length - 1)) {
      offset = 0
    } else {
      offset += deleteNotDigits(width)
    }
    slidesField.style.transform = `translateX(-${offset}px)`

    if (slideIndex == slides.length) slideIndex = 1
    else slideIndex++
    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`
    } else {
      current.textContent = slideIndex
    }

    dots.forEach(
      (dot) =>
        (dot.style.cssText = `background-color: rgb(101, 176, 252); border: none;`)
    )
    dots[
      slideIndex - 1
    ].style.cssText = `background-color: transparent; border: 2px solid white;`
  })

  prev.addEventListener('click', () => {
    if (offset == 0) {
      offset = deleteNotDigits(width) * (slides.length - 1)
    } else {
      offset -= deleteNotDigits(width)
    }
    slidesField.style.transform = `translateX(-${offset}px)`

    if (slideIndex == 1) slideIndex = slides.length
    else slideIndex--
    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`
    } else {
      current.textContent = slideIndex
    }

    dots.forEach(
      (dot) =>
        (dot.style.cssText = `background-color: rgb(101, 176, 252); border: none;`)
    )
    dots[
      slideIndex - 1
    ].style.cssText = `background-color: transparent; border: 2px solid white;`
  })

  const indicators = document.createElement('ol'),
    dots = []
  indicators.classList.add('carousel-indicators')
  slider.append(indicators)

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li'),
      innerDot = document.createElement('div')
    innerDot.classList.add('inner-dot')
    dot.append(innerDot)
    dot.setAttribute('data-slide-to', i + 1)
    innerDot.setAttribute('data-slide-to', i + 1)
    dot.classList.add('carousel-dot')
    if (i == 0) {
      dot.style.cssText = `background-color: transparent; border: 2px solid white;`
    }
    indicators.append(dot)
    dots.push(dot)
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to')
      slideIndex = slideTo
      dots.forEach(
        (dot) =>
          (dot.style.cssText = `background-color: rgb(101, 176, 252); border: none;`)
      )
      dots[
        slideIndex - 1
      ].style.cssText = `background-color: transparent; border: 2px solid white;`

      offset = deleteNotDigits(width) * (slideIndex - 1)
      slidesField.style.transform = `translateX(-${offset}px)`

      if (slideIndex < 10) {
        current.textContent = `0${slideIndex}`
      } else {
        current.textContent = slideIndex
      }
    })
  })

  // Easy version start

  // showSlides(slideIndex)

  // next.addEventListener('click', () => slidePlus(1))
  // prev.addEventListener('click', () => slidePlus(-1))

  // if (slides.length < 10) total.textContent = `0${slides.length}`
  // else total.textContent = slides.length

  // const slidePlus = (index) => showSlides((slideIndex += index))

  // function showSlides(index) {
  //   if (index > slides.length) slideIndex = 1
  //   if (index < 1) slideIndex = slides.length
  //   slides.forEach((item) => (item.style.display = 'none'))
  //   slides[slideIndex - 1].style.display = 'block'
  //   if (slides.length < 10) current.textContent = `0${slideIndex}`
  //   else current.textContent = slideIndex
  // }
  // End
}

// module.exports = slider
export default slider
