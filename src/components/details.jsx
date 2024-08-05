import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import style from './card.module.css'

export default function Details({  }) {
    let params = useParams();
    let location = useLocation();
    let creator = location.state || {}
    let userID = params.id
    useEffect(()=>{
        console.log(params)
        console.log(creator)
    }, [])

    return (
        <>
            <section className={style.detailsCard}>
                <div className={style.detailsImageDiv}>
                    <img src={creator.image_link} alt="" className={style.detailsCardImage} />
                </div>
                <div className={style.detailsDiv}>
                    <p className={style.iconsParagraph}>
                        <a href={`https://www.discord.com/${creator.discord}`} target="_blank"><img src="/icons8-discord.svg" alt="" /></a>
                        <a href={`https://www.instagram.com/${creator.instagram}`} target="_blank" ><img src="/icons8-instagram.svg" alt="" /></a>
                        <a href={`https://www.youtube.com/${creator.youtube}`} target="_blank"><img src="/icons8-youtube.svg" alt="" /></a>
                    </p>
                    <p>{creator.description}</p>
                </div>
            </section>
        </>
    )
}