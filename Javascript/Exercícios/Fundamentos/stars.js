// Mostrar no console '*' incrementando uma a cada linha até o limite passado como argumento
showStars(5);

function showStars(rows){
    let pattern = '';

    for(let row  = 1; row <= rows; row++){
        pattern += '*';
        console.log(pattern);
    }
}