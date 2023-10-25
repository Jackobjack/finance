// Дэлгэцийн модуль: UI - User Interface
var uiController = (function(){
  var DOMstrings = {
    inputType : '.add__type',
    inputDescription : '.add__description',
    inputValue : '.add__value',
    addBtn : '.add__btn'
  }

  return {
      getInput : function(){
        return {
          type : document.querySelector(DOMstrings.inputType).value,
          description : document.querySelector(DOMstrings.inputDescription).value,
          value : document.querySelector(DOMstrings.inputValue).value,
        }
      },
      getDOMstrings : function(){
        return DOMstrings
      }
  }
 
})();

// Санхүүгийн модуль: Finance
var financeController = (function () {
  // Байгуулагч функц 
  var Income = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value
  }
  
  var Expense = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value
  }

  // private data
  var data = {
    items : {
      inc : [],
      exp : []
    },
    totals : {
      inc : 0,
      exp : 0
    }
  }

 
  return {
    addItem : function(type, desc, val){
      var id, item;

      if (data.items[type].length === 0) {
        id = 1
      } else {
        // хамгийн сүүлийн элементийн id-г олоод 1-р нэмэгдүүлсэн
        id = data.items[type][data.items[type].length - 1].id + 1
      }

      // ID = Identification
      if (type === 'inc'){
        item = new Income(id, desc, val)
      } else {
        item = new Expense(id, desc, val)
      }

      data.items[type].push(item)
      data.totals[type] = data.totals[type] + val      
    }, 
    seeData : function(){
      return data;
    }
  }

  }

)();

// Холбогч модуль: App
var appController = (function(uiController , financeController){

  var ctrlAddItem = function(){
    // 1. Оруулах өгөгдлийг Браузераас олж авна
    var input = uiController.getInput()

    // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална
    financeController.addItem(input.type, input.description, input.value)
    // console.log(data.);

    // 3. Боловсруулсан утгыг вэб дээр тохирох хэсэгт гаргана

    // 4. Төсвийг тооцоолно

    // 5. Эцсийн үлдэгдэл, тооцоог браузер дээр харуулна

  }

  var setupEventListeners = function(){
    // addButton === '.add__btn'  
    var DOM = uiController.getDOMstrings();
    document.querySelector(DOM.addBtn).addEventListener('click', function(){
      ctrlAddItem()
    })

    document.addEventListener('keypress', function(event){
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem()
    } 
    })
  }

  return {
    init : function(){
      setupEventListeners()
      console.log('программ эхэллээ : '); 
    }
  }

})(uiController, financeController);


appController.init();





