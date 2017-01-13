const defaultData = {
    projects: {
        isLoading: false
    }
};

const defaultStore = (store) => {
    if (store) {
        return Object.assign(defaultData, store);
    } else {
        return defaultData;
    }
};

export default defaultStore;