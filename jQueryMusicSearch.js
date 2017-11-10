var MusicSearch = (function () {
    
    var people = [];
    
    function MusicSearchConstructor() {
    
        this.peopleCount = 0;
    
    }
    
    StarWars.prototype.getPeople = function (done) {
    
        people = [];
        getStarWarsPeople(1, function() {
            done(people);
        })
    
    }
       function getStarWarsPeople(page, done) {
    
                $.getJSON('https://swapi.co/api/people/?format=json&page=' + page, function (data) {
    
                    data.results.forEach(function (person) {
                        people.push(person);
                       
                    });
                    if (data.next) {
                        getStarWarsPeople(++page, done);
                    }
                    else {
                        done();
                    }
                });
            }
    
    
    
    
    
    return StarWars;
    })();