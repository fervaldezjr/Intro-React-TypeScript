import { useUsers } from '../hooks/useUsers';
import { User } from '../interfaces/request.interface';

const Usuarios = () => {

    const { users, nextPage, backPage } = useUsers()

    const renderUsers = ({id, first_name, last_name, email, avatar}: User) => {
        return (
            <tr key={id.toString()}>
                <td>
                    <img 
                    src={avatar} 
                    alt={first_name} 
                    style={{width: 40, borderRadius: 100}}
                    />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    } 

  return (
    <>
        <h3>Usuarios</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map( user => renderUsers(user) )
                }
            </tbody>
        </table>

        <button className='btn btn-primary' onClick={backPage}>
            Anteriores
        </button>

        &nbsp;

        <button className='btn btn-primary' onClick={nextPage}>
            Siguientes
        </button>
    </>
  )
}

export default Usuarios