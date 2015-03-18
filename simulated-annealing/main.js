/*global module, require*/
(function () {
    'use strict';
    var City = require('./city');
    var Tour = require('./tour');
    var TourManager = require('./tour-manager');

    function acceptanceProbability (energy, newEnergy, temperature) {
        return (newEnergy < energy) ? 1.0 : Math.exp((energy - newEnergy) / temperature);
    }

    // generate cities
    TourManager.addCity(new City(60, 200));
    TourManager.addCity(new City(180, 200));
    TourManager.addCity(new City(80, 180));
    TourManager.addCity(new City(140, 180));
    TourManager.addCity(new City(20, 160));
    TourManager.addCity(new City(100, 160));
    TourManager.addCity(new City(200, 160));
    TourManager.addCity(new City(140, 140));
    TourManager.addCity(new City(40, 120));
    TourManager.addCity(new City(100, 120));
    TourManager.addCity(new City(180, 100));
    TourManager.addCity(new City(60, 80));
    TourManager.addCity(new City(120, 80));
    TourManager.addCity(new City(180, 60));
    TourManager.addCity(new City(20, 40));
    TourManager.addCity(new City(100, 40));
    TourManager.addCity(new City(200, 40));
    TourManager.addCity(new City(20, 20));
    TourManager.addCity(new City(60, 20));
    TourManager.addCity(new City(160, 20));

    var temperature = 100000;
    var coolingRate = 0.0003;
    var currentSolution = new Tour();
    currentSolution.generateIndividual();

    console.log('Initial solution distance: ' + currentSolution.getDistance());
    console.log('Initial tour: ' + currentSolution);

    var best = new Tour(currentSolution.getTour());

    while (temperature > 1) {
        var newSolution = new Tour(currentSolution.getTour());
        var pos1 = Math.floor(Math.random() * newSolution.tourSize());
        var pos2 = Math.floor(Math.random() * newSolution.tourSize());
        newSolution.swapCities(pos1, pos2);
        var currentEnergy = currentSolution.getDistance();
        var newEnergy = newSolution.getDistance();

        if (acceptanceProbability(currentEnergy, newEnergy, temperature) > Math.random()) {
            currentSolution = new Tour(newSolution.getTour());
        }

        if (currentSolution.getDistance() < best.getDistance()) {
            best = new Tour(currentSolution.getTour());
        }

        temperature *= 1 - coolingRate;
    }

    console.log('Final solution distance: ' + best.getDistance());
    console.log('Final tour: ' + best);
}());
