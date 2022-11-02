import { useState, useCallback } from 'react'
import { userSelf } from 'src/api/user'
import { atom, useAtom } from 'jotai'
import { useAtomDevtools } from 'jotai/devtools'

import { IUserSelf } from 'src/interfaces/user.interfaces'
import axios from 'axios'

//next import
import { useRouter } from 'next/router'

const initialSessionState: IUserSelf = {
    user: {
        name: '',
    }
}

const initialLoadingState = true

const sessionAtom = atom<IUserSelf>(initialSessionState)
const loadingSession = atom(initialLoadingState)

sessionAtom.debugLabel = 'SESSION'

export const useSession = () => {
    // hooks
    const [session, updateSession] = useAtom(sessionAtom)
    const [isLoading, setLoading] = useAtom(loadingSession)
    const [error, setError] = useState(false)
    const router = useRouter()

    //devtools jotai
    useAtomDevtools(sessionAtom)

    const getSession = useCallback(async () => {
        try {
            setError(false)
            setLoading(true)
            const session = await userSelf()
            updateSession(session)

        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 401) {
                    router.replace('/auth/login')
                }
            }
            setError(true)
        } finally {
            setLoading(false)
        }
    }, [router, setLoading, updateSession])

    const getRoles = () => {
        const roles = {
            admin: 'Administrador',
            resident: 'Residente'
        }

        //@ts-ignore
        return roles[session.user.roles[0]]
    }

    return {
        getSession,
        session,
        isLoading,
        error,
        getRoles
    }
}
