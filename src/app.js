'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: 'Renato'
    }
  }
  render () {
    return (
      <div className='container' onClick={() => this.setState({
        text: 'Outro texto'
      })}>
        {this.state.text}
      </div>
    )
  }
}

// const App = React.createClass({
//   render: function () {
//     return (
//       <div className='container'>
//         <Title name='Renato' lastname='Silva' />
//       </div>
//     )
//   }
// })

export default App
