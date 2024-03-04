import Sidebar from "./Sidebar.jsx";
import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";
const MultiStepForm = () => {
  return(
      <>
        <div className="flex bg-white h-5/6  m-10 rounded-lg shadow-xl space-x-3 p-3">
            <Sidebar/>
          <div className="basis-2/3 h-full grid content-between">
            <Step3/>
              <div className="flex justify-between mb-6">
                  <button className="ml-6 text-cool-gray hover:text-marine-blue">Go Back</button>
                  <button className="w-32 h-11 bg-marine-blue text-white rounded-lg mr-6">Next Step</button>
              </div>
          </div>
        </div>
      </>
  )
}

export default MultiStepForm