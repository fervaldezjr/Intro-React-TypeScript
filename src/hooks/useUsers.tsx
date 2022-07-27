import { useState, useRef, useEffect } from 'react';
import { requestApi } from '../api/request';
import { RequestList, User } from '../interfaces/request.interface';

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([])

    const pageRef = useRef(1)

    useEffect(() => {
      // Llamado a API para obtener los usuarios
      uploadUsers()
    }, [])

    const uploadUsers = async() => {
        const res = await requestApi.get<RequestList>('/users', {
            params: {
                page: pageRef.current,
                per_page: 10
            }
        })

        if (res.data.data.length > 0) {
            setUsers(res.data.data)
        } else {
            pageRef.current--
            console.log('No hay más usuarios')
        }

        setUsers(res.data.data)
    }

    const nextPage = () => {
        pageRef.current++
        uploadUsers()

    }

    const backPage = () => {
        pageRef.current > 1 ? pageRef.current-- : pageRef.current = 1
        uploadUsers()
    }

    return {
        users,
        nextPage,
        backPage
    }
}