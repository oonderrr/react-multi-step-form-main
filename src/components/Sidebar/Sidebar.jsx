import SidebarContent from "./SidebarContent.jsx";
import SidebarBG from "/assets/images/bg-sidebar-desktop.svg"

const Sidebar = () => {
  return(
      <>
          <div className="basis-1/3 h-full bg-cover bg-center rounded-lg" style={{backgroundImage: `url(${SidebarBG})`}}>
              <div className="px-6">
                  <SidebarContent/>
              </div>
          </div>
      </>
  )
}

export default Sidebar