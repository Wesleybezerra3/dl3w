import { useParams } from "react-router-dom";


export const ClassDinamic = ()=>{

    const {name} = useParams();

    return (
        <>
        <section className="container">
            <h1>{name}</h1>
        </section>
        </>
    )
}