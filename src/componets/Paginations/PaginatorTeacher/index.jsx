import { useAppContext } from '../../../context/AppContext';
import api from '../../../services/api';
import style from './style.module.css'
export const PaginatorTeacher = ({page})=>{
    const {setTeachers} = useAppContext();

    const handlePagination = async(page)=>{
        try{
            if(!page){
                return;
            }
            const response = await api.get("/professores",{
                params: {page}
            });
            console.log(response.data)
            setTeachers(response.data)
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
        <div className={style.containerBtn}>
            <button className={style.btnPage} onClick={()=>handlePagination(page)}>
                {page}
            </button>
        </div>
        </>
    )
}