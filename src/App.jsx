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

const sectionList = [{
  hero: "https://www.decorilla.com/online-decorating/wp-content/uploads/2021/08/contemporary-hidden-creative-storage-ideas.jpeg",
  images: [
    {
      img1: "https://www.self-build.co.uk/wp-content/uploads/2018/06/Neville-Johnson-storage.jpg",
      img2: "https://media.designcafe.com/wp-content/uploads/2023/12/04095836/storage-unit-designs.jpg",
      img3: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/d63e9359445519.5a224cc4c5378.jpg",
    }
  ],
  content: {
    content1: " home storage is essential for maintaining organization, maximizing space utilization, preserving belongings, ensuring safety, enhancing aesthetics, facilitating efficient daily living, and increasing home value. Investing in quality storage solutions can greatly improve the functionality and livability of a home.",
    content2: "Storage solutions can contribute to the overall aesthetics of a home. Stylish storage furniture, built-in cabinets, and decorative baskets or bins can complement the interior design, adding visual appeal to living spaces.",
    content3: "Effective storage solutions help keep a home organized and clutter-free. Proper organization reduces stress and saves time by making it easier to find items when needed.Storage solutions can contribute to the overall aesthetics of a home. Stylish storage furniture, built-in cabinets, and decorative baskets or bins can complement the interior design, adding visual appeal to living spaces.",
  }
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
      <Route path='/' element={<Dashboard />}/>
      <Route path='/sections' element={<Sections />}/>
      <Route path="*" element={<PageNotFound />} />
      </Routes>
    </sectionStore.Provider>
  )
}

export default App
