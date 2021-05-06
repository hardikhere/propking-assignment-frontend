import axiosInstance from "./axiosInstance"
import APIS from "./endpoints"

const isAuthenticated = async () => {
    return await axiosInstance.get(APIS.checkAuth)
        .then(res => {
            if (res.data.success) {
                return {
                    success: true,
                    id: res.data.data
                }
            } else return {
                success: false,
            }
        }).catch(err => {
            return {
                success: false
            }
        })
};

export default isAuthenticated;