import React from 'react'
import {Provider} from 'mobx-react'
import {MobxRouter} from 'mobx-router'
import MessagesView from './messages'

export default function App ({store}) {
  const menu = (
    <a href='javascript:void(0)' onClick={() => store.goTo('spreadsheet', {id: 1})}>
      spreadsheet
    </a>
  )
  return (
    <div className='row' style={{width: '100%'}}>
      {menu}
      <MessagesView store={store} />
      <div style={{padding: '65px 0 65px 18px'}} className='main'>
        <Provider store={store}>
          <MobxRouter />
        </Provider>
      </div>
    </div>
  )
}
