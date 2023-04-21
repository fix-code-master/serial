function tab(
  tabsParentSelector,
  tabsContentSelector,
  tabsSelector,
  activeSelector
) {
  //   tabContent.forEach((content, idx) => {
  //     if (idx > 0) content.classList.add('hide')
  //   })

  //   tabsCotainer.addEventListener('click', (event) => {
  //     let target = event.target
  //     if (target && target != tabsCotainer) {
  //       deleteClasses(tabs, 'tabheader__item_active')

  //       target.classList.add('tabheader__item_active')
  //       tabs.forEach((tab, idx) => {
  //         tabContent[idx].classList.add('hide')
  //         if (target == tab) {
  //           deleteClasses(tabContent, 'show')
  //           tabContent[idx].classList.remove('hide')
  //           tabContent[idx].classList.add('show')
  //         }
  //       })
  //     }
  //   })

  //   function deleteClasses(arr, getClass) {
  //     arr.forEach((item) => item.classList.remove(getClass))
  //   }

  const tabsCotainer = document.querySelector(tabsParentSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabs = document.querySelectorAll(tabsSelector)
  // Tabs
  tabsCotainer.addEventListener('click', (event) => {
    const target = event.target

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((tab, idx) => {
        if (tab == target) {
          hideTabContent()
          showTabContent(idx)
        }
      })
    }
  })

  function hideTabContent() {
    tabsContent.forEach((content) => {
      content.classList.add('hide')
      content.classList.remove('show', 'fade')
    })

    tabs.forEach((tab) => tab.classList.remove(activeSelector))
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.remove('hide')
    tabsContent[i].classList.add('show', 'fade')
    tabs[i].classList.add(activeSelector)
  }

  hideTabContent()
  showTabContent()
  // Tabs
}

// module.exports = tab
export default tab
