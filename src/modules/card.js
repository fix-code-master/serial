function card() {
  // Cards
  class MenuCard {
    constructor(src, alt, title, descr, price, parentElement, ...classes) {
      this.src = src
      this.alt = alt
      this.title = title
      this.descr = descr
      this.price = price
      this.classes = classes
      this.parent = document.querySelector(parentElement)
      this.transfer = 11000
      this.changeToUZS()
      // this.render()
    }

    changeToUZS() {
      this.price = this.price * this.transfer
    }

    render() {
      const card = document.createElement('div')
      if (this.classes.length === 0) {
        this.element = 'menu__item'
        card.classList.add(this.element)
      } else {
        this.classes.forEach((classname) => card.classList.add(classname))
      }

      card.innerHTML = `
        <img src=${this.src} alt="vegy" />
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Price:</div>
          <div class="menu__item-total"><span>${this.price}</span>uzs/month</div>
        </div>
      `

      this.parent.append(card)
    }
  }

  // async function getRecourse(url) {
  //   const res = await fetch(url)

  //   return await res.json()
  // }

  axios.get('http://localhost:3000/menu').then((data) => {
    data.data.forEach(({ img, altimg, title, descr, price }) => {
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        '.menu .container'
      ).render()
    })
  })

  // getRecourse('http://localhost:3000/menu').then((data) => {
  //   data.forEach(({ img, altimg, title, descr, price }) => {
  //     new MenuCard(
  //       img,
  //       altimg,
  //       title,
  //       descr,
  //       price,
  //       '.menu .container'
  //     ).render()
  //   })
  // })
  // Cards
}

// module.exports = card
export default card
