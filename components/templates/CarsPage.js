import Card from '../module/card'
import style from './CarsPage.module.css'

export default function CarsPage({data}) {
  return (
    <div className={style.container}>{
        data.length > 0 && data.map(car=>(
            <Card key={car.id} {...car}/>
        ))
    }</div>
  )
}
