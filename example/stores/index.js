import MessagesStore from './messages'
import SpreadsheetStore from '../../src/stores/spreadsheet'

export default class StateStore extends MessagesStore {
  //
  constructor (router, goTo) {
    super()
    this.router = router
    this.goTo = goTo
  }

  showSpreadSheet (id) {
    this.cv = new SpreadsheetStore()
    this.cv.onLoaded({
      'A1': '5',
      'B3': '6',
      'E5': '=A1 * 4',
      'A8': '=55'
    })
  }
}
