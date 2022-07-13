// 31장

// 👉 정규 표현식이란?
// 정규 표현식(Regular Expression)은 일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어다.
// 정규 표현식은 자바스크립트의 고유 문법이 아니며, 대부분의 프로그래밍 언어와 코드 에디터에 내장되어 있다.
// 자바스크립트는 펄의 정규 표현식 문법을 ES3부터 도입했다.

// 휴대폰 번호 패턴을 정규 표현식으로 정의하고 사용자로부터 입력받은 문자열이 패턴에 매칭하는지
{
    // 사용자로부터 입력받은 휴대폰 전화번호
    const tel = '010-1234-567팔';

    // 정규 표현식 리터럴로 휴대폰 전화번호 패턴을 정의한다.
    const regExp = /^\d{3}-\d{4}-\d{4}$/;

    // tel이 휴대폰 전화번호 패턴에 매칭하는지 테스트(확인)한다.
    console.log(regExp.test(tel)); // false
}

// 만약 정규 표현식을 사용하지 않는다면 반복문과 조건문을 통해 '첫 번째 문자가 숫자이고 이어지는 문자도 숫자이고 이어지는 문자도 숫자이고
// 다음은 '-'이고...'와 같이 한 문자씩 연속해서 체크해야 한다.

// 정규 표현식을 사용하면 반복문과 조건문 없이 패턴을 정의하고 테스트하는 것으로 간단히 체크할 수 있다.
// 다만 정규 표현식은 주석이나 공백을 허용하지 않고 여러 가지 기호를 혼합하여 사용하기 때문에 가독성이 좋지 않다는 문제가 있다.


// 👉 정규 표현식의 생성
// 정규 표현식 객체(RegExp 객체)를 생성하기 위해서는 정규 표현식 리터럴과 RegExp 생성자 함수를 사용할 수 있다.
// 일반적인 방법은 정규 표현식 리터럴을 사용하는 것이다.
//    시작,종료기호    패턴   시작,종료기호   플래그
//    /regexp/i

// 이처럼 정규 표현식 리터럴은 패턴과 플래그로 구성된다.
{
    const target = 'Is this all there is?';

    // 패턴: is
    // 플래그: i -> 대소문자를 구별하지 않고 검색한다.
    const regExp = /is/i;

    // test 메서드는 target 문자열에 대해 정규 표현식 regExp의 패턴을 검색하여
    // 매칭 결과를 불리언 값으로 반환한다.
    console.log(regExp.test(target)); // true
}

// RegExp 생성자 함수를 사용하여 RegExp 객체를 생성할 수도 있다.
{
    // pattern: 정규 표현식의 패턴
    // flags: 정규 표현식의 플래그(g, i, m, u, y)
    // new RegExp(pattern[, flags]);

    const target = 'Is this all there is';

    const regExp = new RegExp(/is/i); // ES6

    console.log(regExp.test(target)); // true
}


// 👉 RegExp 메서드
// 정규 표현식을 사용하는 메서드는
// RegExp.prototype.exec, RegExp.prototype.test,
// String.prototype.match, String.prototype.replace, String.prototype.search, String.prototype.split

// 📌 RegExp.prototype.exec
// exec 메서드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 배열로 반환한다.
// 매칭 결과가 없는 경우 null을 반환한다.
// exec 메서드는 문자열 내의 모든 패턴을 검색하는 g 플래그를 지정해도 첫 번째 매칭 결과만 반환하므로 주의하기 바란다.
{
    const target = 'Is this all there is?';
    const regExp =  /is/;

    console.log(regExp.exec(target)); // ['is', index: 5, input: 'Is this all there is?', groups: undefined]
}


// 📌 RegExp.prototype.test
// test 메서드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 불리언 값으로 반환한다.
{
    const target = 'Is this all there is?';
    const regExp = /is/;

    console.log(regExp.test(target)); // true
}


// 📌 String.prototype.match
// String 표준 빌트인 객체가 제공하는 match 메서드는 대상 문자열과 인수로 전달받은 정규 표현식과의 매칭 결과를 배열로 반환한다.
{
    const target = 'Is this all there is?';
    const regExp = /is/;

    console.log(target.match(regExp)); // ['is', index: 5, input: 'Is this all there is?', groups: undefined]
}
// exec 메서드는 문자열 내의 모든 패턴을 검색하는 g 플래그를 지정해도 첫 번째 매칭 결과만 반환한다.
// 하지만 String.prototype.match 메서드는 g 플래그가 지정되면 모든 매칭 결과를 배열로 반환한다.
{
    const target = 'Is this all there is?';
    const regExp = /is/g;

    console.log(target.match(regExp)); // ['is', 'is']
}


// 👉 플래그
// 패턴과 함께 정규 표현식을 구성하는 플래그는 정규 표현식의 검색 방식을 설정하기 위해 사용한다.
// 플래그는 총 6개 있다.
// 그 중 중요한 3개를 살펴보자.
{
    // 플래그   의미          설명
    // i      Ignore case  대소문자를 구별하지 않고 패턴을 검색한다.
    // g      Global       대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다.
    // m      Multi line   문자열의 행이 바귀더라도 패턴 검색을 계속한다.
}

// 플래그는 옵션이므로 선택적으로 사용할 수 있으며, 순서와 상관없이 하나 이상의 플래그를 동시에 설정할 수도 있다.
// 어떠한 플래그를 사용하지 않은 경우 대소문자를 구별해서 패턴을 검색한다.
// 그리고 문자열에 패턴 검색 매칭 대상이 1개 이상 존재해도 첫 번째 매칭한 대상만 검색하고 종료한다.
{
    const target = 'Is this all there is?';

    // target 문자열에서 is 문자열을 대소문자를 구별하여 한 번만 검색한다.
    console.log(target.match(/is/)); // ['is', index: 5, input: 'Is this all there is?', groups: undefined]

    // target 문자열에서 is 문자열을 대소문자를 구별하지 않고 한 번만 검색한다.
    console.log(target.match(/is/i)); // ['Is', index: 0, input: 'Is this all there is?', groups: undefined]

    // target 문자열에서 is 문자열을 대소문자를 구별하여 전역 검색한다.
    console.log(target.match(/is/g)); // ['is', 'is']

    // target 문자열에서 is 문자열을 대소문자를 구별하지 않고 전역 검색한다.
    console.log(target.match(/is/ig)); // ['Is', 'is', 'is']
}

// 👉 패턴
// 정규 표현식은 "일정한 규칙(패턴)을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어"다.
// 정규 표현식은 패턴과 플래그로 구성된다.
// 정규 표현식의 패턴은 문자열의 일정한 규칙을 표현하기 위해 사용하며,
// 정규 표현식의 플래그는 정규 표현식의 검색 방식을 설정하기 위해 사용한다.

// 패턴은 /로 열고 닫으며 문자열의 따옴표는 생략한다.
// 따옴표를 포함하면 따옴표까지도 패턴에 포함되어 검색된다.
// 또한 패턴은 특별한 의미를 가지는 메타 문자 또는 기호로 표현할 수 있다.
// 어떤 문자열 내에 패턴과 일치하는 문자열이 존재할 때 '정규 표현식과 매치(match)한다'고 표현한다.

// 📌 문자열 검색
// 정규 표현식의 패턴에 문자 또는 문자열을 지정하면 검색 대상 문자열에서 패턴으로 지정한 문자 또는 문자열을 검색한다.
// 앞서 살펴본 RegExp 메서드를 사용하여 매칭 결과를 구하면 검색이 수행된다.
{
    const target = 'Is this all there is?';

    // 'is' 문자열과 매치하는 패턴. 플래그가 생략되었으므로 대소문자를 구별한다.
    const regExp = /is/;

    // target과 정규 표현식이 매치하는지 테스트한다.
    console.log(regExp.test(target)); // true

    // target과 정규 표현식의 매칭 결과를 구한다.
    console.log(target.match(regExp)); // ['is', index: 5, input: 'Is this all there is?', groups: undefined]
}

// 대소문자를 구별하지 않고 검색하려면 플래그 i를 사용한다.
{
    const target = 'Is this all there is?';

    // 'is' 문자열과 매치하는 패턴. 플래그 i를 추가하면 대소문자를 구별하지 않는다.
    const regExp = /is/i;

    // target과 정규 표현식의 매칭 결과를 구한다.
    console.log(target.match(regExp)); // ['Is', index: 0, input: 'Is this all there is?', groups: undefined]
}

// 검색 대상 문자열 내에서 패턴과 매치하는 모든 문자열을 전역 검색하려면 플래그 g를 사용한다.
{
    const target = 'Is this all there is?';

    // 'is' 문자열과 매치하는 패턴.
    // 플래그 g를 추가하면 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다.
    const regExp = /is/ig;

    // target과 정규 표현식의 매칭 결과를 구한다.
    console.log(target.match(regExp)); // ['Is', 'is', 'is']
}


// 📌 임의의 문자열 검색
// .은 임의의 문자 한 개를 의미한다.
// 문자의 내용은 무엇이든 상관없다.
// 다음 예제의 경우 .을 3개 연속하여 패턴을 생성했으므로 내용과 상관없이 3자리 문자열과 매치한다.
{
    const target = 'Is this all there is?';

    // 임의의 3자리 문자열을 대소문자를 구별하여 전역 검색한다.
    const regExp = /.../g;

    console.log(target.match(regExp)); // ['Is ', 'thi', 's a', 'll ', 'the', 're ', 'is?']
}


// 📌 반복 검색
// {m,n}은 앞선 패턴(다음 예제의 경우 A)이 최소 m번, 최대 n번 반복되는 문자열을 의미한다.
// 콤마 뒤에 공백이 있으면 정상 동작 하지 않으므로 주의
{
    const target = 'A AA B BB Aa Bb AAA';
    const regExp = /A{1,2}/g;

    console.log( target.match(regExp) ); // ['A', 'AA', 'A', 'AA', 'A']
}

// {n}은 앞선 패턴이 n번 반복되는 문자열을 의미한다.
// 즉, {n}은 {n,n}과 같다.
{
    const target = 'A AA B BB Aa Bb AAA';

    // 'A'가 2번 반복되는 문자열을 전역 검색한다.
    const regExp = /A{2}/g;

    console.log( target.match(regExp) ); // ['AA', 'AA']
}

// {n,}은 앞선 패턴이 최소 n번 이상 반복되는 문자열을 의미한다.
{
    const target = 'A AA B BB Aa Bb AAA';

    // 'A'가 최소 2번 반복되는 문자열을 전역 검색한다.
    const regExp = /A{2,}/g;

    console.log( target.match(regExp) ); // ['AA', 'AAA']
}

// +는 앞선 패턴이 최소 한번 이상 반복되는 문자열을 의미한다.
// 즉, +는 {1,}과 같다.
{
    const target = 'A AA B BB Aa Bb AAA';

    // 'A'가 최소 1번 반복되는 문자열을 전역 검색한다.
    const regExp = /A+/g;

    console.log( target.match(regExp) ); // ['A', 'AA', 'A', 'AAA']
}

// ?는 앞선 패턴이 최대 한 번(0번 포함) 이상 반복되는 문자열을 의미한다.
// 즉 ?는 {0,1}과 같다.
{
    const target = 'color colour';

    // 'colo' 다음 'u'가 최대 한 번 이상 반복되고, 'r'이 이어지는 문자열을 전역 검색한다.
    const regExp = /colou?r/g;

    console.log( target.match(regExp) ); // ['color', 'colour']
}

// 📌 OR 검색
// |는 or의 이미를 갖는다.
{
    const target = 'A AA B BB Aa Bb';

    // 'A' 또는 'B'를 전역 검색한다.
    const regExp = /A|B/g;

    console.log( target.match(regExp) ); // ['A', 'A', 'A', 'B', 'B', 'B', 'A', 'B']
}

// 분해되지 않은 레벨로 검색하기 위해서는 +를 함께 사용한다.
{
    const target = 'A AA B BB Aa Bb';

    // 'A' 또는 'B'가 한 번 이상 반복되는 문자열을 전역 검색한다.
    const regExp = /A+|B+/g;

    console.log( target.match(regExp) ); // ['A', 'AA', 'B', 'BB', 'A', 'B']
}

// 위 예제는 패턴을 or로 한 번 이상 반복하는 것인데 이를 간단히 표현하면 다음과 같다.
// [] 내의 문자는 or로 동작한다.
// 그 뒤에 +를 사용하면 앞선 패턴을 한 번 이상 반복한다.
{
    const target = 'A AA B BB Aa Bb';

    // 'A' 또는 'B'가 한 번 이상 반복되는 문자열을 전역 검색한다.
    const regExp = /[AB]+/g;

    console.log( target.match(regExp) ); // ['A', 'AA', 'B', 'BB', 'A', 'B']
}

// 범위를 지정하려면 [] 내에 -를 사용한다.
// 다음 예제는 대문자 알파벳을 검색한다.
{
    const target = 'A AA BB ZZ Aa Bb';

    // 'A' ~ 'Z'가 한 번 이상 반복되는 문자열을 전역 검색한다.
    const regExp = /[A-Z]+/g;

    console.log(target.match(regExp)); // ['A', 'AA', 'BB', 'ZZ', 'A', 'B']
}

// 대소문자를 구별하지 않고 알파벳을 검색하는 방법은 다음과 같다.
{
    const target = 'AA BB Aa Bb 12';

    // 'A' ~ 'Z' 또는 'a' ~ 'z'가 한 번 이상 반복되는 문자열을 전역 검색한다.
    const regExp =  /[A-Za-z]+/g;

    console.log(target.match(regExp)); // ['AA', 'BB', 'Aa', 'Bb']
}

// 숫자를 검색하는 방법은 다음과 같다.
{
    const target = 'AA BB 12,345';

    // '0' ~ '9'가 한 번 이상 반복되는 문자열을 전역 검색한다.
    const regExp = /[0-9]+/g;

    console.log(target.match(regExp)); // ['12', '345']
}

// 위 예제의 경우 쉼표 때문에 매칭 결과가 분리되므로 쉼표를 패턴에 포함시킨다.
{
    const target = 'AA BB 12,345';

    // '0' ~ '9' 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
    const regExp = /[0-9,]+/g;

    console.log(target.match(regExp)); // ['12,345']
}

// 위 예제를 간단히 표현하면 다음과 같다.
// \d는 숫자, \D는 숫자가 아닌 문자.
// \d는 [0-9]와 같다.
{
    const target = 'AA BB 12,345';

    // '0' ~ '9' 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
    let regExp = /[\d,]+/g;

    console.log(target.match(regExp)); // ['12,345']

    // '0' ~ '9'가 아닌 문자(숫자가 아닌 문자) 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
    regExp = /[\D,]+/g;

    console.log(target.match(regExp)); // ['AA BB ', ',']
}

// \w는 알파벳, 숫자, 언더바를 의미한다.
// \w는 [A-Za-z0-9_]와 같다.
// \W는 알파벳, 숫자, 언더바가 아닌 문자를 의미한다.
{
    const target = 'AA BB 12,345 _$%&';

    // 알파벳, 숫자, 언더바, ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
    let regExp = /[\w,]+/g;

    console.log(target.match(regExp)); // ['AA', 'BB', '12,345', '_']

    // 알파벳, 숫자, 언더바가 아닌 문자 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색한다.
    regExp = /[\W,]+/g;

    console.log(target.match(regExp)); // [' ', ' ', ',', ' ', '$%&']
}


// 📌 NOT 검색
// [] 내의 ^은 not의 의미를 갖는다.
// [^0-9]는 숫자를 제외한 문자를 의미한다.
// [\d] = [0-9]
// [\D] = [^0-9]
// [\w] = [0-9A-Za-z_]
// [\W] = [^0-9A-Za-z_]
{
    const target = 'AA BB 12 Aa Bb';

    // 숫자를 제외한 문자열을 전역 검색
    const regExp = /[^0-9]+/g; // /\D/g와 같음

    console.log(target.match(regExp)); // ['AA BB ', ' Aa Bb']
}


// 📌 시작 위치로 검색
// [] 밖의 ^은 문자열의 시작을 의미한다.
// [] 내의 ^은 not의 의미를 가지므로 주의
{
    const target = 'https://poiemaweb.com';

    // 'https'로 시작하는지 검사한다
    const regExp = /^https/g;

    console.log(regExp.test(target)); // true
}


// 📌 마지막 위치로 검색
// $는 문자열의 마지막을 의미한다.
{
    const target = 'https://poiemaweb.com';

    const regExp = /com$/g;

    console.log(regExp.test(target)); // true
}


// 👉 자주 사용하는 정규표현식
// 📌 특정 단어로 시작하는지 검사
// 검색 대상 문자열이 'http://' 또는 'https://'로 시작하는지 검사
{
    const target = 'https://example.com';

    console.log( /^https?:\/\//.test(target)); // true
    console.log( /^(http|https):\/\//.test(target)); // true
}


// 📌 특정 단어로 끝나는지 검사
// 검색 대상 문자열이 'html'로 끝나는지 검사
{
    const target = 'index.html';

    console.log( /html$/.test(target) ); // true
}


// 📌 숫자로만 이루어진 문자열인지 검사
{
    const target = '12345';

    // 내가 생각한 것
    // console.log(/\d/.test(target));
    // console.log(/^[0-9]+[0-9]$/.test(target));

    // 책
    // 처음과 끝이 숫자이고, 최소 한 번 이상 반복되는 문자열
    console.log( /^\d+$/.test(target) ); // true
}


// 📌 하나 이상의 공백으로 시작하는지 검사
// \s는 여러 가지 공백 문자(스페이스, 탭 등)을 의미한다.
// \s = [\t\r\n\v\f]와 같은 의미다.
{
    const target = ' Hi!';

    // 하나 이상의 공백으로 시작하는지 검사
    console.log( /^[\s]+/.test(target) ); // true
}


// 📌 아이디로 사용 가능한지 검사
// 검색 대상 문자열이 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4 ~ 10자리인지 검사한다.
// {4,10}은 패턴(알파벳 대소문자 또는 숫자)이 최소 4번 최대 10번 반복되는 문자열을 의미한다.
// 즉, 4 ~ 10자리로 이루어진 알파벳 대소문자 또는 숫자를 의미한다.
{
    const target = 'abc1234'; // 10자리가 넘어가면 false

    console.log( /^[A-Za-z0-9]{4,10}$/.test(target) ); //  true
}


// 📌 메일 주소 형식에 맞는지 검사
{
    const target = 'ungmo2@gmail.com';

    console.log( /^[A-Za-z0-9]([-_\.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_\.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/.test(target) ); // true
}
// 팜고로 인터넷 메시지 형식 규약인 RFC 5322에 맞는 정교한 패턴 매칭이 필요하다면 무척이나 복잡한 패턴을 사용할 필요가 있다.
// 코드가 너무 길어서 난 안씀 .. 궁금하면 책봐라


// 📌 핸드폰 번호 형식에 맞는지 검사
{
    const target = '010-1234-5678';

    console.log( /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/.test(target) ); // true
    console.log( /^\d{3}-\d{3,4}-\d{4}$/.test(target) ); // true
}


// 📌 특수 문자 포함 여부 검사
// 특수문자는 A-Za-z0-9 이외의 문자이다.
{
    const target = 'abc#123';

    console.log( /[^A-Za-z0-9]/gi.test(target) ); // true
    console.log( /[^A-Za-z\d]/gi.test(target) ); // true
}

// 다음 방식으로 대체해 사용할 수도 있다.
// 이 방식은 특수 문자를 선택적으로 검사할 수 있다는 장점이 있다.
{
    const target = 'abc#123';

    console.log( /[\[\]\{\}\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi.test(target) ); // true
}

// 특수문자를 제거할 때는 String.prototype.replace 메서드를 사용한다.
{
    const target = 'abc#123!';

    console.log( target.replace(/[^A-Za-z0-9]/gi, '') ); // abc123
}
































