import http from '../http-common'

var LOGIN = "/login"
var TEST = "/test"
const login = async () =>{
    var email = "******"
    var password ="*******"
    try {
        const {data} = await  http.post(LOGIN,{email,password});
        return data;
    } catch (error) {
        console.log(error)
    }
     
    //return http.get(TEST);
}
const APICaller ={
    login
}

export default APICaller;