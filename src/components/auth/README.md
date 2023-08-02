# AUTH 작업일지

## 07.31.

### 이메일 및 패스워드 유효성 검사 동적 구현

```
 // 이메일 형식 유효성 체크
  const emailCheck = () => {
    if (signUpInfo.email.trim() === '') {
      return true;
    }

    return rEmail.test(signUpInfo.email);
  };

  // 비밀번호 형식 유효성 체크
  const passwordCheck = () => {
    if (signUpInfo.password.trim() === '') {
      return true;
    }

    return rPassword.test(signUpInfo.password);
  };
```

두 함수를 통해, atom에 저장된 회원가입 정보와 미리 지정해둔 정규식을 비교하여 boolean값을 리턴하게 된다.

---

```
// 이메일 또는 비밀번호에 유효성 검사 렌더링
  const renderValid = () => {
    if (props.name === 'email') return emailCheck();
    else if (props.name === 'password') return passwordCheck();
    else return true;
  };

 <Input
  label={`${props.label}`}
  name={props.name}
  onChange={handleChange}
  placeholder={props.placeholder}
  type={props.type}
  valid={renderValid()}
  />
```

Input 컴포넌트에 valid props를 전달하게되는데,
email 유효성 검사일 때는 emailCheck()의 boolean 값을, 패스워드 유효성 검사일 때는 passwordCheck()의 boolean 값을 전달하게 된다.
또한, Input type이 이메일과 패스워드 둘 다 해당하지 않으면 정적으로 true를 전달하므로 boolean 값을 동적으로 전달하지 않는다.

---

```
  // 유효성에 따른 조건부 렌더링
  const renderRegex = () => {
    if (props.name === 'email') {
      return <AuthValidCheck valid={emailCheck()} name={props.name} />;
    } else if (props.name === 'password') {
      return <AuthValidCheck valid={passwordCheck()} name={props.name} />;
    }
  };

  return (
    .
    .
    .

    {renderRegex()}
  )
```

Input 컴포넌트에 유효성을 동적으로 전달하여 동적 스타일링을 구현하는 한편,
이와 유사하게 이메일과 패스워드 입력에만 현재 입력이 유효한지, 유효하지 않은 지 클라이언트에 알리는 컴포넌트를 리턴한다.
