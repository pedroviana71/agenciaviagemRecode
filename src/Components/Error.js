import React from 'react'
import { Link } from 'react-router-dom'

const error = () => {
  return (
    <div>
        Essa página não existe
        <Link to="/">Voltar</Link>
    </div>
  )
}

export default error