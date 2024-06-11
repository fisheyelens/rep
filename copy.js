// person 클래스 정의
class LifeIs {
  constructor() { // * class 매서드에서는  this를 사용 할 수 없기 때문에 생성자 함수인 constructor를 만든 후 , this를 작성합니다.
    // 속성 정적으로 초기화
    this.life = '';
    this.grade = 0;
    this.state = '';
  }
  // * Class 로 Person이라는 객체를 독립 화 시킨 후, constructor라는 생성자 함수로 일정의 rule을 생성합니다.
  // * name과 job이라는 키 값은 문자열('')로 작성 되게 한다는 설정이 되어있고, 
  // * age의 키 값만 숫자열로 작성이 되게 설정을 한다는 의미입니다.


  get life() {
    return this._life;
  }
  // name property
  set life(value) {
    this._life = value;
  }
  // * name 이라는 인스턴스를 생성합니다. 함수의 인자 값을 value 라고 지정을 하고 다시 name이라는 인스턴스를 들어온 인자 값인 value 임을 정의합니다.
  // * 의사 코드 : name이라는 함수의 인자 값에 value가 들어온다면, 그 name은 인스턴스가 되고, 처음 인자값에 입력된 value가 name이라는 인스턴스의 고정 값이 됩니다.

// * 인스턴스로 만들어 놓은 name이라는 인스턴스를 사용합니다. set name이 name이라는 인스턴스라는 틀을 만들어 낸다면, 
// * get name은 그 틀을 이용하여 내용물을 찍어내는 과정입니다.
// * get name의 인스턴스에 동적으로 인자 값에 입력 하면 그 입력 값이 이름이 됩니다.
// * person이라는 class 안에서 일어난 인스턴스 이기 때문에, 추후 person이라는 객체의 속성이 지정이 되면 자동으로 위의 틀을 기반으로 name을 배출합니다.


  // age property
  set grade(value) {
    this._grade = value;
  }
  // * age라는 인스턴스를 생성합니다. 함수의 인자 값을 value 라고 지정을 하고 다시 age라는 인스턴스를 들어온 인자 값인 value 임을 정의합니다.
  // * 의사 코드 : name이라는 함수의 인자 값에 value가 들어온다면, 그 name은 인스턴스가 되고, 처음 인자값에 입력된 value가 name이라는 인스턴스의 고정 값이 됩니다.

  get grade() {
    return this._grade;
  }
// * 인스턴스로 만들어 놓은 name이라는 인스턴스를 사용합니다. set name이 name이라는 인스턴스라는 틀을 만들어 낸다면, 
// * get name은 그 틀을 이용하여 내용물을 찍어내는 과정입니다.
// * get name의 인스턴스에 동적으로 인자 값에 입력 하면 그 입력 값이 이름이 됩니다.
// * person이라는 class 안에서 일어난 인스턴스 이기 때문에, 추후 person이라는 객체의 속성이 지정이 되면 자동으로 위의 틀을 기반으로 name을 배출합니다.


  // job property
  set state(value) {
    this._state =value;
  }
    // * name 이라는 인스턴스를 생성합니다. 함수의 인자 값을 value 라고 지정을 하고 다시 name이라는 인스턴스를 들어온 인자 값인 value 임을 정의합니다.
  // * 의사 코드 : name이라는 함수의 인자 값에 value가 들어온다면, 그 name은 인스턴스가 되고, 처음 인자값에 입력된 value가 name이라는 인스턴스의 고정 값이 됩니다.

  get state() {
    return this._state;
  }
}
// * 인스턴스로 만들어 놓은 name이라는 인스턴스를 사용합니다. set name이 name이라는 인스턴스라는 틀을 만들어 낸다면, 
// * get name은 그 틀을 이용하여 내용물을 찍어내는 과정입니다.
// * get name의 인스턴스에 동적으로 인자 값에 입력 하면 그 입력 값이 이름이 됩니다.
// * person이라는 class 안에서 일어난 인스턴스 이기 때문에, 추후 person이라는 객체의 속성이 지정이 되면 자동으로 위의 틀을 기반으로 name을 배출합니다.


const lifeIs = new LifeIs();
lifeIs.life = "good";
lifeIs.grade = 100;
lifeIs.state = "happy";
// * 최상위의 객체인 person의 속성 값을 설정 해줍니다. 
// * person을 new person으로 선언 한 이유는 name,age,job 인스턴스가 모두 포함 된 person 이라는 생성자 함수를 만든 후,
// * 함수를 사용하여 새로 입력 될 데이터를 위한 new person 이라는 새로운 객체를 만드는 것 입니다.  
// * new person 에 해당하는 name,age,job 값을 입력 해줍니다.


// 객체 속성 출력
console.log("life:",  lifeIs.life);
console.log("grade:", lifeIs.grade);
console.log("state:", lifeIs.state);
// * 앞서 작성한 person의 name,age,job을 콘솔에 입력하는 명령을 작성합니다.
