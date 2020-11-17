export const getPlayerScore = (state: any, index: number) => {
    return state.persons[index].score;
};

export const getGlobalScore = (state: any) => {
    return state.score;
};

export const getPersons = (state: any) => {
    return state.persons
};

