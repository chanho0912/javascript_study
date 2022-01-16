// scope
// 변수의 접근성을 책임지는 보호막

function b () {
    var i = 3;
    for (var i = 0; i < 3; i++) { };
    return i;
}

console.log(b());

/*
    호이스팅이란 : 모든 함수, 변수가 선언될 때 스코프의 최상단으로 가는 것을 말한다.
*/

function c () {
    for(var i = 0; i < 10; i++) { };
    return i;
    // 10 반환, var로 선언된 i가 호이스팅으로 인해 c function의 스코프를 갖게 됨.
}

function d () {
    for (let i = 0; i < 10; i++) { };
    return i;
    // error, let으로 선언된 변수는 스코프가 for문 안에서만 작동함
}

/*
 var : 선언 및 초기화 -> 할당
 const, let : 선언 -> TDZ -> 초기화 -> 할당
*/
