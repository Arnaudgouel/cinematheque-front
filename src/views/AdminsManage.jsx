import { useParams } from "react-router-dom"
import { AdminForm } from "../components"


const AdminsManage = () => {
  const { email } = useParams()
  return <AdminForm emailProp={email}/>
}

export { AdminsManage }