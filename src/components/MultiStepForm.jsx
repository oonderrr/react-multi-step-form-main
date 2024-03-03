import Sidebar from "./Sidebar.jsx";
const MultiStepForm = () => {
  return(
      <>
        <div className="flex bg-white h-5/6 w-5/6 m-10 rounded-lg shadow-xl space-x-3 p-3">
            <Sidebar/>
          <div className="basis-2/3 bg-blue-300 h-full">

          </div>
        </div>

      </>
  )
}

export default MultiStepForm