import "./card.css"

interface CardProps{
    atack: number,
    defense: number,
    name: string,
    type: string,
    image: string
}

export function Card({ atack, defense, name, type, image }: CardProps){
    return(
        <div className="card">
            <img src={image}/>
            <h2>{name}</h2>
            <p>Tipo: {type} </p>
            <p>Atk: {atack}</p>
            <p>Def: {defense}</p>
        </div>
    )
}