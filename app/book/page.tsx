import React from 'react'
import { BookForm } from './bookForm'

const page = () => {
  return (
    <div>
        <BookForm />
        <a href='/admin'>
          Admin
        </a>
    </div>
  )
}

export default page