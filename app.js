
 // budget control
var budgetController = (function(){

    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
 
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
            
        }
        
    };
    return{
        addItem: function(type, des, val){
            new Expense(id,des,value){
                var newItem;
                newItem = new Expense(id, des, value);
            }

        }
    };


})();
 

var UIController = (function(){   

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return{
        getinput: function(){
            return{
                 type: document.querySelector(DOMstrings.inputType).value,
                 description: document.querySelector(DOMstrings.inputDescription).value,
                 value:document.querySelector(DOMstrings.inputValue).value

            };
            
        },
        getDOMstrings: function(){
            return DOMstrings;
        }
    };

    

})();

var Controller = (function(budgetCtrl,UICtrl){

    var DOM = UICtrl.getDOMstrings(); 

    var setupEventListeners = function(){

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        }); 
    

    };
     
    var ctrlAddItem = function(){
         //1 Get input
         var input = UICtrl.getinput();
         console.log(input); 

        //2 add item to bug. controller

        //3 add item to ui

        //4 calculate the budget

        //display budget

        console.log('Yaksh here');

    };

    return{
        init: function(){
            console.log('app started');
            setupEventListeners();
        }
    }
   

})(budgetController, UIController);

Controller.init();  