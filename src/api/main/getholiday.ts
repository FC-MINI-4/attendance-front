import axios, { AxiosRequestConfig } from "axios";

const baseInfo = {
  url:'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService',
  serviceKey:process.env.HOLIDAY_SERVICE_KEY
}

interface IsolDate{
  solYear:number
  solMonth:number
}

export default async function requestHoliday(solYear: number, solMonth: number) {
  try{
    const response : XMLHttpRequest = await axios.get(
      `${baseInfo.url}?ServiceKey=${process.env.HOLIDAY_SERVICE_KEY}&solYear=${solYear}&solMonth=${solMonth}&_type=json`
    )
    return response;
  }
  catch (error) {
    console.error('Request_Fail', error);
  throw error;
  }
}
