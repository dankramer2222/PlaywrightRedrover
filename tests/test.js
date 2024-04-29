const condition = true

let willpassCode = new Promise(function(resolve,reject){
    if (condition){
        let message = 'Code passed';
        resolve(message); // positive
    }
    else{
        let reason = new Error('Code failed');
        reject(reason); //negative
    }
})

let checkCode = function (){
    willpassCode
    .then(function(message){
        console.log(message);
    })
    .catch(function(error){
        console.log(error.reason);
    })
}

checkCode()