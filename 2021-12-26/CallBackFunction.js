function sayHello(){
    console.log ("안녕하세요");
}

function getHuman(callback){
    callback();
}

getHuman(sayHello);