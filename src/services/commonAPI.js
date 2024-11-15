import axios from "axios"


const commonAPI = async (httpMethod, url, reqBody,reqHeader) => {
    const reqconfig = {
        method: httpMethod,
        url,
        data: reqBody,
        headers: reqHeader 
    }
    return await axios(reqconfig).then(res => {
        return res
    }).catch(err => {
        return err
    })

}

export default commonAPI