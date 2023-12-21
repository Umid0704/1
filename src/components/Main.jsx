import React, { Component } from 'react'

export default class Main extends Component {
    state={
        index:[1,2,3]
    }
    PropsItem=()=>{
       
    }
    render() {
        const {arr,arr2,nav} = this.props
        const {index} = this.state
   
    return (
      <div className=' w-[653px] flex border border-black  items-center box-border'>
      <div className='py-[10px] px-[10px]  rotate-[-90deg]'>
        <h1 >{nav}</h1>
      </div>
            <div className=''>
                {
                    index.map((item)=>{
                       return( <div className='flex border border-black p-[10px] items-center ' key={item}>
                           <div>{
                            arr2.map((item,index)=>{
                               return( <p className='border border-black px-[5px] py-[14px]' key={index}>{item}</p>)
                            })
                           }</div>
                           <div> {
                                arr.map((item, index)=>{
                                    return(<p className='border border-black py-[5px] px-[20px] w-[500px]' key={index}>{item}</p>)
                                })
                            }</div>
                        </div>)

                    })
                }
            </div>
      </div>
    )
  }
}
