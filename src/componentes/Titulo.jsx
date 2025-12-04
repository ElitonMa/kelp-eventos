
export default function Titulo (props) {
    return (
        <>
        <link href="https://fonts.googleapis.com/css?family=Solitreo" rel="stylesheet" />
        <h1 id={props.id}> {props.titulo} </h1>
        </>
    )
}