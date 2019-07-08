console.log("hi");


var armory = { addSword: function (sword){
    this.swords = this.swords || [ ];
    this.swords.push(sword);
}};

armory.addSword("Katana");
console.log(armory.swords);


var doWork = function(name="Scott"){
    return name;
};
var result = doWork("Sneha"); 
console.log(result);
result = doWork();
console.log(result);


let add = (x, y) => x + y;


console.log(add(1,2));

/*

describe("Promises", function() {
    it('should execute the callback given to then', function(done){
        var promise = new Promise(function(resolve, reject) {
            resolve();
        });
        promise.then(function() {
            done();
        });
    });

    it('should receive the resolved data', function(done) {
        var promise = new Promise(function(resolve, reject) {
            resolve(1);
        });
        promise.then(function(data){
            expect(data).toBe(1);
            done();
        });
    });

    it('should fail when rejected', function (done) {
        var promise = new Promise(function (resolve, reject) {
            reject(Error('oh no!'));
        });
        promise.then (function() {
            //success
        }, function(error) {
            expect(error.message).toBe('oh no!');
            done();
        });
    });

    it('should have a catch', function (done) {
        var promise = new Promise(function (resolve, reject) {
            reject(Error('oh no!'));
        });
        promise.catch(function (error) {
            expect(error.message).toBe('oh no!');
            done();
        });
    });
});

*/