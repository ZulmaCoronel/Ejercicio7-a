//P R O M I S E S

var x, y, z;

function sum(value1, value2) {
    return Promise.resolve(value1 + value2);
}

sum(2, 3)
	.then(success => {
        x = success;
        console.log('valor actual 1: '+success);
        return x;
        
	})
	.then(success => sum(success, 4))
	.then(success => {
        y = success;
        console.log('valor actual 2: '+success);
        return y;
	})
	.then(success => sum(success, 5))
	.then(success => {
        z = success;
        console.log('valor actual 3: '+success);
        return z;
	})
    .then(success => {
        console.log('total: ' + success)
        console.log('A:'+x+' B:'+y+' C:'+z)
    });