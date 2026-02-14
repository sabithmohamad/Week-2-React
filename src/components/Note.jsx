export default function Note({...details}) {

    const section = details.section
    const c = details.class

    return (
        <>
        <p>{section}</p>
        <p>{c}</p>
        </>
    )
}