// 39장 DOM

// 브라우저의 렌더링 엔진은 HTML 문서를 파싱하여 브라우저가 이해할 수 있는 자료구조인 DOM을 생성한다.
// DOM(Document Object Model)은 HTML 문서의 계층적 구조와 정보를 표현하며,
// 이를 제어할 수 있는 API, 즉 프로퍼티와 메서드를 제공하는 트리 자료구조다.
// DOM에 대해 자세히 살펴보자.

// 👉 노드
// 📌 HTML 요소와 노드 객체
// HTML 요소(HTML Element)는 HTML 문서를 구성ㅎ사는 개별적인 요소를 의미한다.

// 시작 태그   어트리뷰트 이름      어트리뷰트 값     콘텐츠      종료 태그
// <div         class   =    "greeting">    Hello      </div>

// HTML 요소는 렌더링 엔진에 의해 파싱되어 DOM을 구성하는 요소 노드 객체로 변환된다.
// 이때 HTML 요소의 어트리뷰트는 어트리뷰트 노드로, HTML 요소의 텍스트 콘텐츠는 텍스트 노드로 변환된다.

// HTML 문서는 HTML 요소들의 집합으로 이뤄지며, HTML 요소는 중첩 관계를 갖는다.
// 즉, HTML 요소의 콘텐츠 영역(시작 태그와 종료 태그 사이)에는 텍스트뿐만 아니라 다른 HTML 요소도 포함할 수 있다.

// 이때 HTML 요소같에는 중첩 관계에 의해 계층적인 부자(parent-child)관계가 형성된다.
// 이러한 HTML 요소간의 부자 관계를 반영하여 HTML 문서의 구성 요소인 HTML 요소를 객체화한 모든 노드 객체들을 트리 자료구조로 구성한다.

// 🌷 트리 자료구조
// 트리 자료구조는 노드들의 계층 구조로 이뤄진다.
// 즉, 트리 자료구조는 부모 노드와 자식 노드로 구성되어 노드 간의 계층적 구조(부자, 형제 관계)를 표현하는 비선형 자료구조를 말한다.
// 트리 자료구조는 하나의 최상위 노드에서 시작한다.
// 최상위 노드는 부모 노드가 없으며, 루트 노드(root node)라 한다.
// 루트 도느는 0개 이상의 자식 노드를 갖는다.
// 자식 노드가 없는 노드를 리프 노드(leaf node)라 한다.

// ❕ 노드 객체들로 구성된 트리 자료구조를 DOM(Document Object Model)이라 한다.
// 노드 객체의 트리로 구조화되어 있기 때문에 DOM을 DOM 트리라고 부르기도 한다.


// 📌 노드 객체의 타입
// 예를 들어, 다음 HTML 문서를 렌더링 엔진이 파싱한다고 생각해보자.
// 예제 39-01
// 렌더링 엔진은 위 HTML 문서를 파싱하여 다음과 같은 DOM을 생성한다.
// 그림 39-4

// * 공백 텍스트 노드
// 정확히 말하자면 위 그림에는 공백 텍스트 노드가 생략되어 있다.
// HTML 요소 사이의 개행이나 공백은 텍스트 노드가 된다.

// 이처럼 DOM은 노드 객체의 계층적인 구조로 구성된다.
// 노드 객체는 종류가 있고 상속 구조를 갖는다.
// 노드 객체는 총 12개의 종류(노드 타입)가 있다.
// 이 중에서 중요한 노드 타입은 다음과 같이 4가지다.

// 🌷 문서 노드(document node)
// ❕ 문서 노드는 DOM 트리의 최상위에 존재하는 루트 노드로서 document 객체를 가리킨다.
// ❕ document 객체는 브라우저가 렌더링한 HTML 문서 전체를 가리키는 객체로서, 전역 객체 window의 document 프로퍼티에 바인딩되어 있다.
// ❕ 따라서 문서 노드는 window.document 또는 document로 참조할 수 있다.

// ❕ 브라우저 환경의 모든 자바스크립트 코드는 script 태그에 의해 분리되어 있어도 하나의 전역 객체 window를 공유한다.
// 따라서 모든 자바스크립트 코드는 전역 객체 window의 document 프로퍼티에 바인딩되어 있ㅎ는 하나의 document 객체를 바라본다.
// 즉, HTML 문서당 document 객체는 유일하다.

// 문서 노드, 즉 document 객체는 DOM 트리의 루트 노드이므로, DOM 트리의 노드들에 접근하기 위한 진입점(entry point) 역할을 담당한다.
// ❕ 즉, 요소, 어트리뷰트, 텍스트 노드에 접근하려면 문서 노드를 통해야 한다.


// 🌷 요소 노드
// 요소 노드는 HTML 요소를 가리키는 객체다.
// 요소 노드는 HTML 요소 간의 중첩에 의한 부자 관계를 가지며, 이 부자 관계를 통해 정보를 구조화한다.
// 따라서 요소 노드는 문서의 구조를 표현한다고 할 수 있다.


// 🌷 어트리뷰트 노드
// 어트리뷰트 노드는 HTML 요소의 어트리뷰트를 가리키는 객체다.
// 어트리뷰트 노드는 어트리뷰트가 지정된 HTML 요소의 요소 노드와 연결되어 있다.
// ❕ 단, 요소 노드는 부모 노드와 연결되어 있지만 어트리뷰트 노드는 부모 노드와 연결되어 있지 않고 요소 노드에만 연결되어 있다.
// ❕ 즉, 어트리뷰트 노드는 부모 노드가 없으므로 요소 노드의 형제 노드(sibling)는 아니다.
// 따라서 어트리뷰트 노드에 접근하여 어트리뷰트를 참조하거나 변경하려면 먼저 요소 노드에 접근해야 한다.


// 🌷 텍스트 노드
// 텍스트 노드는 HTML 요소의 텍스트를 가리키는 객체다.
// 요소 노드가 문서의 구조를 표현한다면, 텍스트 노드는 문서의 정보를 표현한다고 할 수 있다.
// ❕ 텍스트 노드는 요소 노드의 자식 노드이며, 자식 노드를 가질 수 없는 리프 노드(leaf node)다.
// ❕ 즉, 텍스트 노드는 DOM 트리의 최종단이다.
// 따라서 텍스트 노드에 접근하려면 먼저 부모 노드인 요소 노드에 접근해야 한다.

// 위 4가지 노드 타입 외에도 주석을 위한 Comment 노드, DOCTYPE을 위한 DocumentType 노드, 복수의 노드를 생성하여 추가할 때 사용하는 DocumentFragment 노드 등 총 12개의 노드 타입이 있다.
// DocumentFragment 노드에 대해서는 39.6.4절 "복수의 노드 생성과 추가"에서 살펴보자.


// 📌 노드 객체의 상속 구조
// DOM은 HTML 문서의 계층적 구조와 정보를 표현하며,
// 이를 제어할 수 있는 API, 즉 프로퍼티와 메서드를 제공하는 트리 자료구조라고 했다.
// 즉, DOM을 구성하는 노드 객체는 자신의 구조와 정보를 제어할 수 있는 DOM API를 사용할 수 있다.
// 이를 통해 노드 객체는 자신의 부모, 형제, 자식을 탐색할 수 있으며, 자신의 어트리뷰트와 텍스트를 조작할 수도 있다.

// DOM을 구성하는 노드 객체는 ECMAScript 사양에 정의된 표준 빌트인 객체가 아니라, 브라우저 환경에서 추가적으로 제공하는 호스트 객체다.
// 하지만 노드 객체도 자바스크립트의 객체이므로 프로토타입에 의한 상속 구조를 갖는다.
// 노드 객체의 상속 구조는 다음과 같다.

// 그림 39-5

// 위 그림과 같이 모든 노드 객체는 Object, EventTarget, Node 인터페이스를 상속받는다.
// 추가적으로 문서 노드는 Document.HTMLDocument 인터페이스를 상속받고,
// 어트리뷰트 노드는 Atrr, 텍스트 노드는 CharacterData 인터페이스를 각각 상속받는다.

// 요소 노드는 Element 인터페이스를 상속받는다.
// 또한 요소 노드는 추가적으로 HTMLElement와 태그의 종류별로 세분화된
// HTMLHtmlElement, HTMLHeadElement, HTMLBodyElement, HTMLULIstElement 등의 인터페이스를 상속받는다.

// 이를 프로토타입 체인 관점에서 살펴보자.
// 예를 들어, input 요소를 파싱하여 객체화한 input 요소 노드 객체는
// HTMLInputElement, HTMLElement, Element, Node, EventTarget, Object의 prototype에 바인딩되어 있는 프로토타입 객체를 상속받는다.
// 즉, input 요소 객체는 프로토타입 체인에 있는 모든 프로토타입의 프로퍼티나 메서드를 상속받아 사용할 수 있다.

// 39_example-39-02.html 참고

// 배열이 객체인 동시에 배열인 것처럼 input 요소 노드 객체도 다음과 같이 다양한 특성을 갖는 객체이며,
// 이러한 특성을 나타내는 기능들을 상속을 통해 제공받는다.

// input 요소 노드 객체의 특성                                          프로토타입을 제공하는 객체
// -------------------------------------------------------------------------------------------
// 객체                                                              Object
// 이벤트를 발생시키는 객체                                               EventTarget
// 트리 자료구조의 노드 객체                                              Node
// 브라우저가 렌더링할 수 있는 웹 문서의 요소(HTML, XML, SVG)를 표현하는 객체     Element
// 웹 문서의 요소 중에서 HTML 요소를 표현하는 객체                            HTMLElement
// HTML 요소 중에서 input 요소를 표현하는 객체                              HTMLInputElement

// 노드 객체의 상속 구조는 개발자 도구의 Elements 패널 우측의 Properties 패널에서 확인할 수 있다.
// -> 안뜨는데.?

// ❕ 노드 객체에는 노드 객체의 종류, 즉, 노드 타입에 상관없이 모든 노드 객체가 공통으로 갖는 기능도 있고, 노드 타입에 따라 고유한 기능도 있다.
// 예를 들어, 모든 객체에는 이벤트를 발생시킬 수 있다.
// 이벤트에 관련된 기능(EventTarget.addEventListener, EventTarget.removeEventListener 등)은 EventTarget 인터페이스가 제공한다.
// 또한 모든 노드 객체는 트리 자료구조의 노드로서 공통적으로
// 트리 탐색 기능(Node.parentNode, Node.ChildNodes, Node.previousSibling, Node.nextSibling 등)이나
// 노드 정보 제공 기능(Node.nodeType, Node.nodeName 등)이 필요하다.
// 이 같은 노드 관련 기능은 Node 인터페이스가 제공한다.

// HTML 요소가 객체화된 요소 노드 객체는 HTML 요소가 갖는 공통적인 기능이 있다.
// 예를 들어, input 요소 노드 객체와 div 요소 노드 객체는 모두 HTML 요소의 스타일을 나타내는 style 프로퍼티가 있다.
// 이처럼 HTML 요소가 갖는 공통적인 기능은 HTMLElement 인터페이스가 제공한다.

// 하지만 요소 노드 객체는 HTML 요소의 종류에 따라 고유한 기능도 있다.
// 예를 들어, input 요소 노드 객체는 value 프로퍼티가 필요하지만 div 요소 노드 객체는 value 프로퍼티가 필요하지 않다.
// 따라서 필요한 기능을 제공하는 인터페이스(HTMLInputElement, HTMLDivElement 등)가 HTML 요소의 종류에 따라 각각 다르다.

// ❕ 이처럼 노드 객체는 공통된 기능일수록 프로토타입 체인의 상위에, 개별적인 고유 기능일수록 프로토타입 체인의 하위에 프로토타입 체인을 구축하여
// 노드 객체에 필요한 기능, 즉 프로퍼티와 메서드를 제공하는 상속 구조를 갖는다.

// 지금까지 살펴본 바와 같이
// ❕ DOM은 HTML 문서의 계층적 구조와 정보를 표현하는 것은 물론
// ❕ 노드 객체의 종류, 즉 노드 타입에 따라 필요한 기능을 프로퍼티와 메서드의 집합인 DOM API(Application Programming Interface)로 제공한다.
// ❕ 이 DOM API를 통해 HTML의 구조나 내용 또는 스타일 등을 동적으로 조작할 수 있다.

// DOM API를 사용하기 위해 지금까지 살펴본 노드 객체의 상속 구조를 자세히 알아야 할 필요는 없다.
// 상속 구조를 모른다 하더라도 노드 객체는 상속을 통해 마치 자신의 프로퍼티와 메서드처럼 DOM API를 사용할 수 있다.

// 중요한 것은 DOM API, 즉 DOM이 제공하는 프로퍼티와 메서드를 사용하여 노드에 접근하고
// HTML의 구조나 내용 또는 스타일 등을 동적으로 변경하는 방법을 익히는 것이다.
// ❕ 프런트엔드 개발자에게 HTML은 단순히 태그와 어트리뷰트를 선언하고 배치하여 뷰를 구성하는 것 이상의 의미를 갖는다.
// ❕ 즉, HTML을 DOM과 연관지어 바라보아야 한다.



// 👉 요소 노드 취득
// HTML의 구조나 내용 또는 스타일 등을 동적으로 조작하려면 먼저 요소 노드를 취득해야 한다.
// 텍스트 노드는 요소 노드의 자식 노드이고, 어트리뷰트 노드는 요소 노드에 연결되어 있기 때문에
// 텍스트 노드나 어트리뷰트 노드를 조작하고자 할 때도 마찬가지다.

// 예를들어, HTML 문서 내의 h1 요소의 텍스트를 변경하고 싶은 경우
// 먼저 DOM 트리 내에 존재하는 h1 요소 노드를 취득할 필요가 있다.
// 그리고 취득한 요소의 자식 노드인 텍스트 노드를 변경하면 해당 h1 요소의 텍스트가 변경된다.

// 이처럼 요소 노드의 취득은 HTML 요소를 조작하는 시작점이다.
// 이를 위해 DOM은 요소 노드를 취득할 수 있는 다양한 메서드를 제공한다.


// 📌 id를 이용한 요소 노드 취득
// Document.prototype.getElementById 메서드는 인수로 전달한 id 어트리뷰트 값(이하 id 값)을 갖는 하나의 요소 노드를 탐색하여 반환한다.
// ❕ getElementById 메서드는 Document.prototype의 프로퍼티다.
// ❕ 따라서 반드시 문서 노드 (객체)인 document를 통해 호출해야 한다.

//  모든 예제는 39_example-getElementById.html 참고

// id 값은 HTML 문서 내에서 유일한 값이어야 하며, class 어트리뷰트와는 달리 공백 문자로 구분하여 여러 개의 값을 가질 수 없다.
// 단, HTML 문서 내에 중복된 id 값을 갖는 HTML 요소가 여러 개 존재하더라도 어떠한 에러도 발생하지 않는다.
// 즉, HTML 문서 내에는 중복된 id 값을 갖는 요소가 여러 개 존재할 가능성이 있다.
// ❕ 이러한 경우 getElementById 메서드는 인수로 전달된 id 값을 갖는 첫 번째 요소 노드만 반환한다.
// ❕ 즉, getElementById 메서드는 언제나 단 하나의 요소 노드를 반환한다.

// 만약 인수로 전달된 id 값을 갖는 HTML 요소가 존재하지 않는 경우 getElementById 메서드는 null을 반환한다.

// HTML 요소에 id 어트리뷰트를 부여하면 id 값과 동일한 이름의 전역 변수가 암묵적으로 선언되고 해당 노드 객체가 할당되는 부수 효과가 있다.

// 단, id 값과 동일한 이름의 전역 변수가 이미 선언되어 있으면 이 전역 변수에 노드 객체가 재할당되지 않는다.


// 📌 태그 이름을 이용한 요소 노드 취득
// Document.prototype/Element.prototype.getElementsByTagName 메서드는 인수로 전달한 태그 이름을 갖는 모든 요소 노드들을 탐색하여 반환한다.
// 메서드 이름에 포함된 Elements가 복수형인 것에서 알 수 있듯이 getElementsByTagName 메서드는
// 여러 개의 요소 노드 객체를 갖는 DOM 컬렉션 객체인 HTMLCollection 객체를 반환한다.

// 함수는 하나의 값만 반환할 수 있으므로 여러 개의 값을 반환하려면 배열이나 객체와 같은 자료구조에 담아 반환해야 한다.
// ❕ getElementsByTagName 메서드가 반환하는 DOM 컬렉션 객체인 HTMLCollection 객체는 유사 배열 객체이면서 이터러블이다.

// ❕ HTML 문서의 모든 요소를 취득하려면 getElementsByTagName 메서드의 인수로 '*'을 전달한다.

// ❕getElementsByTagName 메서드는 Document.prototype에 정의된 메서드와 Element.prototype에 정의된 메서드가 있다.
// Document.prototype.getElementsByTagName 메서드는
// DOM의 루트 노드인 문서 노드, 즉 document를 통해 호출하며 DOM 전체에서 요소 노드를 탐색하여 반환한다.
// Element.prototype.getElementsByTagName 메서드는
// 특정 요소 노드를 통해 호출하며, 특정 요소 노드의 자손 노드 중에서 요소 노드를 탐색하여 반환한다.

// 인수로 전달된 태그 이름을 갖는 요소가 존재하지 않는 경우 getElementsByTagName 메서드는 빈 HTMLCollection 객체를 반환한다.


// 📌 class를 이용한 요소 노드 취득
// Document.prototype/Element.prototype.getElementsByClassName 메서드는
// 인수로 전달한 class 어트리뷰트 값(이하 class 값)을 갖는 모든 요소 노드들을 탐색하여 반환한다.
// ❕ 인수로 전달할 class 값은 공백으로 구분하여 여러 개의 class를 지정할 수 있다.
// getElementsByTagName 메서드와 마찬가지로 getElementsByClassName 메서드는
// 여러 개의 요소 노드 객체를 갖는 DOM 컬렉션 객체은 HTMLCollection 객체를 반환한다.

// getElementsByClassName 메서드는 getElementsByTagName 메서드와 마찬가지로
// ❕ Document.prototype에 정의된 메서드와 Element.prototype에 정의된 메서드가 있다.
// Document.prototype.getElementsByClassName 메서드는
// DOM의 루트 노드인 문서 노드, 즉 document를 통해 호출하며 DOM 전체에서 요소 노드를 탐색하여 반환한다.
// Element.prototype.getElementsByClassName 메서드는
// 특정 요소 노드를 통해 호출하며, 특정 요소 노드의 자손 노드 중에서 요소 노드를 탐색하여 반환한다.

// 인수로 전달된 class 값을 갖는 요소가 존재하지 않는 경우 getElementsByClassName 메서드는 빈 HTMLCollection 객체를 반환한다.


// 📌 CSS 선택자를 이용한 요소 노드 취득
// CSS 선택자(selector)는 스타일을 적용하고자 하는 HTML 요소를 특정할 때 사용하는 문법이다.

// * {...}                  전체 선택자:         모든 요소를 선택
// p {...}                  태그 선택자:         모든 p 태그 요소를 선택
// #foo {...}               id 선택자:          id 값이 'foo'인 요소를 모두 선택
// .foo {...}               클래스 선택자:        class 값이 'foo'인 요소를 모두 선택
// input[type=text] {...}   어트리뷰트 선택자:     input 요소 중에 type 어트리뷰트 값이 'text'인 요소를 모두 선택
// div p {...}              후손 선택자:         div 요소의 후손 요소 중 p 요소를 모두 선택
// div > p {...}            자식 선택자:         div 요소의 자식 요소 중 p 요소를 모두 선택
// p + ul {...}             인접 형제 선택자:      p 요소의 형제 요소 중 p 요소 바로 뒤에 위치하는 ul 요소를 선택
// p ~ ul {...}             일반 형제 선택자:      p 요소의 형제 요소 중 p 요소 뒤에 위치하는 ul 요소를 모두 선택
// a:hover {...}            가상 클래스 선택자:     hover 상태인 a 요소를 모두 선택
// p::before {...}          가상 요소 선택자:      p 요소의 콘텐츠의 앞에 위치하는 공간을 선택, 일반적으로 content 프로퍼티와 함께 사용된다.

// Document.prototype/Element.prototype.querySelector 메서드는 인수로 전달한 CSS 선택자를 만족시키는 하나의 요소 노드를 탐색하여 반환한다.

// querySelector 메서드
// - 인수로 전달한 CSS 선택자를 만족시키는 요소 노드가 여러 개인 경우 첫 번째 요소 노드만 반환한다.
// - 인수로 전달한 CSS 선택자를 만족시키는 요소 노드가 존재하지 않는 경우 null을 반환한다.
// - 인수로 전달한 CSS 선택자가 문법에 맞지 않는 경우 DOMException이 에러가 발생한다.

// Document.prototype/Element.prototype.querySelectorAll 메서드는 인수로 전달한 CSS 선택자를 만족시키는 모든 요소 노드를 탐색하여 반환한다.
// querySelectorAll 메서드는 여러 개의 요소 노드 객체를 갖는 DOM 컬렉션 객체인 NodeList 객체를 반환한다.
//  NodeList 객체는 유사 배열 객체이면서 이터러블이다.

// querySelectorAll 메서드
// - 인수로 전달된 CSS 선택자를 만족시키는 요소가 존재하지 않는 경우 빈 NodeList 객체를 반환한다.
// - 인수로 전달된 CSS 선택자가 문법에 맞지 않는 경우 DOMException이 에러가 발생한다.

// ❕ HTML 문서의 모든 요소를 취득하려면 querySelectorAll 메서드의 인수로 전체 선택자 '*'를 전달한다.

// querySelector, querySelectorAll 메서드는 getElementsByTagName, getElementsByClassName 메서드와 마찬가지로
// ❕ Document.prototype에 정의된 메서드와 Element.prototype에 정의된 메서드가 있다.
// Document.prototype에 정의된 메서드는 DOM의 루트 노드인 문서 노드, 즉 document를 통해 호출하며 DOM 전체에서 요소 노드를 탐색하여 반환한다.
// Element.prototype에 정의된 메서드는 특정 요소 노드를 통해 호출하며, 특정 요소 노드의 자손 노드 중에서 요소 노드를 탐색하여 반환한다.

// CSS 선택자 문법을 사용하는 querySelector, querySelectorAll 메서드는 getElementById, getElementsBy*** 메서드보다 다소 느린 것으로 알려져 있다.
// 하지만 CSS 선택자 문법을 사용하여 좀 더 구체적인 조건으로 요소 노드를 취득할 수 있고, 일관된 방식으로 요소 노드를 취득할 수 있다는 장점이 있다.
// ❕ 따라서 id 어트리뷰트가 있는 요소를 취득하고 싶은 경우에는 getElementById 메서드를 사용하고
// 그외의 경우에는 querySelector, querySelectorAll 메서드를 사용하는 것을 권장한다.


// 📌 특정 요소 노드를 취득할 수 있는지 확인
// Element.prototype.matches 메서드는 인수로 전달한 CSS 선택자를 통해 특정 요소를 취득할 수 있는지 확인한다.

// 예제는 39_example-matches.html 참조

// Element.prototype.matches 메서드는 이벤트 위임을 사용할 때 유용하다.


// 📌 HTMLCollection과 NodeList
// DOM 컬렉션 객체인 HTMLCollection과 NodeList는 DOM API가 여러 개의 결과 값을 반환하기 위한 DOM 컬렉션 객체다.
// HTMLCollection과 NodeList는 모두 유사 배열 객체이면서 이터러블이다.
// 따라서 for...of 문으로 순회할 수 있으며 스프레드 문법을 사용하여 간단히 배열로 변환할 수 있다.

// HTMLCollection과 NodeList의 중요한 특직은 노드 객체의 상태 변화를 실시간으로 반영하는 살아 있는(live) 객체라는 것이다.
// HTMLCollection은 언제나 live 객체로 동작한다.
// 단, NodeList는 대부분의 경우 노드 객체의 상태 변화를 실시간으로 반영하지 않고 과거의 정적 상태를 유지하는 non-live 객체로 동작하지만 경우에 따라 live 객체로 동작할 때가 있다.

// 🌷 HTMLCollection
// getElementsByTagName, getElementsByClassName 메서드가 반환하는 HTMLCollection 객체는
// 노드 객체의 상태 변화를 실시간으로 반영하는 DOM 컬렉션 객체다.
// 따라서 HTMLCollection 객체를 살아 있는(live) 객체라고 부르기도 한다.

// 예제는 39_example-HTMLCollection.html 참고


// 🌷 NodeList
// HTMLCollection 객체의 부작용을 해결하기 위해 getElementsByTagName, getElementsByClassName 메서드를 사용하는 대신
// querySelectorAll 메서드를 사용하는 방법도 있다.
// querySelectorAll 메서드는 DOM 컬렉션 객체인 NodeList 객체를 반환한다.
// NodeList 객체는 실시간으로 노드 객체의 상태 변경을 반영하지 않는(non-live) 객체다.

{
    // const $elems = document.querySelectorAll('red');
    // $elems.forEach(elem => elem.className = 'blue');
}

// querySelectorAll이 반환하는 NodeList 객체는 NodeList.prototype.forEach 메서드를 상속받아 사용할 수 있다.
// ❕ NodeList.prototype.forEach 메서드는 Array.prototype.forEach 메서드와 사용방법이 동일하다.
// NodeList.prototype은 forEach 외에도 item, entried, keys, values 메서드를 제공한다.

// NodeList 객체는 대부분의 경우 노드 객체의 상태 변경을 실시간으로 반영하지 않고 과거의 정적 상태를 유지하는 non-live 객체로 동작한다.
// ❕ 하지만 childNodes 프로퍼티가 반환하는 NodeList 객체는
// HTMLCollection 객체와 같이 실시간으로 노드 객체의 상태 변경을 반영하는 live 객체로 동작하므로 주의가 필요하다.

// 예제는 39_example-NodeList.html 참고

// 이처럼 HTMLCollection이나 NodeList 객체는 예상과 다르게 동작할 때가 있어 다루기 까다롭고 실수하기 쉽다.
// ❕ 따라서 노드 객체의 상태 변경과 상관없이 안전하게 DOM 컬렉션을 사용하려면
// HTMLCollection이나 NodeList 객체를 배열로 변환하여 사용하는 것을 권장한다.
//  HTMLCollection과 NodeList 객체가 메서드를 제공하기는 하지만 배열의 고차 함수만큼 다양한 기능을 제공하지는 않는다.
//  HTMLCollection이나 NodeList 객체를 배열로 변환하면 배열의 유용한 고차 함수(forEach, map, filter, reduce 등)를 사용할 수 있다는 장점이 있다.

//  HTMLCollection과 NodeList 객체는 모두 유사 배열 객체이면서 이터러블이다.
// 따라서 스프레드 문법이나 Array.from 메서드를 사용하여 간단히 배열로 변환할 수 있다.

// 예제는 39_example-NodeList.html 참고



// 👉 노드 탐색
// 요소 노드를 취득한 다음, 취득한 요소 노드를 기점으로 DOM 트리를 옮겨 다니며 부모, 형제, 자식 노드 등을 탐색해야 할 때가 있다.

/*
<ul id="fruits">
    <li class="apple">Apple</li>
    <li class="banana">Banana</li>
    <li class="orange">Orange</li>
</ul>
*/

// ul#fruits 요소는 3개의 자식 요소를 갖는다.
// 이때 먼저 ul#fruits 요소 노드를 취득한 다음, 자식 노드를 모두 탐색하거나 자식 노드 중 하나만 탐색할 수 있다.
// li.banana 요소는 2개의 형제 요소와 부모 요소를 갖는다.
// 이때 먼저 li.banana 요소를 취득한 다음, 형제 노드를 탐색하거나 부모 노드를 탐색할 수 있다.

// 이처럼 DOM 트리 상의 노드를 탐색할 수 있도록 Node, Element 인터페이스는 트리 탐색 프로퍼티를 제공한다.

// ❕ parentNode, previousSibling, firstChild, childNodes 프로퍼티는 Node.prototype이 제공하고,
// ❕ 프로퍼티 키에 Element가 포함된 previousElementSibling, nextElementSibling과 children 프로퍼티는 Element.prototype이 제공한다.

// 노드 탐색 프로퍼티는 모두 접근자 프로퍼티다.
// 단, 노드 탐색 프로퍼티는 setter 없이 getter만 존재하며 참조만 가능한 읽기 전용 접근자 프로퍼티다.
// 읽기 전용 접근자 프로퍼티에 값을 할당하면 아무런 에러 없이 무시된다.


// 📌 공백 텍스트 노드
// 지금까지 언급하지 않았지만 HTML 요소 사이의 스페이스, 탭, 줄바꿈(개행) 등의 공백(white space) 문자는 텍스트 노드를 생성한다.
// 이를 텍스트 노드라 한다.

/*
<!DOCTYPE html>
<html lang="en">
    <body>
        <ul id="fruits">
            <li class="apple">Apple</li>
            <li class="banana">Banana</li>
            <li class="orange">Orange</li>
        </ul>
    </body>
</html>
 */

// 텍스트 에디터에서 HTML 문서에 스페이스 키, 탭 키, 엔터 키 등을 입력하면 공백 문자가 추가된다.
// 위 HTML 문서에도 공백 문자가 포함되어 있다.
// 위 HTML 문서는 파싱되어 다음과 같은 DOM을 생성한다.

// 그림 39-12

// 이처럼 HTML 문서의 공백 문자는 공백 텍스트 노드를 생성한다.
// 따라서 노드를 탐색할 때는 공백 문자가 생성한 공백 텍스트 노드에 주의해야 한다.
// 다음과 같이 인위적으로 HTML 문서의 공백 문자를 제거하면 공백 텍스트 노드를 생성하지 않는다.
// 하지만 가독성이 좋지 않으므로 권장하지 않는다.

/*
    <ul id="fruits"><li
    class="apple">Apple</li><li
    class="banana">Banana</li><li
    class="orange">Orange</li></ul>
 */


// 📌 자식 노드 탐색
// 자식 노드를 탐색하기 위해서는 다음과 같은 노드 탐색 프로퍼티를 사용한다.

// 프로퍼티                                   설명
// ---------------------------------------------------------------------------------------------------------------------------
// Node.prototype.childNodes                자식 노드를 모두 탐색하여 DOM 컬렉션 객체인 NodeList에 담아 반환한다.
//                                          childNodes 프로퍼티가 반환한 NodeList에는 요소 노드뿐만 아니라 텍스트 노드도 포함되어 있을 수 있다.

// Element.prototype.children               자식 노드 중에서 요소 노드만 모두 탐색하여 DOM 컬렉션 객체인 HTMLCollection 객체에 담아 반환한다.
//                                          children 프로퍼티가 반환한 HTMLCollection에는 텍스트 노드가 포함되지 않는다.

// Node.prototype.firstChild                첫 번째 자식 노드를 반환한다.
//                                          firstChild 프로퍼티가 반환한 노드는 텍스트 노드이거나 요소 노드다.

// Node.prototype.lastChild                 마지막 자식 노드를 반환한다.
//                                          lastChild 프로퍼티가 반환한 노드는 텍스트 노드이거나 요소 노드다.

// Element.prototype.firstElementChild      첫 번째 자식 요소 노드를 반환한다.
//                                          firstElementChild 프로퍼티는 요소 노드만 반환한다.

// Element.prototype.lastElementChild       마지막 자식 요소 노드를 반환한다.
//                                          lastElementChild 프로퍼티는 요소 노드만 반환한다.

// 예제는 39_example-nodeTraversing.html 참고


// 📌 자식 노드 존재 확인
// 자식 노드가 존재하는지 확인하려면 Node.prototype.hasChildNodes 메서드를 사용한다.
// hasChildNodes 메서드는 자식 노드가 존재하면 true, 존재하지 않으면 false를 반환한다.
// ❕ 단, hasChildNodes 메서드는 childNodes 프로퍼티와 마찬가지로 텍스트 노드를 포함하여 자식 노드의 존재를 확인한다.

// 예제는 39_example-nodeTraversing.html 참고

// ❕ 자식 노드 중에 텍스트 노드가 아닌 요소 노드가 존재하는지 확인하려면 hasChildNodes 메서드 대신
// children.length 또는 Element 인터페이스의 childElementCount 프로퍼티를 사용한다.

// 예제는 39_example-nodeTraversing.html 참고


// 📌 요소 노드의 텍스트 노드 탐색
// 요소 노드의 텍스트 노드는 요소 노드의 자식 노드다.
// 따라서 요소 노드의 텍스트 노드는 firstChild 프로퍼티로 접근할 수 있다.
// firstChild 프로퍼티는 첫 번째 자식 노드를 반환한다.
// firstChild 프로퍼티가 반환한 노드는 텍스트 노드이거나 요소 노드이다.

// 예제는 39_example-nodeTraversing.html 참고


// 📌 부모 노드 탐색
// 부모 노드를 탐색하려면 Node.prototype.parentNode 프로퍼티를 사용한다.
// 텍스트 노드는 DOM 트리의 최종단 노드인 리프 노드(leaf node)이므로 부모 노드가 텍스트 노드인 경우는 없다.

// 예제는 39_example-nodeTraversing.html 참고


// 📌 형제 노드 탐색
// 부모 노트가 같은 형제 노드를 탐색하려면 다음과 같은 노드 탐색 프로퍼티를 사용한다.
// 단 어트리뷰트 노드는 요소 노드와 연결되어 있지만 부모 노드가 같은 형제 노드가 아니기 때문에 반환되지 않는다.
// 즉, 아래 프로퍼티는 텍스트 노드 또는 요소 노드만 반환한다.

// 프로퍼티 설명
// -------------------------------------------------------------------------------------------------------------------
// Node.prototype.previousSibling               부모 노드가 같은 형제 노드 중에서 자신의 이전 형제 노드를 탐색하여 반환한다.
//                                              previousSibling 프로퍼티가 반환하는 노드는 요소 노드뿐만 아니라 텍스트 노드일 수도 있다.

// Node.prototype.nextSibling                   부모 노드가 같은 형제 노드 중에서 자신의 다음 형제 노드를 탐색하여 반환한다.
//                                              nextSibling 프로퍼티가 반환하는 노드는 요소 노드뿐만 아니라 텍스트 노드일 수도 있다.

// Element.prototype.previousElementSibling     부모 노드가 같은 형제 노드 중에서 자신의 이전 형제 노드를 탐색하여 반환한다.
//                                              previousElementSibling 프로퍼티는 요소 노드만 반환한다.

// Element.prototype.nextElementSibling         부모 노드가 같은 형제 노드 중에서 자신의 다음 형제 노드를 탐색하여 반환한다.
//                                              nextElementSibling 프로퍼티는 요소 노드만 반환한다.

// 예제는 39_example-nodeTraversing.html 참고



// 👉 노드 정보 취득
// 노드 객체에 대한 정보를 취득하려면 다음과 같은 노드 정보 프로퍼티를 사용한다.

// 프로퍼티                       설명
// ------------------------------------------------------------------------------------
// Node.prototype.nodeType      노드 객체의 종류, 즉 노드 타입을 나타내는 상수를 반환한다.
//                              노드 타입 상수는 Node에 정의되어 있다.
//                              - Node.ELEMENT_NODE: 요소 노드 타입을 나타내는 상수 1을 반환.
//                              - Node.TEXT_NODE: 텍스트 노드 타입을 나타내는 상수 3을 반환.
//                              - Node.DOCUMENT_NODE: 문서 노드 타입을 나타내는 상수 9를 반환.

// Node.prototype.nodeName      노드의 이름을 문자열로 반환한다.
//                              - 요소 노드: 대문자 문자열로 태그 이름("UL", "LI" 등)을 반환
//                              - 텍스트 노드: 문자열 "#text"를 반환
//                              - 문서 노드: 문자열 "#document"를 반환

// 예제는 39_example-nodeInfo.html 참고



// 👉 요소 노드의 텍스트 조작
// 📌 nodeValue
// 지금까지 살펴본 노드 탐색, 노드 정보 프로퍼티는 모두 읽기 전용 접근자 프로퍼티다.
// 지금부터 살펴볼 Node.prototype.nodeValue 프로퍼티는 setter와 getter 모두 존재하는 접근자 프로퍼티다.
// 따라서 nodeValue 프로퍼티는 참조와 할당 모두 가능하다.

// 노드 객체의 nodeValue 프로퍼티를 참조하면 노드 객체의 값을 반환한다.
// 노드 객체의 값이란 텍스트 노드의 텍스트다.
// 따라서 텍스트 노드가 아닌 노드, 즉 문서 노드나 요소 노드의 nodeValue 프로퍼티를 참조하면 null을 반환한다.

// 예제는 39_example-nodeValue-textContent.html 참고

// 이처럼 텍스트 노드의 nodeValue 프로퍼티를 참조할 때만 텍스트 노드의 값, 즉 텍스트를 반환한다.
// 텍스트 노드가 아닌 노드 객체의 nodeValue 프로퍼티를 참조하면 null을 반환하므로 의미가 없다.

// 텍스트 노드의 nodeValue 프로퍼티에 값을 할당하면 텍스트 노드의 값, 즉 텍스트를 변경할 수 있다.
// 따라서 요소 노드의 텍스트를 변경하려면 다음과 같은 순서의 처리가 필요한다.

// 1. 텍스트를 변경할 요소 노드를 취득한 다음, 취득한 요소 노드의 텍스트 노드를 탐색한다.
//    텍스트 노드는 요소 노드의 자식 노드이므로 firstChild 프로퍼티를 사용하여 탐색한다.
// 2. 탐색한 텍스트 노드의 nodeValue 프로퍼티를 사용하여 텍스트 노드의 값을 변경한다.

// 예제 39_example-nodeValue-textContent.html 참고


// 📌 textContent
// Node.prototype.textContent 프로퍼티는 setter와 getter 모두 존재하는 접근자 프로퍼티로서,
// 요소 노드의 텍스트와 모든 자손 노드의 텍스트를 모두 취득하거나 변경한다.

// 요소 노드의 textContent 프로퍼티를 참조하면 요소 노드의 콘텐츠 영역(시작 태그와 종료 태그 사이) 내의 텍스트를 모두 반환한다.
// 다시 말해, 요소 노드의 ㅊhildNodes 프로퍼티가 반환한 모든 노드들의 텍스트 노드의 값, 즉 텍스트를 모두 반환한다.
// 이때 HTML 마크업은 무시된다.

// 예제 39_example-nodeValue-textContent.html 참고

// 앞서 살펴본 nodeValue 프로퍼티를 참조하여도 텍스트를 취득할 수 있었다.
// 단, 텍스트 노드가 아닌 노드의 nodeValue 프로퍼티는 null을 반환하므로 의미가 없고,
// 텍스트 노드의 nodeValue 프로퍼티를 참조할 때만 텍스트 노드의 값, 즉 텍스트를 반환한다.
// 다만 nodeValue 프로퍼티를 사용하면 textContent 프로퍼티를 사용할 때와 비교해서 코드가 더 복잡하다.

// 예제 39_example-nodeValue-textContent.html 참고

// 만약 요소 노드의 콘텐츠 영역에 자식 요소 노드가 없고 텍스트만 존재한다면 firstChild.nodeValue와 textContent 프로퍼티는 같은 결과를 반환한다.
// 이 경우 textContent 프로퍼티를 사용하는 것이 코드가 더 간단하다.

// 예제 39_example-nodeValue-textContent.html 참고

// 요소 노드의 textContent 프로퍼티에 문자열을 할당하면 요소 노드의 모든 자식 노드가 제거되고 할당한 문자열이 텍스트로 추가된다.
// ❕ 이때 할당한 문자열에 HTML 마크업이 포함되어 있더라도 문자열 그대로 인식되어 텍스트로 취급된다.
// 즉, HTML 마크업이 파싱되지 않는다.

// 예제 39_example-nodeValue-textContent.html 참고

// ❕ 참고로 textContent 프로퍼티와 유사한 동작을 하는 innerText 프로퍼티가 있다.
// ❕ innerText 프로퍼티는 다음과 같은 이유로 사용하지 않는 것이 좋다
// - innerText 프로퍼티는 CSS에 순종적이다.
//   예를 들어, innerText 프로퍼티는 CSS에 의해 비표시(visibility: hidden)로 지정된 요소 노드의 텍스트를 반환하지 않는다.
// - innerText 프로퍼티는 CSS를 고려해야 하므로 textContent 프로퍼티보다 느리다.


// 👉 DOM 조작
// 📌 innerHTML
// 📌 insertAdjacentHTML 메서드
// 📌 노드 생성과 추가
// 🌷 텍스트 노드 생성
// 🌷 텍스트 노드를 요소 노드의 자식 노드로 추가
// 🌷 요소 노드를 DOM에 추가
// 📌 복수의 노드 생성과 추가
// 📌 노드 삽입
// 🌷 마지막 노드로 추가
// 🌷 지정한 위치에 노드 삽입
// 📌 노드 이동
// 📌 노드 복사
// 📌 노드 교체
// 📌 노드 삭제






























