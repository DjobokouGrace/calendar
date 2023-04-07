import   axios  from  "axios";
import   {getToken,  removeToken} from  ""
const   baseURL  =  "http://localhost:8000";

const  instance  =  axios.create(
    {
        baseURL:`${baseURL}/api`
    }
);

instance.interceptors.request.use(
    async (req)=>{
        const   now  =  new  Date();
        let  token =  getToken();


        if(!token || now >  new  Date()(token.exp)){

            //remove  token
            removeToken()
            return  req
        }
        req.headers.Authorization = `Bearer ${token.acess_token}`

        return   req
    }
)

export  const   cleanInstance  =  axios.create(
        {
            baseURL: `${baseURL}/api`
        }

    )

export default instance