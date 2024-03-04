import Step3Content from "./Step3Content.jsx";
const Step3 = () => {
  return(
      <>
          <div className="m-6">
              <h1 className="font-bold text-4xl text-marine-blue">Pick add-ons</h1>
              <p className="text-cool-gray">Add-ons help enhance your gaming experience.</p>
              <Step3Content
                name={"Online service"}
                info={"Access to multiplayer games"}
                price={"+1/mo"}/>

              <Step3Content
                  name={"Larger storage"}
                  info={"Extra 1TB of cloud save"}
                  price={"+2/mo"}/>

              <Step3Content
                  name={"Customizable profile"}
                  info={"Custom theme on your profile"}
                  price={"+2/mo"}/>
          </div>
      </>
  )
}

export default Step3