import React from 'react'
import { Route } from 'mobx-router'
// components
import SpreadSheetPage from './components/pages/spreadsheet'

const views = {
  spreadsheet: new Route({
    path: '/sheet/:id',
    component: <SpreadSheetPage />,
    onEnter: (route, params, store) => {
      store.showSpreadSheet(params.id)
    }
  })
}

export default views
