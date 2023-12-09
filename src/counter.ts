export const counter = (value: number = 0) => {
    let counter = 0;
    const sum = counter + value;
    return {
        sum,
        counter,
    };
};
