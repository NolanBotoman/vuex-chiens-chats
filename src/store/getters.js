export const getAllAnimals = (state) => {
	return state.animals;
};

export const getAllCats = (state) => {
	return state.animals.filter((pet) => pet.type === "Cat");
};

export const getAllDogs = (state) => {
	return state.animals.filter((pet) => pet.type === "Dog");
};