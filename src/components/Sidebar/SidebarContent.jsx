const SidebarContent = ({ number, pageName}) => {
  return(
      <>

          <div className="flex text-white pt-6">
              <div className="w-9 h-9 rounded-full border border-white grid place-content-center">
                  <div>
                      {number}
                  </div>
              </div>
              <div className="ml-2">
                  <h3 className="text-xs text-light-gray">STEP {number}</h3>
                  <h2 className="text-sm font-bold">{pageName}</h2>
              </div>
          </div>
      </>
  )
}

export default SidebarContent