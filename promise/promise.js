const myPromise = () => {
    const promise = new Promise( (resolve, reject) => {
        const databaseQuery = true;
        let result = 'yay you resolved';

        if (databaseQuery) {
            resolve(result);
        } else{
            reject('you didnt get it right but its okay');
        }
    });
    return promise;
}

myPromise()
    .then(res => {
        console.log(res);
    })
    .catch(rej => {
        console.log(rej);
    })