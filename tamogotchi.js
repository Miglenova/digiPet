function Tamogotchi(tamoName) {
    //
    this.petName;
    this.initialFood = 60;
    this.metabolismRate = 1000;

    /*
        add an array of objects
        -20 items
        -each element of the array has the following
            -mood(angry, happy, sad, joke)
            -mood percentage
            -saying(a saying relating the the mood)
    */
    
    let moods = [
        {mood:"angry", moodpercentage:10, saying:"I am angry!"},
        {mood:"bored", moodpercentage: 20, saying:"I am bored!"},
        {mood:"hungry", moodpercentage: 30, saying:"I am hungry!"},
        {mood:"tursty", moodpercentage: 40, saying:"I am tursty!"},
        {mood:"playful", moodpercentage: 50, saying:"I want to play!"},
        {mood:"happy", moodpercentage: 60, saying:"I am happy!"},
        {mood:"fun", moodpercentage: 70, saying:"I am having fun!"},
        {mood:"ecstatic", moodpercentage: 80, saying:"I feel ecstatic!"},
        {mood:"sleep", moodpercentage: 90, saying:"I am sleepy!"},
        {mood:"relax", moodpercentage: 100, saying:"I feel great!"}
        ]
        
    /*
        an array of compliments
        -10 items
    */
        let compliments = [
            "Thank you for that!",
             "You are my best friend!", 
             "This was yummy!",
             "I loved the drink!",
             "I love to play with you!",
             "You make me smile!",
             "This is so much fun!",
             "I am on top of the world!",
             "I like my pillow!",
             "This is the best day ever!"
            ]
             
        

    /*
        add an array of favourite foods(at least 10)
        each element of the array should have
        -food name
        -food value
        -chance of food poisoning
    */
        
        let foods = [
            {food:"cracker", value:10, poison:0},
            {food:"fish", value:120, poison:0},
            {food:"mushroom", value:113, poison:10},
            {food:"cucumber", value:15, poison:3},
            {food:"chips", value:125, poison:5},
            {food:"coffee", value:110, poison:2},
            {food:"grass", value:17, poison:7},
            {food:"wax", value:65, poison:12},
            {food:"gas", value:56, poison:17},
            {food:"beer", value:2, poison:3}
            ]
            

    this.init = () => {
        this.petName = tamoName;
        console.log(`Hi!  I'm ${this.petName}`);
        this.hatch();
    }
    this.init();
}
Tamogotchi.prototype.resetFood = function(){
    this.food=this.initialFood;
}

Tamogotchi.prototype.hatch = function(){
    this.resetFood();
    this.startMetabolism();
}
Tamogotchi.prototype.die = function(){
    clearInterval(this.metabolism);
    console.log("I am dead!");
}
Tamogotchi.prototype.startMetabolism = function(){
    this.metabolism = setInterval(()=> {
        this.food -=1;
        console.log(`${this.food} until I starve`);
        if(this.food<=0){
            this.die();
        }
    },this.metabolismRate);
}

Tamogotchi.prototype.eatLasagna = function() {
    console.log(`can I see the food? ${this.food}`);
    this.food +=20;
}

//to add

//a drink coffee command that speeds up the metabolism of your pet


//a drink beer command that slows down the metabolism of your pet

/*
an eat food command that will select a random food that will 
-check if the pet gets food poisoning
-add points to the pets food count if they don't get food poisoning
-remove points from the pets food count if they do get food poisoning
*/

// a command that takes in a mood and returns a phrase

/*
    a command that takes in your name and returns you a compliment structured using template
*/
