import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"


const PaymentDetails=()=>{
    const {email}=useParams()
    console.log(email)
    useEffect(()=>{
      axios.get(`http://localhost:5000/get_doctor_payment/${email}`)
      .then(res=>console.log(res.data))
    },[])
    return(
        <div>Here will be payment detail</div>
    )
}
export default PaymentDetails