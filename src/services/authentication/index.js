/**
 * 
 * @param {string} user 
 * @param {string | null} pass 
 */
 async function Signin(user, pass){
    if (!user || !pass) {
        throw new Error('Missed required fields');
        
    }

    return true
}

export const AuthenticationService = {
    Signin
}
