import React from 'react' // Importing React library
import CategoryList from '../components/CategoryList' // Importing CategoryList component
import BannerProduct from '../components/BannerProduct' // Importing BannerProduct component
import HorizontalCardProduct from '../components/HorizontalCardProduct' // Importing HorizontalCardProduct component
import VerticalCardProduct from '../components/VerticalCardProduct' // Importing VerticalCardProduct component

const Home = () => {
  return (
    <div>
      {/* Rendering CategoryList component */}
      <CategoryList/>
      
      {/* Rendering BannerProduct component */}
      <BannerProduct/>

      {/* Rendering HorizontalCardProduct components with different categories and headings */}
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"}/>
      <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"}/>

      {/* Rendering VerticalCardProduct components with different categories and headings */}
      <VerticalCardProduct category={"mobiles"} heading={"Mobiles"}/>
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"}/>
      <VerticalCardProduct category={"televisions"} heading={"Televisions"}/>
      <VerticalCardProduct category={"camera"} heading={"Camera & Photography"}/>
      <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"}/>
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/>
    </div>
  )
}

export default Home // Exporting Home component as default