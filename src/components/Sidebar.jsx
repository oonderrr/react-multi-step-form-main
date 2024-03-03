import SidebarContent from "./SidebarContent.jsx";

const Sidebar = () => {
  return(
      <>
          <div className="flex basis-1/3 h-full rounded-lg">
              <img className="object-cover rounded-lg z-0" src="assets/images/bg-sidebar-desktop.svg" alt="Sidebar"/>
              <SidebarContent/>
          </div>
      </>
  )
}

export default Sidebar