function receivesAFunction(callback){
    return callback()
}
function returnsANamedFunction(){
    return receivesAFunction
}
function returnsAnAnonymousFunctions(){
    return function (){}
}