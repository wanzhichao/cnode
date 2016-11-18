import fetch from 'isomorphic-fetch';
import Util from '../util/util';
//列表请求参数
const searchKey = {
    page: 1,
    limit: 20,
    tab: 'all',
    mdrender: true
};
function loadAfter(text, filter, query, json){
    return {
        type: text,
        filter: filter,
        query: query,
        json
    }
}
function loadDetail(json) {
    return{
        type: "detail",
        json
    }
}
//显示、隐藏导航条
export function showSlideBar(text) {
    return {
        type: text
    }
}
//获取问答列表
export function getListDate(text, filter, query){
    if(query) {     //修改查询条件
        searchKey.tab = query;
    }
    if(filter == "add") { //下拉加载
        searchKey.limit += 10;
    }else{  //打开新页面
        searchKey.limit = 20;
    }
    var paramVal = Util.param(searchKey);
    const searchParam = paramVal.substring(0, paramVal.length-1); //拼凑查询参数
    return (dispatch) => {
        fetch("https://cnodejs.org/api/v1/topics?"+searchParam)
        .then(response => response.json())
        .then(json => {
            dispatch(loadAfter(text, filter, query, json))
        })
    }
}
//获取详情页内容
export function getDetail(topicId){
    return (dispatch) => {
        fetch("https://cnodejs.org/api/v1/topic/"+topicId)
        .then(response => response.json())
        .then(json => {
            dispatch(loadDetail(json))
        })
    }
}