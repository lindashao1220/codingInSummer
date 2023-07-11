//genetic algorithm: 在一群很random的东西里面挑选出最好的 在较短的时间
//1. IN SETUP: variation(要有一定的基数）：create a population of random elements

//2. IN DRAW: Selection(选择最优的): 
//2.a. calculate the fitness of the data （refine what is fitness in the code）
//2.b. reproducton(take 2 parents which is the fittest)
//3. evntually do crossover(heredity:create child by combining these two fittest parents) and mutation(mutate the child based on the given probability)
//4. replace the old population to a new population


// setup()
//  # Step 1: The Population
//    # Create an empty population (an array or ArrayList)
//    # Fill it with DNA encoded objects (pick random values to start)

// draw()
//  # Step 1: Selection
//    # Create an empty mating pool (an empty ArrayList)
//    # For every member of the population, evaluate its fitness based on some criteria / function,
//      and add it to the mating pool in a manner consistant with its fitness, i.e. the more fit it
//      is the more times it appears in the mating pool, in order to be more likely picked for reproduction.

//  # Step 2: Reproduction Create a new empty population
//    # Fill the new population by executing the following steps:
//       1. Pick two "parent" objects from the mating pool.
//       2. Crossover -- create a "child" object by mating these two parents.
//       3. Mutation -- mutate the child's DNA based on a given probability.
//       4. Add the child object to the new population.
//    # Replace the old population with the new population
//
//   # Rinse and repeat

let target;
let popmax;
let mutationRate;
let population;

let bestPhrase;
let allPhrases;
let stats;

function setup() {
  bestPhrase = createP("Best phrase:");
  //bestPhrase.position(10,10);
  bestPhrase.class("best");

  allPhrases = createP("All phrases:");
  allPhrases.position(600, 10);
  allPhrases.class("all");

  stats = createP("Stats");
  //stats.position(10,200);
  stats.class("stats");

  //createCanvas(640, 360);
  target = "unicorn is the best";
  popmax = 300;
  mutationRate = 0.01;

  // Create a population with a target phrase, mutation rate, and population max
  population = new Population(target, mutationRate, popmax);
}

function draw() {
  // Generate mating pool
  population.naturalSelection();
  //Create next generation
  population.generate();
  // Calculate fitness
  population.calcFitness();

  population.evaluate();

  // If we found the target phrase, stop
  if (population.isFinished()) {
    //println(millis()/1000.0);
    noLoop();
  }

  displayInfo();
}

function displayInfo() {
  // Display current status of population
  let answer = population.getBest();

  bestPhrase.html("Best phrase:<br>" + answer);

  let statstext =
    "total generations:     " + population.getGenerations() + "<br>";
  statstext +=
    "average fitness:       " + nf(population.getAverageFitness()) + "<br>";
  statstext += "total population:      " + popmax + "<br>";
  statstext += "mutation rate:         " + floor(mutationRate * 100) + "%";

  stats.html(statstext);

  allPhrases.html("All phrases:<br>" + population.allPhrases());
}
