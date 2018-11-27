import React from 'react'
import {Provider} from 'mobx-react'
import {MobxRouter} from 'mobx-router'
import MessagesView from './messages'

export default function App ({store}) {
  const menu = (
    <div>
      <a href='javascript:void(0)' onClick={() => store.goTo('spreadsheet', {id: 1})}>
        spreadsheet
      </a>
      <a href='javascript:void(0)' onClick={() => store.goTo('simpletext', {id: 1})}>
        simpletext
      </a>
    </div>
  )
  return (
    <div className='row' style={{width: '100%'}}>
      {menu}
      <MessagesView store={store} />
      <div className='main'>
        <Provider store={store}>
          <MobxRouter />
        </Provider>
      </div>
    </div>
  )
}
