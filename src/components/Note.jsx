export default function Note({...details}) {

    const section = details.section
    const grade = details.grade

    return (
        <>
        <p>{section}</p>
        <p>{grade}</p>
        </>
    )
}