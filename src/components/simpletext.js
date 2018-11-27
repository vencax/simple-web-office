/* global marked */
import React from 'react'
import {observer} from 'mobx-react'

const _style = {
  width: '100%',
  height: '100%'
}

const SimpleTextView = observer(({store}) => {
  return (
    <div className='row'>
      <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
        <textarea style={_style}
          onChange={(evt) => store.onChange(evt.target.value)}
          defaultValue={store.content} />
      </div>
      <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
        <p dangerouslySetInnerHTML={{__html: marked(store.content)}} />
      </div>
    </div>
  )
})

export default SimpleTextView
