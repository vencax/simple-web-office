import React from 'react'
import { observer, inject } from 'mobx-react'

import SimpleTextView from '../../../src/components/simpletext'

const SimpleTextPage = ({store}) => {
  return <SimpleTextView store={store.cv} />
}

export default inject('store')(observer(SimpleTextPage))
