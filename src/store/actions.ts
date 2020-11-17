import { Person } from "@/model/Person";

export const setGlobalScoreAction = (state: any, score: number) => {
    state.commit('setGlobalScore', score);

};

export const setPersonsAction = (state: any, persons: Person[]) => {
    state.commit('setPersons', persons);
};

export const setPlayersScoreAction = (state: any) => {
    state.commit('setPlayersScore');
};
