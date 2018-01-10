import React from 'react'
import { Route } from 'mobx-router'
// components
import SpreadSheetPage from './components/pages/spreadsheet'
import SimpleTextPage from './components/pages/simpletext'

const views = {
  spreadsheet: new Route({
    path: '/sheet/:id',
    component: <SpreadSheetPage />,
    onEnter: (route, params, store) => {
      store.showSpreadSheet(params.id)
    }
  }),
  simpletext: new Route({
    path: '/simpletext/:id',
    component: <SimpleTextPage />,
    onEnter: (route, params, store) => {
      store.showSimpleText(params.id)
    }
  })
}

export default views
