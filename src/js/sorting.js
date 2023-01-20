export default function sort(heroes){
    return heroes.sort((a,b) => b.health - a.health);
}