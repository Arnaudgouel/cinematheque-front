import { Link, useNavigate } from "react-router-dom"

const AdminRow = ({item}) => {
const navigate = useNavigate()


const handleDeleteClick = (e) => {
  e.stopPropagation()
  var data = new FormData()
  data.append("email", item.email)
  var myInit = { 
    method: 'POST',
    body : data
  };
  fetch("https://127.0.0.1:8000/admins/delete", myInit)
    .then(res => res.json())
    .then(
      (res) => {
        console.log(res)
        if (res === true) {
          // window.location.reload()
          navigate(0)
        }
      }
    )
}

  return (
    <tr onClick={() => navigate(`/admins/update/${item.email}`)} style={{cursor: "pointer"}}>
      <td>{item.email}</td>
      <td>{item.nom}</td>
      <td>{item.prenom}</td>
      <td><div className="btn btn-danger btn-sm" onClick={e => handleDeleteClick(e)}>Supprimer</div></td>
    </tr>
  )
}

export { AdminRow }