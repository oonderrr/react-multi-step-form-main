const Step1Content = ({name, placeholder,type}) => {
  return(
      <>
          <div className="mt-4">
              <h3 className="text-sm text-marine-blue">{name}</h3>
              <input
                  className="w-full h-12 border border-light-gray rounded-lg placeholder:pl-3 hover:border-purplish-blue peer"
                  type={type}
                  placeholder={placeholder}/>
              <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                  Please provide a valid {type === "email" ? "email address." : "phone number"}
              </p>
          </div>

      </>
  )
}

export default Step1Content