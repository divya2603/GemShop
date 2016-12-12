(function(){
    var app = angular.module('store', []);
    //specify name of controller
    // controller is attached to (inside ) app
    //the contents inside function is executedwhen our StoreController is called
    // from inside of controller set gem to a 'property' of this controller
    app.controller('StoreConterller', function(){
        //product is a property of this controller
        this.product = gem;
    })
    var gem ={
        name:'Diamond',
        price:2.95,
        description:'The rarest gem on earth'
    }
})();
//wrapping in a closure is good habit