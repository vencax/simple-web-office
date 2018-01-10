import MessagesStore from './messages'
import SpreadsheetStore from '../../src/stores/spreadsheet'
import SimpleTextStore from '../../src/stores/simpletext'
import ContractStore from '../../src/stores/contract'

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

  showContract (id) {
    this.cv = new ContractStore()
    this.cv.onLoaded({
      contractor: 123,
      subscriber: 321,
      sections: [{
        name: 'first section',
        paragraphs: [
          'par 1 **in bold**',
          [
            'section 1.1 and its contents',
            'section 1.2 and its contents'
          ],
          'the third section *in italic*'
        ]
      }, {
        name: 'footer',
        paragraphs: [
          'footer content'
        ]
      }]
    })
  }
}
