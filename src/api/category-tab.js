import axios from 'axios';
import {SUCC_CODE} from './config.js';
export const getCategoryTab=()=>{
    return axios.get('http://localhost:8089/brands/list',{
    params:{}
    }).then(res=>{
        if(res.data.code===SUCC_CODE)
        {
            console.log('ok');
            console.log(res.data);
            return res.data;
        }
        throw new Error("没有成功获取到数据！");
    })
}