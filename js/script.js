'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ],
        changeListMovies: function(movies) {
            //promo__interactive-list
            //promo__interactive-item
            let itemlist = document.querySelector('.promo__interactive-list');
            //let items = document.querySelector('.promo__interactive-item');
            itemlist.innerHTML = "";
            movies.sort();
            movies.forEach((element,i) => {
                itemlist.innerHTML += `<li class="promo__interactive-item">${i+1} ${movies[i]}<div class="delete"></div></li>`;
            });
            //Delete Movies
            document.querySelectorAll('.delete').forEach((element, i) => {
                element.addEventListener('click', (e) => {
                    element.parentElement.remove();
                    movies.splice(i,1);
                    this.changeListMovies(movies);
                });
            });
        },

    };

    const modifPage = {
        removeAdd: function() {
            const addBlock = document.querySelectorAll('.promo__adv img');
            addBlock.forEach(element => {
                element.remove();
            });
        },
        modifGenre: function(str) {
            let genre = document.querySelector('.promo__genre');
            genre.textContent = str;
        },
        changeBackground: function(path) {
            let bg = document.querySelector('.promo__bg');
            //bg.style.cssText = 'background: url(img/bg.jpg) center (center / cover) no-repeat';
            bg.style.backgroundImage = (`url(${path})`);
        }
    };

    //Events
    //Add Movies
    const addMovies = {
        addMovie: function(movies) {
            const btnAdd = document.querySelector('.promo__interactive .add button');
            const textBox = document.querySelector('.promo__interactive .add input');
            const checkbox = document.querySelector('[type="checkbox"]');
            btnAdd.addEventListener('click', (e) => {
                e.preventDefault();
                if(textBox.value){
                    textBox.value = this.checkLength(textBox.value);
                    this.checkboxFunc(checkbox, textBox.value);
                    movieDB.changeListMovies(movies);
                    textBox.value = null;
                    checkbox.checked = false;
                    
                }
            });
        },
        checkboxFunc: function(checkbox, filmName) {
            if(checkbox.checked){
                console.log(`Добавляем любимый фильм`);
                movieDB.movies.push(filmName);
                return true;
            }
            else{
                movieDB.movies.push(filmName);
                return false;
            }
        },
        checkLength: function(filmName) {
            if(filmName.length > 21){
                filmName = filmName.substring(0, 21) + "...";
                return filmName;
            }
            else{
                return filmName;
            }
        }
    };

    modifPage.removeAdd();
    modifPage.modifGenre("Драма");
    modifPage.changeBackground("img/bg.jpg");
    addMovies.addMovie(movieDB.movies);
    movieDB.changeListMovies(movieDB.movies);
});