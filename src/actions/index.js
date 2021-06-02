
export const dataReducer = (sales) => {
    return {
        type: "TABLED",
        payload: sales,
    };
};


export const sortingReducer = () => {
    return {
        type: "SORT_ASCENDING"
    };
};