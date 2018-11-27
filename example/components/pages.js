import React from 'react'
import {inject} from 'mobx-react'

import SpreadSheet from '../../src/components/spreadsheet'
import SimpleText from '../../src/components/simpletext'
import Contract from '../../src/components/simpletext'

function _createComponent (Form) {
  const FormComponent = ({store}) => (<Form store={store.cv} />)
  return inject('store')(FormComponent)
}

export default {
  SpreadSheet: _createComponent(SpreadSheet),
  SimpleText: _createComponent(SimpleText),
  Contract: _createComponent(Contract)
}
