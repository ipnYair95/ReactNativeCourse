import { testloApi } from "../../config/api/testloApi";
import { User } from "../../domain/entities/user";
import { AuthResponse } from "../../infrastructure/interfaces/auth.response";

const returnUserToken = (data: AuthResponse) => {
    
    const user: User = {
        id: data.id,
        email: data.email,
        fullName: data.fullName,
        isActive: data.isActive,
        roles: data.roles
    }

    return {
        user: user,
        token: data.token
    }

}

export const authLogin = async (email: string, password: string) => {

    email = email.trim().toLowerCase();

    try {

        const { data } = await testloApi.post<AuthResponse>('/auth/login', { email, password });

        return returnUserToken(data);

    } catch (error) {
        console.error(error);
        return null;
    }

}

export const authCheckStatus = async () => {

    try {

       const {data}  = await testloApi.get<AuthResponse>('/auth/check-status');

       return returnUserToken(data);
        
    } catch (error) {
        return null;
    }

}