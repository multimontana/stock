/**
 * @author Artyom Harutyunyan
 * I get all the tags with the date attribute in the parameters data-auto-init
 * after which I create a new collection collection with these tags (widgets)
 * @param cb
 * @returns {*[]}
 */

export const autoInit = cb => {
  return Array.from(document.querySelectorAll('[data-auto-init]')).map(item => {
    return item.getAttribute('data-auto-init') === 'true'
      ? cb(item)
      : cb(void 0)
  })
}
