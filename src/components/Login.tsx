import { useEffect, useReducer } from "react"

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: '',
}

type LoginPayload = {
    username: string;
    token: string;
    nombre: string;
}

type AuthAction = 
    |{type: 'logout'}
    |{type: 'login', payload: LoginPayload}

const authReducer = (state: AuthState, action: AuthAction): AuthState  => {
    switch (action.type) {
        case 'logout':
            return {
                ...state,
                validando: false,
                token: null,
                username: '',
                nombre: '',
            }

        case 'login':
            
            const { username, nombre } = action.payload

            return {
                ...state,
                validando: false,
                token: '12345',
                username: username,
                nombre: nombre,
            }
    
        default:
            return state;
    }
}

export const Login = () => {
  
    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
      setTimeout(() => {
        dispatch({type: 'logout'})
        }, 1500)
    }, [])

    const handleLogin = () => {
        dispatch({type: 'login', 
        payload: { 
            nombre: 'Fernando',
            username: 'fernando',
            token: '12345',
        }})
    }

    const handleLogOut = () => {
        dispatch({type: 'logout'})
    }
    
    if (validando) { 
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

    return (
    <>
        <h3>Login</h3>

        {
            token
            ? <div className="alert alert-success"> Bienvenido {nombre} </div>
            : <div className="alert alert-danger"> Usuario o contraseña incorrectos </div>
        }

        {
            token
            ? <button className="btn btn-danger" onClick={handleLogOut}>Logout</button>
            : <button className="btn btn-primary" onClick={ handleLogin }>Login</button>
        }
    </>
  )
}
