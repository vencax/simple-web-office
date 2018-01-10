import {observable, action, computed} from 'mobx'

export default class SpreadsheetStore {

  @observable content = ''

  @action onLoaded(data) {
    this.content = data
  }

  @action onChange(text) {
    this.content = text
  }

}
