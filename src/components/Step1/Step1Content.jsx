const Step1Content = ({name, placeholder}) => {
  return(
      <>
          <div className="mt-4">
              <h3 className="text-sm text-marine-blue">{name}</h3>
              <input className="w-full h-12 border border-light-gray rounded-lg placeholder:pl-3 hover:border-purplish-blue"
                     type="text"
                     placeholder={placeholder}/>
          </div>

      </>
  )
}

export default Step1Content