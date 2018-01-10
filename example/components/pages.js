import React from 'react'
import {observer, inject} from 'mobx-react'

import SpreadSheet from '../../../src/components/spreadsheet'
import SimpleText from '../../../src/components/simpletext'
import Contract from '../../../src/components/contract'

function _createComponent (Form) {
  const FormComponent = ({store}) => (<Form store={store.cv} />)
  inject('store')(observer(FormComponent))
}

export default {
  SpreadSheet: _createComponent(SpreadSheet),
  SimpleText: _createComponent(SimpleText),
  Contract: _createComponent(Contract)
}
