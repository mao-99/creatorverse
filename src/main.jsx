import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Form from './components/creatorForm.jsx'
import Layout from './components/layout.jsx'
import Edit from './components/edit.jsx'
import Details from './components/details.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route path='/add' element={<Form />} />
          <Route path='/edit/:id' element={<Edit/>} />
          <Route path='/details/:id' element={<Details/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
</React.StrictMode>
)
