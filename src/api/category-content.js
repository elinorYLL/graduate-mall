import axios from 'axios';
import {SUCC_CODE,TIMEOUT} from './config';

const CancelToken = axios.CancelToken;
let cancel;
//获取内容数据（根据侧边栏选项）
//取消前一次请求失败...
export const getCategoryContent=(brandId)=>{
    cancel && cancel('取消了前一次的请求！');
    cancel = null;
    var json={
        "brandId":brandId
    };
    console.log(json);
    return axios({
        method:"POST",
        timeout:TIMEOUT,
        url:'http://localhost:8089/spu/list',
        data:json,
        cancelToken: new CancelToken(function executor(c) {
            cancel = c;
          })
    })
    .then(res=>{
        console.log(res);
        if(res.data.code===SUCC_CODE){
            console.log('ok');
            return res.data;
        }
        throw new Error("没有成功获取到数据");
    })
    .catch(err=>{
        if (axios.isCancel(err)) { // 取消前一次的请求
            console.log(err);
          } else {
            // handle error
            console.log("我就不取消,hh:"+err);
          }
    })
}