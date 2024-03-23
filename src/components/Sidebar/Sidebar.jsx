import SidebarBG from "/assets/images/bg-sidebar-desktop.svg"
import { Items } from "./Constant.jsx"


const Sidebar = ({ pageNumber }) => {
  return(
      <>
          <div className="basis-1/3 h-full bg-cover bg-center rounded-lg" style={{backgroundImage: `url(${SidebarBG})`}}>
              <div className="px-6">
                  {
                      Items.map((item) =>
                          <div className="flex text-white pt-6" key={item.id}>
                              <div className={`w-9 h-9 rounded-full border border-white flex items-center justify-center ${item.number - 1 === pageNumber ? "bg-white text-purplish-blue" : ""}`}>
                                  {item.number}
                              </div>
                              <div className="ml-2">
                                  <h3 className="text-xs text-light-gray">STEP {item.number}</h3>
                                  <h2 className="text-sm font-bold">{item.title}</h2>
                              </div>
                          </div>
                      )
                  }
              </div>
          </div>
      </>
  )
}

export default Sidebar