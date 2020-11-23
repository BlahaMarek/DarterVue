import {createStore} from "vuex";
import {Person} from "@/model/Person";

export const store = createStore({
    state() {
        return {
            score: 301,
            index: 0,
            persons: [
                {
                    id: 1,
                    name: "",
                    score: 301
                }
            ]
        }
    },
    mutations: {
        globalScoreChanged(state: any, score: number) {
            state.score = score;
        },
        playerDefaultScoreChanged(state: any) {
            state.persons.forEach((person: Person) => {
                person.score = +state.score;
            })
        },
        playerAdded(state: any, person: Person) {
            state.persons.push({id: state.persons.length + 1, name: "", score: state.score});
        },
        playerDeleted(state: any, id: number) {
            state.persons = state.persons.filter((person: Person) => person.id != id);
            state.persons.forEach((person: Person, index: number) => {
                person.id = index;
            });
        },
        scoreSubtracted(state: any, num: number) {
            state.persons[state.index].score -= num;
        },
        activePlayerChanged(state: any) {
            state.index = state.index + 1 == state.persons.length ? 0 : state.index + 1;
        },
    },
    actions: {
        changeGlobalScore(state: any, score: number) {
            state.commit('globalScoreChanged', score);
            state.commit('playerDefaultScoreChanged');
        },
        changePlayerDefaultScore(state: any) {
            state.commit('playerDefaultScoreChanged');
        },
        addPlayer(state: any, person: Person) {
            state.commit('playerAdded', person);
        },
        deletePlayer(state: any, id: number) {
            state.commit('playerDeleted', id);
        },
        subtractScore(state: any, num: number) {
            state.commit('scoreSubtracted', num);
        },
        changeActivePlayer(state: any) {
            state.commit('activePlayerChanged');
        }
    },
    getters: {
        getPersons(state: any) {
            return state.persons;
        },
        getIndex(state: any) {
            return state.index;
        }
    }
});
