import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector} from "react-redux"
import { Link , useHistory} from 'react-router-dom'


const CreateDog = () => {
  let dispatch = useDispatch()
  let history = useHistory()
  const temps = useSelector(state => state.tempers)
  const dog = useSelector(state => state.noFiltered)
  const [error,setError] = useState({})


}

export default CreateDog