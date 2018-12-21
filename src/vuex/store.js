//引入Vue
import Vue from 'vue'
import Vuex from 'vuex'

//注册Vuex
Vue.use(Vuex)

//状态
const state = {
    userInfo: JSON.parse(sessionStorage.getItem('userinfo'))
}

const mutations = {
    Save_userinfo(state, data) {
        //把用户数据存入本地存储
        sessionStorage.setItem('userinfo', JSON.stringify(data));
        //更新数据
        state.userInfo = data;

    }
}
//创建store仓库暴露出去
export default new Vuex.Store({
    state,
    mutations
})