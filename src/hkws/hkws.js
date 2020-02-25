import { getWidgetsByClassName, getWidgetById } from '../parser/parser'

export default class HKWS {
  constructor(id = false) {
    HKWS.init(id)
  }

  static init(id) {
    if (id) {
      /** information is stored inside the method **/
      getWidgetById(id)
    }

    if (!id) {
      /** information is stored inside the method **/
      getWidgetsByClassName()
    }
  }
}
