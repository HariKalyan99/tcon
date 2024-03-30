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
      {img: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2016/6/16/0/FOD16_assemblageSTUDIO_Tresarca_1.jpg.rend.hgtvcom.1280.960.suffix/1466101947835.jpeg", heading: "Modern Landscape"},
      {img: "https://st.hzcdn.com/simgs/pictures/landscapes/valley-club-mid-century-dd-ford-construction-img~0a71c57e07923cd7_14-1531-1-e7fc035.jpg", heading: "Mid century"},
      {img: "https://newliferockeries.com/wp-content/uploads/2022/03/river-rock-landscaping-ideas.jpeg", heading: "River rock"},

      {img: "https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2023/05/iStock-508072701-lazy-landscaping-backyard-with-hardscaping.jpg", heading: "Low Maintenance"},

      {img: "https://www.bhg.com/thmb/iIzKL_vDzejuWEEsNsEoMcLyHcw=/1968x0/filters:no_upscale():strip_icc()/deck-seating-raised-gardens-1f94c8c4-572a641a7d9f4847851cf2bfd488a5ec.jpg", heading: "Backyard Patio"},

      {img: "https://luxesource.com/wp-content/uploads/2021/11/LX_Arizona66_HOM_SpaceBazaar_01.jpg", heading: "Holistic mukawakee"},
  ]
},
{
  section: "Hallways",
  hero: "https://storage.googleapis.com/redbrics-prod-backend.appspot.com/blog/images/_1669015584412_Add%20An%20Accent%20Mirror%20to%20Make%20the%20Foyer%20Look%20Bigger.webp",
  about:[{image: "https://assets.architecturaldigest.in/photos/63eb97df0ec9febdf822a430/1:1/w_1080,h_1080,c_limit/15%20entryway%20design%20ideas%20to%20make%20a%20stylish%20first%20impression.jpg", content: "  It serves as the entry point and sets the tone for the rest of the house. The hallway or foyer is the first space guests see upon entering, making it crucial for creating a positive first impression and welcoming atmosphere."}, {image: "https://www.nobroker.in/blog/wp-content/uploads/2022/06/French-style-foyer-designs-1.jpg", content: " It acts as a transitional area between the exterior and interior of the home, providing a buffer zone for adjusting from the outside environment to the indoor living space. This transition space helps maintain cleanliness by capturing dirt, mud, and debris from shoes."}, {image: "https://www.tollbrothers.com/blog/wp-content/uploads/2023/04/1-Summit_Santi-Elite_Entry_CC_RGB_conversion1.jpg", content: "Hallways and foyers can offer valuable storage opportunities, such as coat closets, shoe racks, or built-in cabinets. These storage solutions help keep the space organized and free from clutter, enhancing the overall functionality of the home."}],
  images: [
      {img: "https://lh5.googleusercontent.com/BUH_9mGlxApwtkjpjlbpajaaCYurqW_nYwws97IkJJK51aMIV3brsq3mfVZDdgkq01J2c__UwReJKFYcH0zZiKHPsNSF9ABH70PS0R47eBqYr3nVNH-sciJ1rqj0jdkBcGvHi0QO", heading: "Foyer"},
      {img: "https://www.home-designing.com/wp-content/uploads/2018/01/flying-pendant-lights-colourful-stools-kitsch-living-room.jpg", heading: "Centerpiece"},
      {img: "https://www.rugtraders.co.uk/wp-content/uploads/2018/10/hallway-lamp.jpeg", heading: "Wide hallway"},
      {img: "https://www.decorilla.com/online-decorating/wp-content/uploads/2018/05/hallway-decorating-ideas-light-fixture-3-1024x740.jpg", heading: "Long Hallway"},
      {img: "https://www.tollbrothers.com/blog/wp-content/uploads/2022/02/Bartram-Ranch_Hillcrest_Loft_1_conversion1-2.jpg", heading: "Upstairs Hallway"},
      {img: "https://i.pinimg.com/originals/5b/6f/ae/5b6faec955a0644741ae70ea0f1b1d27.jpg", heading: "Entryway"},
      {img: "https://images.homify.com/v1437145294/p/photo/image/23000/Emma_Hooton_Interior.jpg", heading: "Welcoming hallway"},
  ]
},
{
  section: "Kitchens",
  hero: "https://www.estliving.com/wp-content/uploads/2021/04/est-living-middle-park-house-auhaus-02.jpg",
  about:[{image: "https://www.decorilla.com/online-decorating/wp-content/uploads/2022/01/Waterfall-kitchen-island-design-by-Decorilla-designer-Lori-D..jpeg", content: " Kitchens are often considered the heart of the home, serving as a central gathering place for family and friends. They provide a space for cooking, dining, socializing, and bonding, fostering a sense of togetherness and connection."}, {image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/2/4/0/IO_Corine-Maggio_California-Modern_2.jpg.rend.hgtvcom.616.493.suffix/1549298382474.jpeg", content: "Kitchens are highly functional spaces, equipped with appliances, tools, and storage solutions to facilitate cooking and meal preparation. Well-designed kitchens optimize workflow, efficiency, and organization, making meal preparation more convenient and enjoyable."}, {image: "https://images2.dwell.com/photos/6063391372700811264/6133587238509654016/original.jpg?ar=1:1&fit=crop", content: "Kitchens offer opportunities for personalization and expression of style. From cabinetry and countertops to fixtures and finishes, homeowners can customize their kitchens to reflect their taste, preferences, and lifestyle, creating a space that feels uniquely theirs."}],
  images: [
      {img: "https://www.thespruce.com/thmb/9BN_XqvVZVRGnY246ue9h9_7nJE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kitchen-island-ideas-5211577-hero-9708dd3031434ea4b97da0c0082d0093.jpg", heading: "Island"},
      {img: "https://www.southernliving.com/thmb/IKhu0DWco-m4IVGgJzpxVCfMotU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hm_133d5b44b41a4a55_spcms_mo_kb-1-a000c91fb22b4f55821b402adc0f3c0d.jpg", heading: "Square"},
      {img: "https://www.thespruce.com/thmb/Plr9bi32zkTyPgxrdFWyG-U5uLM=/2500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20201016_BeccaInteriors_Southampton-12-05804a4b4db6441eb16af7617793e928.jpg", heading: "French country"},
      {img: "https://www.ulcdn.net/media/collection%20and%20listing/U_shaped_modular_kitchen.jpg?1694516900", heading: "L-Shaped"},
      {img: "https://www.ulcdn.net/media/collection%20and%20listing/The_right_kitchen_design_for_your_kitchen.jpg?1694421870", heading: "Modular"},
      {img: "https://www.mydomaine.com/thmb/8BRHy-6VhQr7dCYd2RPLnLq_io4=/5323x0/filters:no_upscale():strip_icc()/DesignWorks-0de9c744887641aea39f0a5f31a47dce.jpg", heading: "Cosmos"},
  ]
},  
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
