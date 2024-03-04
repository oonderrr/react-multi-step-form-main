const Step4 = () => {
  return(
      <>
          <div className="m-6">
              <h1 className="font-bold text-4xl text-marine-blue">Finishing up</h1>
              <p className="text-cool-gray">Double-check eveything looks OK before confirming.</p>
              <div className="w-full h-16 bg-magnolia flex items-center pl-4 my-4">
                  <h2 className="font-medium text-marine-blue">(montly)</h2>
              </div>
              <hr/>
              <div className="w-full h-16 flex items-center px-4 justify-between">
                  <h2 className="text-cool-gray text-md">Total (per mothly)</h2>
                  <h2 className="text-purplish-blue font-bold">+$/mo</h2>
              </div>
          </div>
      </>
  )
}

export default Step4