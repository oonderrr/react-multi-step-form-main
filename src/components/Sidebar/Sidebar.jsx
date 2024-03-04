import SidebarContent from "./SidebarContent.jsx";
import SidebarBG from "/assets/images/bg-sidebar-desktop.svg"

//<SidebarContent
//                       number="1"
//                       pageName="YOUR INFO"/>
//
//                   <SidebarContent
//                       number="2"
//                       pageName="SELECT PLAN"/>
//
//                   <SidebarContent
//                       number="3"
//                       pageName="ADD-ONS"/>
//
//                   <SidebarContent
//                       number="4"
//                       pageName="SUMMARY"/>

const Sidebar = () => {
  return(
      <>
          <div className="flex basis-1/3 w-96 h-full rounded-lg bg-cover" style={{backgroundImage: `url(${SidebarBG})`}}>

              <div className="pl-6">
                  <SidebarContent/>
              </div>
          </div>
      </>
  )
}

export default Sidebar