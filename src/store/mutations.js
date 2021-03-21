export const animalsList = (state, animals) => {
    state.animals = animals;
};

export const addPetToList = (state, animal) => {
    state.animals.push(animal);
};