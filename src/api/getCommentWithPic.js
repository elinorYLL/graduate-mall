import axios from 'axios';
import {SUCC_CODE} from './config.js';

export const getCommentWithPic=(spuId)=>{
    var json={
        "spuId":spuId,
        "params":{

        }
    }
    return axios({
        method:"POST",
        url:'http://localhost:8089/comment/getCommentWithPic',
        data:json
    })
    .then(res=>{
         console.log(res);
         if(res.data.code===SUCC_CODE){
              console.log('ok');
                return res.data;
        }
         throw new Error("没有成功获取到comment有图数据");
    })
}