import React from 'react'
import {observer} from 'mobx-react'
import FormulaEditor from './FormulaEditor'
import HotTable from 'react-handsontable'

const Visualize = observer(({store}) => {
  return <span>{store.cells.toString()}</span>
})

const SpreadSheet = observer(({store}) => {
  return <HotTable settings={{
    data: store.data,
    colHeaders: true,
    rowHeaders: true,
    stretchH: 'all',
    afterChange: store.onChange.bind(store)
    // colWidths: [45, 100, 160, 60, 60],
    // rowHeights: [50, 40, 100, 10],
    // manualColumnResize: true,
    // manualRowResize: true
  }} />
})

const SpreadSheetView = ({store}) => {
  return (
    <div>
      <FormulaEditor store={store} />
      <div id='example-component'>
        <SpreadSheet store={store} />
      </div>
      <Visualize store={store} />
    </div>
  )
}

export default SpreadSheetView
