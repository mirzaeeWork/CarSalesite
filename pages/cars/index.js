import Categories from '../../components/module/Categories'
import SearchBar from '../../components/module/searchBar'
import CarsPage from '../../components/templates/CarsPage'
import carsData from '../../data/carsData'

export default function Details() {
  return (
    <>
      <SearchBar/>
      <Categories />
      <CarsPage data={carsData} />
    </>
  )
}
