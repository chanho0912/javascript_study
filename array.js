const func1 = (e, index) => {
    console.log(`${index}번째 요소는 ${e}입니다.`);
} 

const a = [1, 2, 3, 4, 5].forEach(func1);

const func2 = (e, index) => e * 2;

const b = [1, 2, 3, 4, 5].map(func2);
console.log(b);

const name = "chanho";
const age = "27";
const job = "developer";

const obj = {name, age, job};
console.log(obj);

const d = () => [1, 2, 3, 4];
const [e, f, g] = d();
console.log([e, f, g]);