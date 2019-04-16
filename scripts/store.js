let _state = {
    users : null
};

export default {
    getState() {
        return {..._state};
    },

    setState(newState) {
        _state = {..._state, ...newState};
    }
};