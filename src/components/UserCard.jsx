export default function UserCard({children,...card}) {
    return (
        <>
        <div >
            <img src= {card.image}/>
            <p>{card.name}</p>
            <p>{card.age}</p>
            <p>{card.email}</p>
            {children}
        </div>
        </>
    )
}