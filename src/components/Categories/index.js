import Button from '../Button'
import styles from './Categories.module.css'

export default function Categories ({buttons, filter}){
  return(
    <>
    {buttons.sort().map((item, index) => {
      return(
        <Button
          key={index}
          text={item}
          onClickFunction={()=> filter(`${item}`)}
          btnClass={styles.category_btn}
          path="/#"
        />
      )
    })
    }
    </>
  )
}




/*
const allCategories = ['All', ...filteredQuotes.map(item => item.group)];
const uniqueCategory = [...new Set(allCategories)];
*/


/* category buttons used in Categories component */
/*
  const [category, setCategory] = useState([]);
  let allCategories = []; // will be used in useEffect to get all the group names
/* filtering the group names in Categories component */
/*
  const filter = (button) => {
    if(button === 'All'){
      return quotes
    }
    const filteredData = quotes.filter(item => item.group === button);
    setQuotes(filteredData);
  }
  */
//  End filteredData


/*
  spread operator helps to use group names of all cards
*/
/*
      allCategories = ['All', ...data.map(item => item.group)];
      setCategory(allCategories);

*/
