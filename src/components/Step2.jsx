import Step2Content from "./Step2Content.jsx";
const Step2 = () => {
    return(
        <>
            <div className="m-6">
                <h1 className="font-bold text-4xl text-marine-blue">Select your plan</h1>
                <p className="text-cool-gray">You have the option of monthly or yearly billing</p>
                <div className="flex space-x-3 mt-5">
                    <Step2Content
                        src={"/assets/images/icon-arcade.svg"}
                        name={"Arcade"}
                        price={"$9/mo"}/>

                    <Step2Content
                        src={"/assets/images/icon-advanced.svg"}
                        name={"Advanced"}
                        price={"$12/mo"}/>

                    <Step2Content
                        src={"/assets/images/icon-pro.svg"}
                        name={"Pro"}
                        price={"$15/mo"}/>
                </div>
                <div className="mt-5">
                    <button className="border border-light-gray w-24 h-11 rounded-lg mr-5 active:border-purplish-blue active:text-purplish-blue">Montly</button>
                    <button className="border border-light-gray w-20 h-11 rounded-lg">Yearly</button>

                </div>

            </div>
        </>
    )
}

export default Step2