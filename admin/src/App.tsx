import { Route, Routes } from 'react-router-dom'
import path from './utils/path'
import AdminLayout from '@page/admin/AdminLayout'
import DashBoard from '@page/admin/DashBoard'
import ManagerUser from '@page/admin/ManagerUser'
import ManagerProduct from '@page/admin/ManagerProduct'
import ManagerOrder from '@page/admin/ManagerOrder'
import Login from '@page/Login'
import Create_Product from '@page/admin/Create_Product'

function App() {
  return (
    <div className='min-h-screen  font-sans  relative'>

      <Routes>
        <Route path={path.ADMIN} element={<AdminLayout />}>
          <Route path={path.DASHBOARD} element={<DashBoard />} />
          <Route path={path.CREATE_PRODUCTS} element={<Create_Product />} />
          <Route path={path.MANAGE_USER} element={<ManagerUser />} />
          <Route path={path.MANAGE_PRODUCTS} element={<ManagerProduct />} />
          <Route path={path.MANAGE_ORDER} element={<ManagerOrder />} />
        </Route>
        <Route path={path.LOGIN} element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
