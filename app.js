// Дэлгэцийн модуль: UI - User Interface
var uiController = (function(){
    // далдалсан хэсэг: дотор хэсэг = data encapsulation    
    var DOMStrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        addBtn : '.add__btn'   
    }

    return {
        getInput : function(){
            return {
                type : document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            }
        }, 
        getDOMStrings : function(){
            return DOMStrings;
        }
    }

})();

// Санхүүгийн модуль: Finance
var financeController = (function () {
    // Байгуулагч функц 
    var Income = function(id, description, value){
        this.id = id
        this.description = description
        this.value = value
    }

    var Expense = function(id, description, value){
        this.id = id
        this.description = description
        this.value = value
    }

    var Data = {
        allItems : {
            inc : [],
            exp : []
        },
        totals: {
            inc: 0,
            exp: 0
        }
    }

})();

// Холбогч модуль: App
var appController = (function(uiController , financeController){

    var ctrlAddItem = function (){
        // 1. Оруулах өгөгдлийг дэлгэцээс олж авна
        console.log(uiController.getInput());
    
        // 2. Олж авсан өгөгдлийг санхүүгийн контролерт дамжуулж тэнд хадгална.
    
        // 3. Олж авсан өгөгдлүүдээ вэбийн тохирох хэсэгт нь гаргана
    
        // 4. Төсвийг тооцоолно.
    
        // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
    }

    var setupEventListener = function(){
        // DOM === DOMStrings
        var DOM = uiController.getDOMStrings();

        document.querySelector(DOM.addBtn).addEventListener('click', function(){
            ctrlAddItem()
        });
    
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem()
            }
        })
    }
    
    return {
        init : function(){
            console.log('Application started :>> ');
            setupEventListener();
        }
    }
})(uiController, financeController);

appController.init()




