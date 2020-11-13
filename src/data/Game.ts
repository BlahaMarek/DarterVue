export interface Person {
  id: number;
  name: string;
  score: number;
}
export interface Game {
  score: number;
  persons: Person[];
}

const game: Game = {
  score: 301,
  persons: [
    {
      id: 1,
      name: "",
      score: 301
    }
  ]
};

export const getScore = () => game.score;

export const getPersons = () => game.persons;

export const setPersons = (persons: any) => game.persons = persons;

export const setScore = (score: number) => {
  game.score = score;
  game.persons.forEach(person => {
    person.score = score;
  })
};
