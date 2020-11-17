import { Person } from "@/model/Person";

export const setPersonsMutation = (state: any, persons: Person[]) => {
    state.persons = persons;
};

export const setGlobalScoreMutation = (state: any, score: number) => {
    state.score = score;
};

export const setPlayersScoreMutation = (state: any) => {
    state.persons.forEach((person: Person) => {
        person.score = +state.score;
    })
};
