import axios from 'axios';
import {SUCC_CODE,HOME_RECOMMEND_PAGE_SIZE,TIMEOUT}from './config.js';

export const getHomeRecommend=(currentPage=1,isMaster,pageSize=HOME_RECOMMEND_PAGE_SIZE)=>{
    var json={
        "currentPage":currentPage,
        "pageSize":pageSize,
        "params":{
            "del_flag":'0'
        }
    }
    if(isMaster){
        json["isMaster"]=isMaster;
    }
    console.log(json);
    return axios({
        method:"POST",
        timeout:TIMEOUT,
        url:'http://localhost:8089/spu/getPage',
        data:json
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
            console.log("hh:"+err);
    })
}