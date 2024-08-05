import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { supabase } from "./supabase"
export default function Form() {
    const navigate = useNavigate()
    const [form, setForm] = useState({name:"", image_link:"", description:"", youtube:"", instagram:"", discord:""})
    const handleChange = (e) => {
        // console.log(e)
        const [name, value]= [ e.target.name, e.target.value ]
        setForm({...form, [name]:value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let {data, error} = await supabase.from('creators').insert(form)

        if (error) {
            console.error("Error creating creator: ", error)
        }
        else{
            console.log('Creator Added')
            navigate('/')
        }

    }

    return (
        <>
            <div className="rowDiv">
                <button>
                    <Link to="/">Home</Link>
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Creator Name: </label>
                <input type="text" placeholder="Name"  name="name" onChange={handleChange}/>
                <label htmlFor="img">Image</label>
                <input type="text" placeholder="Insert Image Link" name="image_link" onChange={handleChange}/>
                <label htmlFor="desc">Description</label>
                <input type="textarea" placeholder="Insert Description" name="description" onChange={handleChange}/>
                <label htmlFor="youtube">Insert Youtube Username </label>
                <input type="text" placeholder="anonymous picadilly" name="youtube" onChange={handleChange}/>
                <label htmlFor="instagram">Insert Instagram Username</label>
                <input type="text" placeholder="anonymous raccoon" name="instagram" onChange={handleChange}/>
                <label htmlFor="discord">Insert Discord Username</label>
                <input type="text" placeholder="anonymous cricket" name="discord" onChange={handleChange}/>
                <button type="submit" id="submitButton">Submit</button>
            </form>
        </>
    )
}