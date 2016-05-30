
function sym(args) {
    
    var argArr = Array.from(arguments);
    
    
    //remove any duplicates from within each array
    //for (var i=0; i<argArr.length; i++){        
      //  argArr[i]=argArr[i].filter(function(val,index){
       //   return argArr[i].lastIndexOf(val)==index;
       // });
    //}

    //function to find half the symmetric difference of 2 arrays
    //needs to be run twice, second time in reverse order
    function symDiff(a,b){        
        return a.filter(function(v1){
            if(b.every(function(v2){return v2!==v1;})){                
                return v1;
            }    
        });
    }   
        
        //result of reduction method on arguments array using 
        //symDiff function as qualifier
        //set and spread operator is used to return a new array 
        //with unique (no duplicate) values
        return [...new Set(argArr.reduce(function(pv,cv){
            return symDiff(pv,cv).concat(symDiff(cv,pv));
        }))];
              
}



sym([1, 2,1,1, 5], [2, 3, 5], [3,3, 4, 5]);
