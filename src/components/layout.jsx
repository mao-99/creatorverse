import { Outlet } from "react-router"
import { Link } from "react-router-dom"
export default function Layout() {
    
    return (
        <>
            <main className='main'>
                <section className='intro'>
                <h1 className='textHeader'>Creatorverse</h1>
                <section className='introButtons'>
                    <button className='rowButton'><Link to="/">View All Creators</Link></button>
                    <button className='rowButton'><Link to="/add">Add A Creator</Link></button>
                </section>
                </section>
                <section className="bridge">
                <Outlet />
                </section>
            </main>
        </>
    )
}