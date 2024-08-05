import Card from "./card"

export default function Gallery({ creators }){

    return (
        <div className="gallery">
            {
                creators.map((creator, index) => {
                    return <Card key={index} data={creator} />
                })
            }
        </div>
    )
}