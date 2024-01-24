import { useRouter } from 'next/router'
import carsData from '../../data/carsData'
import style from './categories.module.css'
import Back from '../../components/icons/Back'
import Card from '../../components/module/card'


export default function CategoryName() {
  const rout = useRouter()
  // console.log(rout.query)
  const nameCategory = rout.query.categoryName
  const carDetails = carsData.filter(data => data.category == nameCategory)
  function backHandler(){
    rout.back()
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.back} onClick={backHandler}>
          <Back />          
          <p style={{marginLeft:'1rem'}}>back</p>
        </div>
      </div>
      <div className={style.container}>
        {
          carDetails.length > 0 && carDetails.map(car => (
            <Card key={car.id} {...car} />
            
          ))
        }
      </div>
    </>
  )
}
