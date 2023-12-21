import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const {footer} = this.props
    return (
      <div className='border w-[653px] text-center border-black py-[5px]'>
        <h1>{footer}</h1>
      </div>
    )
  }
}
  