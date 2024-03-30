import { createContext, useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import { Route, Routes} from 'react-router-dom'
import Sections from './components/Sections'
import PageNotFound from './components/PageNotFound'

export const sectionStore = createContext({
  handleSection: () => {},
  getSectioning: "",
  secList: [],
})
// hallway: https://squarerooms.com.sg/wp-content/uploads/2023/04/Entertainment-room.jpg  https://www.pufikhomes.com/wp-content/uploads/2023/05/temnyi-kamen-v-dizayne-sovremennogo-doma-v-lesu-v-kanade-pufikhomes-1.jpg https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg

const sectionList = [{
  section: "Home storages",
  hero: "https://images.squarespace-cdn.com/content/v1/59f8aec3e9bfdfccbc6a2395/1514295546968-WIMGW2KHIUR0LIVTI7YL/kw_RGIHOME_storage1_0023.jpg",
  about:[{image: "https://cdn.sharps.co.uk/media/assets/pages/maximise_your_space/understairs/understairs-banner-01.jpg", content: " home storage is essential for maintaining organization, maximizing space utilization, preserving belongings, ensuring safety, enhancing aesthetics, facilitating efficient daily living, and increasing home value. Investing in quality storage solutions can greatly improve the functionality and livability of a home."}, {image: "https://empire-s3-production.bobvila.com/slides/16268/original/monochrome_color_scheme.jpg?1591219094", content: "Storage solutions can contribute to the overall aesthetics of a home. Stylish storage furniture, built-in cabinets, and decorative baskets or bins can complement the interior design, adding visual appeal to living spaces."}, {image: "https://api.gharpedia.com/wp-content/uploads/2018/01/0503010008-04-Find-Dead-Space_shutterstock_531883504.jpg", content: "Effective storage solutions help keep a home organized and clutter-free. Proper organization reduces stress and saves time by making it easier to find items when needed.Storage solutions can contribute to the overall aesthetics of a home. Stylish storage furniture, built-in cabinets, and decorative baskets or bins can complement the interior design, adding visual appeal to living spaces."}],
  images: [
      {img: "https://www.self-build.co.uk/wp-content/uploads/2018/06/Neville-Johnson-storage.jpg", heading: "Open shelf"},
      {img: "https://dropbymyhouse.com/wp-content/uploads/2022/03/nathan-oakley-CZysNmnvEJg-unsplash-scaled.jpg", heading: "Share a dresser"},
      {img: "https://mobileimages.lowes.com/productimages/7e58b661-6411-4ea2-a34f-63968c0c3087/04740974.jpg", heading: "lean on wall shelf"},
      {img: "https://www.bhg.com/thmb/zNNZCVEFQzEXfQ1bnbfJbLAKAec=/4000x0/filters:no_upscale():strip_icc()/bhg-wall-niche-trend-7971662-56815d6484dc4232bc0ed42c006a5389.jpg", heading: "Carve out wall nooks"},
      {img: "https://www.thespruce.com/thmb/mD0b9I6IYx9ZteWsZTMsLIH5gCM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RD_RSF_0083_F2-1-b13b6f732eeb49dd9a0fbbdcbebbc2fd.jpg", heading: "Built in kitchen island storage"},
      {img: "https://media.designcafe.com/wp-content/uploads/2023/12/04095818/bedroom-storage-units.jpg", heading: "Amplify your bed storage"},
  ]
}]

const App = () => {


  const [secList, setSecList] = useState(sectionList)

  const [getSectioning, setSectioning] = useState("");

  const handleSection = (subject) => {
    setSectioning(subject)
  }



  return (
    <sectionStore.Provider value={{handleSection, getSectioning, secList}}>
      <Routes>
      <Route path='/sections' element={<Sections />}/>
      <Route path='/' element={<Dashboard />}/>
      <Route path="*" element={<PageNotFound />} />
      </Routes>
    </sectionStore.Provider>
  )
}

export default App
