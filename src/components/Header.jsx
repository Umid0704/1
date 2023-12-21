import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    const {header} = this.props
    return (
      <div className='border w-[653px] text-center border-black py-[5px]'>
        <h1 >{header}</h1>
      </div>
    )
  }
}
