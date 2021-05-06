const BASEAPI = "https://propking-backend.herokuapp.com/api/v1";
//const BASEAPI = "http://localhost:8080/api/v1"
const APIS = {
    getLands: BASEAPI + "/lands",
    signup: BASEAPI + '/signup',
    login: BASEAPI + '/login',
    checkAuth: BASEAPI + '/checkToken',
    delete: (lid) => BASEAPI + `/delete/${lid}`,
    update: (lid) => BASEAPI + `/update/${lid}`
};
export default APIS