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
        changeListMovies: function() {
            //promo__interactive-list
            //promo__interactive-item
            let itemlist = document.querySelector('.promo__interactive-list');
            let items = document.querySelector('.promo__interactive-item');
            itemlist.innerHTML = "";
            this.movies.sort();
            this.movies.forEach((element,i) => {
                itemlist.innerHTML += `<li class="promo__interactive-item">${i+1} ${this.movies[i]}<div class="delete"></div></li>`;
            });
            //let i = 0;
            // items.forEach((element,i) => {
            //     element.textContent = `${i+1}. ${movieDB.movies.sort()[i]}`;
            //     //i++;
            // });
        },

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
    function StringLenght(str) {
        let i = 0;
        while (str[i] != null){
            i++;
        }
        return i;
    }

    //Events
    //Add Movies
    function AddMovies(){
        const btnAdd = document.querySelector('.promo__interactive .add button');
        const textBox = document.querySelector('.promo__interactive .add input');
        const checkbox = document.querySelector('[type="checkbox"]');
        btnAdd.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(textBox.value);
            if(textBox.value != ""){
                if(StringLenght(textBox.value) > 21){
                    if(checkbox.checked){
                        console.log(`Добавляем любимый фильм`);
                        textBox.value = textBox.value.substring(0, 21) + "...";
                        movieDB.movies.push(textBox.value);
                        movieDB.changeListMovies();
                    }
                    else{
                        movieDB.movies.push(textBox.value);
                        movieDB.changeListMovies();
                    }
                }
                else{
                    if(checkbox.checked){
                        console.log(`Добавляем любимый фильм`);
                        textBox.value = textBox.value.substring(0, 21) + "...";
                        movieDB.movies.push(textBox.value);
                        movieDB.changeListMovies();
                    }
                    else{
                        movieDB.movies.push(textBox.value);
                        movieDB.changeListMovies();
                    }
                }
                textBox.value = null;
                checkbox.checked = false;
                
            }
        });
    }


    //Delete Movies
    const delCart = document.querySelectorAll('.delete');
    //console.log(delCart);
    const delEvent = (e) => {
        console.log(e.target);

    };
    delCart.forEach(element => {
        element.addEventListener('click', (e) => {
            console.log(e.target);
        });
    });
    console.log(delCart);
    let mass = [];
    // delCart.forEach((element,i) => {
    //     console.log(element.parentElement);
    //     mass[i] = element.parentElement.textContent;
    // });
    console.log(mass);



    modifPage.removeAdd();
    modifPage.modifGenre();
    modifPage.changeBackground();
    movieDB.changeListMovies();
    AddMovies();
});