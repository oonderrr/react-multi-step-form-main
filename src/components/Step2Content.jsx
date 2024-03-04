const Step2Content = ({ src, name, price}) => {
  return(
      <>
        <div className="border border-light-gray w-40 h-40 rounded-lg hover:border-purplish-blue duration-300 grid content-between">
            <img className="m-3" src={src} alt=""/>
            <div className="m-3">
                <h3 className="font-bold">{name}</h3>
                <p className="text-sm text-cool-gray">{price}</p>
            </div>
        </div>
      </>
  )
}

export default Step2Content