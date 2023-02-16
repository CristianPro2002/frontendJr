const BASE = 'http://localhost:8000/';

export const generalEnvironments = {
    BASE,
    API: {
        token: `${BASE}token/`,
        tokenRefresh: `${BASE}token/refresh/`,
        tokenVerify: `${BASE}token/verify/`,
        UsersApi : {
            UsersLogin: `${BASE}account/login/`,
            UsersLogout: `${BASE}account/logout/`,
            UsersRegister: `${BASE}account/users/register/`,
            Users: `${BASE}account/users/`,
        },
        MultimediaApi: {
            worships: `${BASE}multimedia/worship/`,
        }
        
    }
};