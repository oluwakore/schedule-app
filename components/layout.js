
import ActiveSchedule from "./activeSchedule"
import Navbar from "./navbar"

const Layout = ({children}) => {
 return (
   <>
   <Navbar />
   <ActiveSchedule />
   {children}
   </>
 )
}

export default Layout


















































