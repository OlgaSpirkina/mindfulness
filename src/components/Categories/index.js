import Category from './Category.js'
import styles from '../Quotes/Quote.module.css'

const Categories = ({ filteredQuotes }) => {
  let res = []
  for(let i=0; i<filteredQuotes.length; i++){
    if(!res.includes(filteredQuotes[i].group)){
      res.push(filteredQuotes[i].group)
    }
  }
  return(
    <div className={styles.categories_container}>
      <Category res={res} />
    </div>  
  )
}

export default Categories


/*
{filteredQuotes.map(quote => {
  if(!res.includes(quote.group)){
    res.push(quote.group)
  }
    console.log(res)
    return res
  }
)}
*/

/*
for(let i=0; i<res.length; i++){
  return(
    <Button
      text={res[i]}
      onClickFunction={searchCategory}
      btnClass={styles.categories}
      path='/'
    />
  )
}
*/
/*
return(
  <>
    <div className={styles.categories_container}>
      {quote.map((item, i) => {
        group.push(item.group);
        let unique = [...new Set(group)];
        console.log(unique)
        return(
          <>
          {unique.map((item, i) => {
            return(
              <Button
                key={i}
                text={item}
                onClickFunction={searchCategory}
                btnClass={styles.categories}
                path='/'
              />
            )
          }) }
          </>
        )
      })
    }
    </div>
  </>
)

*/
