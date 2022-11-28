
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
       while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
       }
    },
    showMyBD: function(hidden){
        if(!hidden){

            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for (let i = 1; i < 4; i++){
            let s = prompt(`Ваш любимый жанр под номером ${i}.`, '');
            while (s == '' || s == null){
                s = prompt(`Ваш любимый жанр под номером ${i}.`, '');
            }
            console.log(`Любимый жанр под номером ${i} - ${s}`)
            personalMovieDB.genres.push(s);}
    },
    rememberMyFilms: function(){
        for(let i = 0; i < 2; i++){
            const a = prompt('Один из последних просмотренныйх фильмов?', '').trim(),
              b = +prompt('На сколько вы его оцените?', '');
            
              if(a != null && b != null && a != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log(personalMovieDB);
        
              }else{
                i--;
              }
            }
    },
    detectPersonslLevel: function(){
        if(personalMovieDB.count < 10){
            console.log('Посмотренно довольно мало фильмов');
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Вы классический зритель');
        }else if(personalMovieDB.count >=30){
            console.log('Вы киноман');
        }else {
            console.log('Ошибка');
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
        
    },
    
};



