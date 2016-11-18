
import { combineReducers } from 'redux';

//初始state
let initial= {
    visible: "CLOSE",
    query: 'all',
    operate: 'new',
    list: {}
};
//控制导航条
function slideBar(state = initial, action){

            switch (action.type) {
                case "CLOSE":
                    return Object.assign({}, state, {
                        visible: "CLOSE"
                    });
                case "OPEN":
                    return Object.assign({}, state, {
                        visible: "OPEN"
                    });
                case "GET":
                    return getList(state, action);
                default:
                    return initial;
            }
        }
//请求列表数据
function getList(state, action) {
    switch (action.filter) {
        case "new":
            return Object.assign({}, state, {
                query: action.query,
                list: action.json,
                operate: "new"
            });
        case "add":
            return Object.assign({}, state, {
                list: action.json,
                operate: "add"
            });
        default:
            return state;
    }
}
//获取详情数据
function getDetail(state = {}, action){
    switch (action.type) {
        case "detail":
            return action.json;
        default:
            return state;
    }
}

//combineReducers
const nodeReducer = combineReducers({
    slideBar,
    getDetail
});
export default nodeReducer;