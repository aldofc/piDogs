import React from 'react'
import { Link } from 'react-router-dom'

const DogCard = ({name,weightMin,weightMax,img,tempers,id}) => {
  return (
    <Link to ={`/home/${id}`}>
        <div>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <h3>{tempers.map((t) => {
                if(tempers.indexOf(t) !== tempers.length -1){
                    return t + ', '
                }else return t
            })}</h3>
            <div><h3>weight:{weightMin} - {weightMax} Kg</h3></div>
        </div>
    </Link>
    
  )
}

export default DogCard