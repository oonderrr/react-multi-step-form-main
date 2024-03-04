import Sidebar from "./Sidebar/Sidebar.jsx";
import Step1 from "./Step1/Step1.jsx";
import Step2 from "./Step2/Step2.jsx";
import Step3 from "./Step3/Step3.jsx";
import Step4 from "./Step4/Step4.jsx";
import {useState} from "react";
const MultiStepForm = () => {
    const [currentPage, setCurrentPage] = useState(0)

    const handleNext = () => {
        if (currentPage < 3){
            setCurrentPage(currentPage + 1)
        }
    }
    const handleBack = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const renderCurrentPage = () => {
        switch (currentPage) {
            case 0:
                return <Step1/>
            case 1:
                return <Step2/>
            case 2:
                return <Step3/>
            case 3:
                return <Step4/>
        }
    }

    const renderNavigationButtons = () => {
        return (
            <div className="flex justify-between mb-6">
                {currentPage > 0 && ( // Conditionally render "Go Back" button
                    <button onClick={handleBack} className="ml-6 text-cool-gray hover:text-marine-blue">Go Back</button>
                )}
                {currentPage < 3 && ( // Conditionally render "Next Step" button
                    <button onClick={handleNext} className="w-32 h-11 bg-marine-blue text-white rounded-lg mr-6">Next Step</button>
                )}
                {currentPage === 3 && ( // Conditionally render "Confirm" button on last step
                    <button className="w-32 h-11 bg-green-500 text-white rounded-lg mr-6">Confirm</button>
                )}
            </div>
        );
    };

    return(
      <>
        <div className="flex bg-white h-5/6 w-[60rem] rounded-xl shadow-2xl space-x-3 p-3">
            <Sidebar/>
          <div className="basis-2/3 h-full grid content-between">
              {renderCurrentPage()}
              {renderNavigationButtons()}
          </div>
        </div>
      </>
    )
}

export default MultiStepForm