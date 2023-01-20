import sort from "../sorting";

test ("сортировка героев ",()=>{
const arrTemplate = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
]
const arrHeroes =[
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
]

const sortHero = sort(arrHeroes);
expect(sortHero).toEqual(arrTemplate);
});