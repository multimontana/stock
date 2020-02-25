import HostkeyTemplate from '../defaultTemplate/default-template'

/**
 * @author Artyom Harutyunyan
 * @description
 *
 * /------
 * this method searches for all tags with a class hk-widget-stock,
 * and filters them by date attribute (data-auto-init = true)
 * -------/
 *
 * @returns {Element[]}
 *
 */

export const getWidgetsByClassName = () => {
  let results = document.querySelectorAll('.hk-widget-stock')
  return Array.from(results).filter(item => {
    return JSON.parse(item.getAttribute('data-auto-init')) === true
  })
}

/**
 * @author Artyom Harutyunyan
 * @description
 *
 * /------
 * this method searches for tag with a id hk-widget-stock-xxx,
 * and filters them by date attribute (data-auto-init = true)
 * -------/
 *
 * @param id
 */

export const getWidgetById = id => {
  let widget = document.getElementById(id)
  if (!widget.hasChildNodes()) {
    new HostkeyTemplate(widget)
  }

  if (!widget) {
    throw Error(`widget with such ${id} does not exist`)
  }
}
