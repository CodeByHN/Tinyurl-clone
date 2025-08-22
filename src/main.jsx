// import { createRoot } from "react-dom/client";
// createRoot(document.getElementsByID('root')).render(
//   <BrowseRouter>
//   <router>
//     <Route Path='/' element ={<App />} />
//     <Route Path='/Product/:id'element={<Detail />} />
//     <Route Path='/weather/ :cityname' element={<weather />} />
//       <Route Path='/contact/ :element' element={<contact />} />
//      <Router Path='/dashbord' element= {<AdminLayout><Dashbord /></AdminLayout>} />

//   </router>
//   </BrowseRouter>




import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)


// Ecommerce

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )