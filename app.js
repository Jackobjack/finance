// Дэлгэцийн модуль: UI - User Interface
var uiController = (function(){
    // далдалсан хэсэг: дотор хэсэг = data encapsulation    
    var x = 100
    
    function add(y){
        return x + y 
    }
    
    // uiController дээр өгөгдөх обьект
    return {
        publicAdd : function(a){
            a = add(a)
            console.log('Боловсруулсан утга : ' +  a);           
        }
    }

})();

// Санхүүгийн модуль: Finance
var financeController = (function () {

})();

// Холбогч модуль: App
var appController = (function(uiController , financeController){
    
    var ctrlAddItem = function bod(){
        // 1. Оруулах өгөгдлийг дэлгэцээс олж авна
        console.log('Дэлгэцээс өгөгдлөө авах хэсэг : ' );
    
        // 2. Олж авсан өгөгдлийг санхүүгийн контролерт дамжуулж тэнд хадгална.
    
        // 3. Олж авсан өгөгдлүүдээ вэбийн тохирох хэсэгт нь гаргана
    
        // 4. Төсвийг тооцоолно.
    
        // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
    
    
    
        }

    
    document.querySelector('.add__btn').addEventListener('click', function(){
        ctrlAddItem()
    });

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem()
        }
    })


})(uiController, financeController);



