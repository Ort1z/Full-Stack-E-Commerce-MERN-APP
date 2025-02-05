import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

function App() {
  const dispatch = useDispatch()
  const [cartProductCount,setCartProductCount] = useState(0)

  const fetchUserDetails = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const dataResponse = await fetch(SummaryApi.current_user.url, {
        method: SummaryApi.current_user.method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      const dataApi = await dataResponse.json()

      if (dataApi.success) {
        dispatch(setUserDetails(dataApi.data))
      }
    } catch (error) {
      console.error("Failed to fetch user details:", error)
      // Optionally clear token if it's invalid
      localStorage.removeItem('token')
    }
  }


  const fetchUserAddToCart = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
        method: SummaryApi.addToCartProductCount.method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      const dataApi = await dataResponse.json()

      setCartProductCount(dataApi?.data?.count)
    } catch (error) {
      console.error("Failed to fetch cart count:", error)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserDetails()
      fetchUserAddToCart()
    }
  }, [])

  return (
    <>
      <Context.Provider value={{
          fetchUserDetails, // user detail fetch 
          cartProductCount, // current user add to cart product count,
          fetchUserAddToCart
      }}>
        <ToastContainer 
          position='top-center'
        />
        
        <Header/>
        <main className='min-h-[calc(100vh-120px)] pt-16'>
          <Outlet/>
        </main>
        <Footer/>
      </Context.Provider>
    </>
  );
}

export default App;