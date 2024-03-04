import { Items } from "./Constant.jsx"

const SidebarContent = () => {
  return(
      <>
          {
              Items.map((item) =>
                  <div className="flex text-white pt-6" key={item.id}>
                      <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center">
                          {item.number}
                      </div>
                      <div className="ml-2">
                          <h3 className="text-xs text-light-gray">STEP {item.number}</h3>
                          <h2 className="text-sm font-bold">{item.title}</h2>
                      </div>
                  </div>
              )
          }

      </>
  )
}

export default SidebarContent