import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { supabase } from "./supabase";

export default function Edit(){
    const navigate = useNavigate()
    const location = useLocation()
    const creator = location.state 
    let params = useParams()
    let userID = parseInt(params.id)
    const [form, setForm] = useState(creator)
    const handleChange = (e) => {
        // console.log(e)
        const [name, value]= [ e.target.name, e.target.value ]
        setForm({...form, [name]:value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form)
        const {data, error} = await supabase.from("creators").update(form).eq('id', userID)

        if (error){
            console.error("Error updating user: ", error)
        }
        else {
            console.log('User updated with id: ', userID)
            navigate("/")
        }
    }
    const handleDelete = async () => {
        let {data, error} = await supabase.from("creators").delete().eq('id', userID)

        if (error){
            console.error("Error deleting user: ", userID)
        }
        else {
            console.log("User deleted with id: ", userID)
            navigate('/')
        }
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Creator Name: </label>
                <input type="text" defaultValue={form.name}  name="name" onChange={handleChange}/>
                <label htmlFor="img">Image</label>
                <input type="text" defaultValue={form.image_link} placeholder="Insert Image Link" name="image_link" onChange={handleChange}/>
                <label htmlFor="desc">Description</label>
                <input type="text" defaultValue={form.description} placeholder="Insert Description" name="description" onChange={handleChange}/>
                <label htmlFor="youtube">Insert Youtube Username</label>
                <input type="text" defaultValue={form.youtube} placeholder="https://www.youtube.com/w2rYkkO9j" name="youtube" onChange={handleChange}/>
                <label htmlFor="instagram">Insert Instagram Username</label>
                <input type="text" defaultValue={form.instagram} placeholder="https://www.instagram.com/w2rYkkO9j" name="instagram" onChange={handleChange}/>
                <label htmlFor="discord">Insert Discord Username</label>
                <input type="text" defaultValue={form.discord} placeholder="https://www.discord.com/w2rYkkO9j" name="discord" onChange={handleChange}/>
                <div className="row">
                    <button type="submit" className="submitButton">Submit</button>
                    <button className="submitButton" onClick={handleDelete}>Delete</button>
                </div>
            </form>
        </>
    )
}