import { useParams } from "react-router-dom"

const IndividualMessage=()=>{
    const {id}=useParams()
    console.log(id)
    return(
        <div>
            {
                <h1>it is params of {id}</h1>
            }
        </div>
    )
}
export default IndividualMessage