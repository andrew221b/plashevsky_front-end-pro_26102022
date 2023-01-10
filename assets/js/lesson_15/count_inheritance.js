function layersOfInheritance(object) {
    let level = 0;
    const parObj = Object.getPrototypeOf({});

    function recursiveCount(count, obj) {
        const inhObj = Object.getPrototypeOf(obj);
        if (inhObj === parObj) {
            return count;
        }
        count += 1;
        return recursiveCount(count, inhObj);
    }
    
    return recursiveCount(level, object);
}


const obj = { a: 1 };
const obj2 = Object.create(obj);
const obj3 = Object.create(obj2);

console.log(layersOfInheritance({})); // 0
console.log(layersOfInheritance(new Date())); // 1
console.log(layersOfInheritance(obj3)); // 2