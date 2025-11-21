import { useParams } from "react-router-dom";


export const TeacherDinamic = ()=>{

    const {matricula} = useParams();

    return (
        <>
        <section className="container">
            <h1>{matricula}</h1>
        </section>
        </>
    )
}