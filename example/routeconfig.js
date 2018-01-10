import React from 'react'
import { Route } from 'mobx-router'
// components
import PageComponents from './components/pages'

const views = {
  spreadsheet: new Route({
    path: '/sheet/:id',
    component: <PageComponents.SpreadSheet />,
    onEnter: (route, params, store) => {
      store.showSpreadSheet(params.id)
    }
  }),
  simpletext: new Route({
    path: '/simpletext/:id',
    component: <PageComponents.SimpleText />,
    onEnter: (route, params, store) => {
      store.showSimpleText(params.id)
    }
  }),
  contract: new Route({
    path: '/contract/:id',
    component: <PageComponents.Contract />,
    onEnter: (route, params, store) => {
      store.showContract(params.id)
    }
  })
}

export default views
