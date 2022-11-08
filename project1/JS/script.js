let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


for(let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренныйх фильмов?', ''),
      b = +prompt('На сколько вы его оцените?', '');
    
      if(a != null && b != null && a != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log(personalMovieDB);

      }else{
        i--;
      }
      


}
if(personalMovieDB.count < 10){
    console.log('Посмотренно довольно мало фильмов');
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы классический зритель');
}else if(personalMovieDB.count >=30){
    console.log('Вы киноман');
}else {
    console.log('Ошибка');
}





