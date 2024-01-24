import { useRouter } from 'next/router'
import carsData from '../../data/carsData'
import style from './FilterPrice.module.css'
import Back from '../../components/icons/Back'
import Card from '../../components/module/card'

export default function FilterPrice() {
  const rout = useRouter()
  // console.log(rout.query)
  const namePrice = rout.query.filterPrice || []
  // console.log(namePrice)
  const [min, max] = namePrice
  // console.log(namePrice)

  const carDetails = carsData.filter(data => data.price >= min & data.price <= max)
  function backHandler() {
    rout.back()
  }

  if (!carDetails.length) return (<>
    <div className={style.container} style={{  flexDirection: 'column'}}>
      <div className={style.back} onClick={backHandler}>
        <Back />
        <p style={{ marginLeft: '1rem' }}>back</p>
      </div>
      
      <div style={{  margin: '10rem auto'}}>
        <h1>Not Found</h1>
      </div>
    </div>
  </>)

  return (
    <>
      <div className={style.container}>
        <div className={style.back} onClick={backHandler}>
          <Back />
          <p style={{ marginLeft: '1rem' }}>back</p>
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
