//  Created by react-native-create-bridge

import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'

const MeuComponente = requireNativeComponent('MeuComponente', MeuComponenteView)

export default class MeuComponenteView extends Component {
  render () {
    return <MeuComponente {...this.props} />
  }
}