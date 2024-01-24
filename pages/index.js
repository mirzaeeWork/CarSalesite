import AllButton from '../components/module/AllButton'
import Categories from '../components/module/Categories'
import SearchBar from '../components/module/searchBar'
import CarsPage from '../components/templates/CarsPage'
import carsData from '../data/carsData'

export default function Home() {
  const threeCars=carsData.slice(0,3)
  return (
    <>
      <SearchBar/>
      <Categories />
      <AllButton/>
      <CarsPage data={threeCars} />
    </>
  )
}
