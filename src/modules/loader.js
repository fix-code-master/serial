function loader(way) {
  // Loader
  loader = document.querySelector(way)

  setTimeout(() => {
    loader.style.opacity = '0'
    setTimeout(() => {
      loader.style.display = 'none'
    }, 500)
  }, 500)
  // Loader
}

// module.exports = loader
export default loader
