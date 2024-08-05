import Gallery from './components/gallery'
import './App.css'
import { supabase } from './components/supabase'
import { useEffect, useState } from 'react'

export default function App({}) {
  const [creators, setCreators] = useState([])

  useEffect(() => {
    const getData = async () => {
      let {data, error} = await supabase.from("creators").select()
      if (error){
        console.error("Error getting data: ", error)
      }
      console.log(data)
      setCreators(data)
    }
    getData()
  }, [])
  

  return (
    <>
      <Gallery creators={creators} />
    </>
  )
}