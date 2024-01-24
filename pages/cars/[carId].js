import {useRouter} from 'next/router'
import carsData from '../../data/carsData'
import CarDetailes from '../../components/templates/CarDetailes'

export default function CarId() {
    const rout=useRouter()
    // console.log(rout.query)
    const carId=rout.query.carId
    const carDetails=carsData.find(data=>data.id==carId)
    // console.log(carDetails)
  return (
    <>
    <CarDetailes {...carDetails}/>
    </>
  )
}
