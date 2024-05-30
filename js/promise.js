let mypromise = new Promise(function (myResolver, myReject) {
    let x = 4;
    if (x == 0) {
        myResolver("Ok")
    }
    else {
        myReject("Error")
    }

})
mypromise.then(
    function(value){console.log(value)},
    function(error){console.log(error)}
)