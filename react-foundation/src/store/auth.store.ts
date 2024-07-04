import { create } from "zustand";

interface AuthSate {
    status: 'authenticated' | 'unauthenticated' | 'checking';
    token?: string;
    user?: {
        name: string;
        email: string;
    };

    login: (email: string, password: string) => void;
    logout: () => void;

}


export const useAuthStore = create<AuthSate>()((set) => ({

    status: 'checking',
    token: undefined,
    user: undefined,

    login: (email: string, password: string) => {

        set({
            status: 'authenticated',
            token: 'ABC123',
            user: {
                name: 'Doe',
                email
            }
        })

    },

    logout: () => {

        set({
            status: 'unauthenticated',
            token: undefined,
            user: undefined
        })

    }


}));