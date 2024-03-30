import { createContext, useEffect, useState } from 'react'
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
  section: "Home Storages",
  hero: "https://images.squarespace-cdn.com/content/v1/59f8aec3e9bfdfccbc6a2395/1514295546968-WIMGW2KHIUR0LIVTI7YL/kw_RGIHOME_storage1_0023.jpg",
  about:[{image: "https://cdn.sharps.co.uk/media/assets/pages/maximise_your_space/understairs/understairs-banner-01.jpg", content: " Home storage is essential for maintaining organization, maximizing space utilization, preserving belongings, ensuring safety, enhancing aesthetics, facilitating efficient daily living, and increasing home value. Investing in quality storage solutions can greatly improve the functionality and livability of a home."}, {image: "https://empire-s3-production.bobvila.com/slides/16268/original/monochrome_color_scheme.jpg?1591219094", content: "Storage solutions can contribute to the overall aesthetics of a home. Stylish storage furniture, built-in cabinets, and decorative baskets or bins can complement the interior design, adding visual appeal to living spaces."}, {image: "https://api.gharpedia.com/wp-content/uploads/2018/01/0503010008-04-Find-Dead-Space_shutterstock_531883504.jpg", content: "Effective storage solutions help keep a home organized and clutter-free. Proper organization reduces stress and saves time by making it easier to find items when needed.Storage solutions can contribute to the overall aesthetics of a home. Stylish storage furniture, built-in cabinets, and decorative baskets or bins can complement the interior design, adding visual appeal to living spaces."}],
  images: [
      {img: "https://www.self-build.co.uk/wp-content/uploads/2018/06/Neville-Johnson-storage.jpg", heading: "Open shelf"},
      {img: "https://dropbymyhouse.com/wp-content/uploads/2022/03/nathan-oakley-CZysNmnvEJg-unsplash-scaled.jpg", heading: "Share a dresser"},
      {img: "https://mobileimages.lowes.com/productimages/7e58b661-6411-4ea2-a34f-63968c0c3087/04740974.jpg", heading: "lean on wall shelf"},
      {img: "https://www.bhg.com/thmb/zNNZCVEFQzEXfQ1bnbfJbLAKAec=/4000x0/filters:no_upscale():strip_icc()/bhg-wall-niche-trend-7971662-56815d6484dc4232bc0ed42c006a5389.jpg", heading: "Carve out wall nooks"},
      {img: "https://www.thespruce.com/thmb/mD0b9I6IYx9ZteWsZTMsLIH5gCM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RD_RSF_0083_F2-1-b13b6f732eeb49dd9a0fbbdcbebbc2fd.jpg", heading: "Built in kitchen island storage"},
      {img: "https://media.designcafe.com/wp-content/uploads/2023/12/04095818/bedroom-storage-units.jpg", heading: "Amplify your bed storage"},
  ]
}, 
{
  section: "Landscapes",
  hero:  "https://da28rauy2a860.cloudfront.net/completehome/wp-content/uploads/2017/07/27172100/Front_2-1024x683.jpg",
  about:[{image: "https://t3.ftcdn.net/jpg/05/72/57/70/360_F_572577034_MyRzMkczJp719Gc0WmcevHFGWsDh68QJ.jpg", content: "Well-designed landscapes improve the visual appeal of a property, creating an inviting and pleasant environment. Thoughtfully planned green spaces, colorful flowerbeds, and manicured lawns enhance the overall beauty of the surroundings, contributing to a positive first impression.."}, {image: "https://images.adsttc.com/media/images/64cb/e543/4b88/3f34/2c35/c6f3/medium_jpg/landscape-house-ruth-packer-rona-levin-architects_16.jpg?1691084134", content: "Landscapes provide numerous environmental benefits, including air purification, carbon sequestration, and temperature regulation. Trees and plants absorb carbon dioxide and release oxygen, helping to improve air quality. Additionally, green spaces mitigate the urban heat island effect by providing shade and cooling the surrounding area."}, {image: "https://i.ytimg.com/vi/YHX2g_wwd1A/maxresdefault.jpg", content: "Access to green spaces has been linked to numerous health benefits, including stress reduction, improved mental well-being, and increased physical activity. Landscapes provide opportunities for relaxation, recreation, and social interaction, contributing to a higher quality of life for residents."}],
  images: [
      {img: "https://www.mcdonaldjoneshomes.com.au/sites/default/files/inline-images/Landscaping-Ideas-for-Front-of-House.jpg", heading: "Open shelf"},
      {img: "https://dropbymyhouse.com/wp-content/uploads/2022/03/nathan-oakley-CZysNmnvEJg-unsplash-scaled.jpg", heading: "Share a dresser"},
      {img: "https://mobileimages.lowes.com/productimages/7e58b661-6411-4ea2-a34f-63968c0c3087/04740974.jpg", heading: "lean on wall shelf"},
      {img: "https://www.bhg.com/thmb/zNNZCVEFQzEXfQ1bnbfJbLAKAec=/4000x0/filters:no_upscale():strip_icc()/bhg-wall-niche-trend-7971662-56815d6484dc4232bc0ed42c006a5389.jpg", heading: "Carve out wall nooks"},
      {img: "https://www.thespruce.com/thmb/mD0b9I6IYx9ZteWsZTMsLIH5gCM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RD_RSF_0083_F2-1-b13b6f732eeb49dd9a0fbbdcbebbc2fd.jpg", heading: "Built in kitchen island storage"},
      {img: "https://media.designcafe.com/wp-content/uploads/2023/12/04095818/bedroom-storage-units.jpg", heading: "Amplify your bed storage"},
  ]
}
]

const App = () => {


  const [secList, setSecList] = useState([])

  const [getSectioning, setSectioning] = useState("");

  const handleSection = (subject) => {
    setSectioning(subject)
  }

  useEffect(() => {
    if(getSectioning){
      const newlist = sectionList.find(x => x.section === getSectioning)
    setSecList([newlist])
    }
  }, [getSectioning])



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
