var Tools = (function () {
       var post =function(url, obj, callback){
           var request = new XMLHttpRequest();
           request.open('POST', url, true);
           request.setRequestHeader("Content-Type", "application/json");
           var objToJson = JSON.stringify(todoArray);
                request.onload = function () {
                    if (request.status <= 200 && request.status < 400){
                        todoArray = JSON.parse(request.responseText);
                        callback(todoArray);
                    }else{
                        console.log('daten auf dem Server nicht gespeichrt')
                    }
                };
                request.onerror = function () {
                };
                request.send(objToJson);
       };

       var get = function(url, callback){
           var request = new XMLHttpRequest();
           request.open('GET',url,true);
           request.onload = function () {
               if(request.status >= 200 && request.status < 400) {
                   todoArray = JSON.parse(request.responseText);
                   callback(todoArray);
               } else {
                   console.log(todoArray);
               }
           };

       request.onerror = function () {
       };
       request.send();
       };
       var removeElement = function(element){
           element.parentNode.removeChild(element)
    };
       var delegate = function (target, callback){
           return function (event) {
              if(event.target && event.target.matches(target)) {
                  callback(event);
               }
           }

       };
       return{
           post:post,
           get:get,
           removeElement: removeElement,
           delegate:delegate,
       };

    })()
