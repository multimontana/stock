import axios from 'axios'
const url = `https://api2.hostkey.com/v1/servers/get-list-servers`

/**
 * @author Artyom Harutyunyan
 * this class is designed to generate templates,
 * widget itself gets parameters
 */

export default class HostkeyTemplate {
  constructor(widgets) {
    this.init()
    this.widgets = widgets
    this.getWidgets()
  }

  /**
   * generate template method
   * @returns {string}
   */

  template() {
    return `<h1>Hello World</h1>`
  }

  /**
   * append new template in widget
   */

  getWidgets() {
    this.widgets.innerHTML = this.template()
  }

  /**
   * this method for test ajax request
   */

  init() {
    axios
      .get(
        `${url}?location=nl&pid=1030&groups=1cpu&currency=usd&pricerate=1.5&currencycon=br&servertype=1
      `
      )
      .then(response => {
        console.log(response)
      })
  }
}
