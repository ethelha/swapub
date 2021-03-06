import axios from 'axios'
import qs from 'qs';

//打開Option後加上去
const url = "api/"
//changeData(changeInfo.FirstName,changeInfo.LastName,changeInfo.City,changeInfo.Country,changeInfo.Mobile)

export default{
    CdnUrl:"https://d11am61bl9q9du.cloudfront.net",
    
    async getToken() {
      await axios.post(url + 'PeformLogon', qs.stringify({
        Email: "evilgame389@gmail.com",
        Password: "evilgame0",
        Type: '1',
        Version: '28'
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'appid': 'TestAppID_3',
          'AppVersion':'2.14.0'

        }
      }).then((res) => {
        localStorage.setItem('api_token', res.data.Token)
      })
    },
    async post(api,data,token,param){
        await axios.post(url + api + '?accessToken=' + token + param,qs.stringify(data), {headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
      'appid':'TestAppID_3',
      'AppVersion':'2.14.0'
			}}).then((res) => {
            console.log(res)
          })
          .catch((error) =>{
            console.log(error)
          }) 
    },
    async postJSON(api,data,token,param){
      await axios.post(url + api + '?accessToken=' + token + param,data, {headers: {
    'Content-Type': 'application/json',
    'appid':'TestAppID_3',
    'AppVersion':'2.14.0'
    }}).then((res) => {
          console.log(res)
        })
        .catch((error) =>{
          console.log(error)
        }) 
    },
    async get(api,token,param){
        axios.defaults.headers.get['appid'] = 'TestAppID_3'
        axios.defaults.headers.get['AppVersion'] = '2.14.0'
        var response = await axios.get(url + api + '?accessToken=' + token + param)
        .then((res) => {
                return res.data
        })
        .catch((error) =>{
        })
        return response 
    },
    async put(api,data,token,param){
        var response = await axios.put(url + api +'?accessToken=' + token + param,qs.stringify(data), {headers: {
      'appid':'TestAppID_3',
      'AppVersion':'2.14.0'
			}}).then((res) => {
                console.log(res)
                
        })
        .catch((error) =>{
        })
    },
    delete(){

    }
}