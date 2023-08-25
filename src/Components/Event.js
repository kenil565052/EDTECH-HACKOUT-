// import { useState } from "react"
import React  from 'react'
import Eventitem from "../Eventitem"
const Event = (props) => {

    // let j=[1,2]
  return (
    <div>
      <div className='my-3 container blur'>
        <h2 className=' text-center my-3' style={{color:props.checked==='black'?'white':'black'}}>NewsMaster </h2>
        <div className="row  ">

            {

                [1,2].map((element) =>  (<div key={element} className="col-md-4"><Eventitem title={"jainam and kenil"} descrip={"working on nothing"} imgurl={"https://media.istockphoto.com/id/868935172/photo/heres-to-tonight.jpg?s=612x612&w=0&k=20&c=v1ceJ9aZwI43rPaQeceEx5L6ODyWFVwqxqpadC2ljG0="} url={""} checking={props.checked}/></div> ))
            }
      
            
            
            
      

        </div>
      </div>
    </div>
  )
}

export default Event
