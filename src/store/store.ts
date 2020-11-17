import { createStore } from "vuex";
import { setGlobalScoreMutation, setPersonsMutation, setPlayersScoreMutation } from "@/store/mutations";
import { setGlobalScoreAction, setPersonsAction, setPlayersScoreAction } from "@/store/actions";
import { getGlobalScore, getPlayerScore, getPersons } from "@/store/getters";

export const store = createStore({
    state () {
        return {
            score: 301,
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
        setPersons: setPersonsMutation,
        setPlayersScore: setPlayersScoreMutation,
        setGlobalScore: setGlobalScoreMutation,
    },
    actions: {
        setPersons: setPersonsAction,
        setPlayersScore: setPlayersScoreAction,
        setGlobalScore: setGlobalScoreAction,
    },
    getters: {
        getPlayerScore,
        getGlobalScore,
        getPersons,
    }
});
