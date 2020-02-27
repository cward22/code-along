const chanice = function() {
    console.log('hello chanice');
}

// const chanice = () => {
//     console.log('hello chanice');
// }

const ward = function(cb) {
    cb();
    console.log(' ward');
}

ward(chanice);