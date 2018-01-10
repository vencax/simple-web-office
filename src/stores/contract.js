import {observable, action, computed} from 'mobx'
import _ from 'lodash'

export default class ContractStore {

  @observable data = {
    contractor: null,
    subscriber: null,

    sections: []
  }
  @observable text = null

  @action editSection(section) {
    this.text = section
  }

  @action onLoaded(data) {
    this.cells.merge(data)
  }

  @action onChange(value) {
    this.text = value
  }

  @action onSaveSection() {
    this.text = null
  }

  @action onSearchSubsriberSearch(text) {

  }

}
