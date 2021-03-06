import {
    SHOW_SPIN,
    HIDE_SPIN,
    UPDATE_ERROR_LIST,
    UPDATE_GENERA
} from "./type";
const mutations = {
    [SHOW_SPIN](state) {
        state.spinVisable = true;
    },
    [HIDE_SPIN](state) {
        state.spinVisable = false;
    },
    [UPDATE_ERROR_LIST](state, errorList) {
        state.errorList = Object.assign({}, errorList);
    },
    [UPDATE_GENERA](state, genera) {
        state.genera = Object.assign({}, genera);
    }
};
export default mutations;