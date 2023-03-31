export const addData = (data) => {
    // console.log('adding data', data);
    return {
        type: 'AddData',
        payload: data
    }
}

export const ClearData = (data) => {
    console.log('......................', data)
    return {
        type: 'ClearData',
        payload: data
    }
}