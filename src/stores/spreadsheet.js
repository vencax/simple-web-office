import {observable, action, computed} from 'mobx'
import _ from 'lodash'

const cellRegex = new RegExp('[A-J][1-9][0-9]*', 'g')

export default class SpreadsheetStore {

  @observable cells = observable.map({})

  @observable selectedCell = 'A1'
  @computed get data() {
    return _.times(10, i => (
      _.times(10, j => this.getCellData(i, j))
    ))
  }

  @action onLoaded(data) {
    this.cells.merge(data)
  }

  @action onChange(changes, source) {
    changes && changes.map(i => {
      this.setCellData(i[0], i[1], i[3])
    })
  }

  isSelected(row, col) {
    return this.getCellId(row, col) === this.selectedCell
  }

  @action continueSelection(row, col) {
    this.muosed = this.getCellId(row, col)
  }

  getCellData(row, col) {
    const id = this.getCellId(row, col)
    const val =  this.cells.get(id)
    if (val) {
      return this.evaluateValue(val)
    }
  }

  getCellDataById(id) {
    return this.cells.has(id) ? this.cells.get(id) : ''
  }

  @action setCellData(row, col, data) {
    const id = this.getCellId(row, col)
    this.cells.set(id, data)
  }

  @action setCellDataById(id, data) {
    this.cells.set(id, data)
  }

  getCellId(row, col) {
    return String.fromCharCode(col + 'A'.charCodeAt(0)) + (row + 1)
  }

  @action setSelectedCell(row, col) {
    this.selectedCell = this.getCellId(row, col)
    console.log('selectedCell: ', this.selectedCell)
  }

  evaluateValue(formula) {
    formula = formula.replace('=', '')
    const cells = formula.match(cellRegex)
    if (cells) {
      cells.forEach(cellId => {
        formula = formula.replace(cellId, this.evaluateValue(this.getCellDataById(cellId)))
      })
    }
    try {
      return eval(formula)
    } catch(_) {
      return formula
    }
  }
}
