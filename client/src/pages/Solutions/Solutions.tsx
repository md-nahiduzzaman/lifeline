import SolutionAbout from "./SolutionsAbout/SolutionAbout"
import SolutionsBanner from "./SolutionsBanner/SolutionsBanner"
import SolutionCard from "./SolutionsCard/SolutionCard"
import SolutionsMangment from "./SolutionsMangment/SolutionsMangment"
import SolutionTestimonials from "./SolutionTestimonials/SolutionTestimonials"

const Solutions = () => {
  return (
    <div className="font-custom">
   <SolutionsBanner></SolutionsBanner>
   <SolutionAbout></SolutionAbout>
   <SolutionCard></SolutionCard>
   <SolutionsMangment></SolutionsMangment>
   <SolutionTestimonials></SolutionTestimonials>
    </div>
  )
}

export default Solutions
