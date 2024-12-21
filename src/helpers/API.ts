import { ISignIn } from "../Pages/SignInPage.tsx/SignInPage.interfaces"

const URL_DOMAIN = 'http://15meets.com:8000/'
const URL_AUTH = 'api/v1/auth'
// const URL_MEETINGS = 'api/v1/meetings'



export const API = {
	auth: {
		login: async (userData: ISignIn) => {
			try {
				const response = await fetch(`${URL_DOMAIN}${URL_AUTH}/login`, {
					method: 'POST',
					headers: {
						ContentType: 'application/x-www-form-urlencoded'
					},
					body: new URLSearchParams(userData)
				})
				// let tokens
				if (response.ok) {
					// tokens = await response.json()
					return response.json()
				}

			} catch (error) {
				//@ts-ignore
				throw Error(error)
			}
		}
	}
}