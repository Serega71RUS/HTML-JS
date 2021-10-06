/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ],
    changeListMovies: function() {
        //promo__interactive-list
        //promo__interactive-item
        let items = document.querySelectorAll('.promo__interactive-item');
        //let i = 0;
        items.forEach((element,i) => {
            element.textContent = `${i+1}. ${movieDB.movies.sort()[i]}`;
            //i++;
        });
    }
};

const modifPage = {
    removeAdd: function() {
        const addBlock = document.querySelectorAll('.promo__adv img');
        addBlock.forEach(element => {
            element.remove();
        });
    },
    modifGenre: function() {
        let genre = document.querySelector('.promo__genre');
        genre.textContent = 'Драма';
    },
    changeBackground: function() {
        let bg = document.querySelector('.promo__bg');
        bg.style.cssText = 'background: url(img/bg.jpg) center (center / cover) no-repeat';
    }
};

modifPage.removeAdd();
modifPage.modifGenre();
modifPage.changeBackground();
movieDB.changeListMovies();