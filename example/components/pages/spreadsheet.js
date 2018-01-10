import React from 'react'
import { observer, inject } from 'mobx-react'

import SpreadSheetView from '../../../src/components/spreadsheet'

const SpreadSheetPage = ({store}) => {
  return <SpreadSheetView store={store.cv} />
}

export default inject('store')(observer(SpreadSheetPage))
