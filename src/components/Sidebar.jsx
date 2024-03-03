import SidebarContent from "./SidebarContent.jsx";

const Sidebar = () => {
  return(
      <>
          <div className="flex basis-1/3 h-full rounded-lg">
              <img className="object-cover rounded-lg" src="assets/images/bg-sidebar-desktop.svg" alt="Sidebar"/>
              <div className="absolute pl-6 pt-4">
                  <SidebarContent
                      number="1"
                      pageName="YOUR INFO"/>

                  <SidebarContent
                      number="2"
                      pageName="SELECT PLAN"/>

                  <SidebarContent
                      number="3"
                      pageName="ADD-ONS"/>

                  <SidebarContent
                      number="4"
                      pageName="SUMMARY"/>
              </div>
          </div>
      </>
  )
}

export default Sidebar