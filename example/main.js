import React from 'react'
import ReactDOM from 'react-dom'
import DevTools from 'mobx-react-devtools'
import { startRouter, RouterStore } from 'mobx-router'
import { useStrict } from 'mobx'
import AppStore from './stores'
import views from './routeconfig'
useStrict(true)

const router = new RouterStore()

function goTo (view, params, queryParams = {}) {
  router.goTo(views[view], params, store, queryParams)
}
const store = new AppStore(router, goTo)

startRouter(views, store)

// init react components part using the only prop: the store
import AppComponent from './components/app'
const mount = document.getElementById('root')  // mountpoint

ReactDOM.render((
  <div>
    <AppComponent store={store} />
    <DevTools />
  </div>
), mount)
