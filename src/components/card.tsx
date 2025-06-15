import "./card.css"

interface CardProps{
    atack: number,
    defense: number,
    title: string,
    type: string,
    image: string
}

export function Card({ atack, defense, title, type, image }: CardProps){
    return(
        <div className="card">
            <img/>
            <h2></h2>
            <p>Nome: </p>
            <p>Tipo: </p>
            <p>Atk: </p>
            <p>Def: </p>
        </div>
    )
}