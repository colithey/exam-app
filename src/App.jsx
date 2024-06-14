import './assets/style/index.scss'
import { Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Main } from './pages/Main'
import { Shop } from './pages/Shop'

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  )
}