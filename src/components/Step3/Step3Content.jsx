const Step3Content = ({ name, info, price}) => {
  return(
      <>
          <div
              className="w-full h-20 border border-light-gray hover:border-purplish-blue rounded-lg mt-5 flex items-center justify-between px-5">
              <div className="flex items-center">
                  <input type="checkbox"/>
                  <div className="pl-4">
                      <h3 className="text-marine-blue block">{name}</h3>
                      <p className="text-sm text-cool-gray block">{info}</p>
                  </div>
              </div>

              <h4 className="text-purplish-blue font-medium">{price}</h4>
          </div>
      </>
  )
}

export default Step3Content