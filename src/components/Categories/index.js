import Button from '../Button'
export default function Categories ({ filter, category }){
  const uniqueCategory = [...new Set(category)];
  return(
    <>
    {uniqueCategory.sort().map((item, index) => {
      return(
        <Button
          key={index}
          text={item}
          onClickFunction={()=> filter(`${item}`)}
          path="/#"
        />
      )
    })
    }
    </>
  )
}
