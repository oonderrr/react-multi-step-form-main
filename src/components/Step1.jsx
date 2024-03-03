import Step1Content from "./Step1Content.jsx";
const Step1 = () => {
  return(
      <>
          <div className="m-6">
              <h1 className="font-bold text-4xl text-marine-blue">Personal Info</h1>
              <p className="text-cool-gray">Please provide your name, email address, and phone number.</p>
              <Step1Content name="Name"
                            placeholder="Enter your name"/>

              <Step1Content name="Email Address"
                            placeholder="e.g. stephenking@lorem.com"/>

              <Step1Content name="Phone Number"
                            placeholder="e.g. +1 234 567 890"/>
          </div>


      </>
  )
}

export default Step1