import BnHService from "./BnHomeSerivce/BnHService"
import HSChoose from "./HSChoose/HSChoose"
import HSContact from "./HSContact/HSContact"
import HServiceCard from "./HServiceCard/HServiceCard"

const HomeServices = () => {
  return (
    <div className="font-custom">
        <BnHService></BnHService>
        <HServiceCard></HServiceCard>
        <HSChoose></HSChoose>
        <HSContact></HSContact>
    </div>
  )
}

export default HomeServices
