import { Route, Routes } from 'react-router-dom'
import { ChartSection} from '../pages/chartsPage'
import { Table } from '../pages/Table'
import { Reports } from '../pages/Reports'
import { ForeCast } from '../pages/Forecast'
import Sidebar from '../components/Sidebar'
import CurrencyTable from '../components/CurrencyTable'


const Routefor = () => {
    
  return (
    <Routes>
<Route path='/' element={<Sidebar/>}/>
<Route path='/chartSection' element={<ChartSection/>}/>
<Route path='/table' element={<Table/>}/>
<Route path='/reports' element={<Reports/>}/>
<Route path='/forecast' element={<ForeCast/>}/>
<Route path='/currencySelector' element={<CurrencyTable/>}/>

    </Routes>
  )
}

export  {Routefor}
