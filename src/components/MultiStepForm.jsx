import Sidebar from "./Sidebar.jsx";
import SidebarContent from "./SidebarContent.jsx";
import Step1 from "./Step1.jsx";
const MultiStepForm = () => {
  return(
      <>
        <div className="flex bg-white h-5/6 w-5/6 m-10 rounded-lg shadow-xl space-x-3 p-3">
            <Sidebar/>
          <div className="basis-2/3  h-full justify-center">
            <Step1/>
          </div>
        </div>
      </>
  )
}

export default MultiStepForm