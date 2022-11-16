let numberOfFilms;

function start(){
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function showMyBD(){

    if(personalMovieDB.privat === false){

        console.log(personalMovieDB);
    }
}

showMyBD();

function writeYourGenres(){
for (let i = 1; i < 4; i++){
personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}.`, ''));

}

}
writeYourGenres();



function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренныйх фильмов?', ''),
          b = +prompt('На сколько вы его оцените?', '');
        
          if(a != null && b != null && a != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log(personalMovieDB);
    
          }else{
            i--;
          }
        }}
        
    
rememberMyFilms();




function detectPersonslLevel(){
    if(personalMovieDB.count < 10){
        console.log('Посмотренно довольно мало фильмов');
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель');
    }else if(personalMovieDB.count >=30){
        console.log('Вы киноман');
    }else {
        console.log('Ошибка');
    }


}

detectPersonslLevel();



