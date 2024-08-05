import { Link } from "react-router-dom"
import style from "./card.module.css"

export default function Card({ data }) {
    return (
        <div className={style.card}>
            <div className={style.imageDiv}>
                <img id={style.profileImg} src={data.image_link} width={1} height={1} alt="" />
                {/* <a href="https://www.flaticon.com/free-icons/edit" title="edit icons">Edit icons created by Kiranshastry - Flaticon</a> */}
                <div className={style.linkDiv}>
                    <Link to={`/details/${data.id}`} state={data}><img src="/icons8-info.svg" alt="Creator Information" className={style.icon}/></Link>
                    <Link to={`/edit/${data.id}`} state={data}><img src="/edit.png" alt="" className={style.icon} /></Link>
                </div>
            </div>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
        </div>
    )
}