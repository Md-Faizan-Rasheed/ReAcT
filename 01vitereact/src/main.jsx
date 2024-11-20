import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  const username = "chai or code";
  return(
    <div>
      <h1>Customo App {username}</h1>
      <p>test paragraph</p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
    <MyApp/>
    // MyApp() 
)
