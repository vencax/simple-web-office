import MessagesStore from './messages'
import SpreadsheetStore from '../../src/stores/spreadsheet'
import SimpleTextStore from '../../src/stores/simpletext'

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

  showSimpleText (id) {
    this.cv = new SimpleTextStore()
    this.cv.onLoaded(`
## heading 2

This is any simple text that can be:

-  **bold** or *italic*,
- it can also have [links](http://google.com)
- or images: ![google image](https://loremflickr.com/320/240?random=1)
    `)
  }
}
