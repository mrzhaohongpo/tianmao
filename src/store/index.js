import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import actions from './actions.js';
import mutations from './mutations.js';
import getter from './getter.js';


const store = new Vuex.Store({
    state: {
        useinfo: {
            name: '李立群',
            age: '63',
            gender: '男',
            asset: '500000',
            identity: '演员',
            location: '台湾',
            car: 'BMW'
        }
    },
    getter,
    actions,
    mutations
});
export default store;