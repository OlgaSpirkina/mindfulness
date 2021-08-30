import React, { useState, useRef } from 'react'
import Button from '../Button'
import styles from '../Quotes/Quote.module.css'

export default function Category({ res }){
  const [category, setCategory] = useState('');
  const searchCategory = () => {
    console.log('coucou');
  }
  return(
    <>
    {res.map((item, i) => {
      return(
        <Button
          key={i}
          text={item}
          onClickFunction={searchCategory}
          btnClass={styles.categories}
          path='/'
        />
      )
    })}
    </>
  )
}


/*


*/
