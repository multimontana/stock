import HKWS from './hkws/hkws'
import { autoInit } from './parser/auto-init'

export const init = name => {
  new HKWS(name)
}

/**
 * @author Artyom Harutyunyan
 * this method works when the reseller in
 * its widget adds the date attribute date-init="true"
 */

autoInit(item => {
  if (item) {
    console.log(item)
  }
})
