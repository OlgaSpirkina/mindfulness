import React, { useRef, createRef } from 'react'
import Button from '../Button'
import styles from '../Quotes/Quote.module.css'

export default function Category({ res, searchCategory }){
  return(
    <>
    {res.map((item, i) => {
      return(
        <Button
          key={i}
          text={item}
          onClickFunction={searchCategory}
          path='#'
        />
      )
    })}
    </>
  )
}


/*


*/
