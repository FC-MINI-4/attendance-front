# AUTH 작업일지

## 23.07.31.

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

## 23.08.09.

### 로그인 페이지를 최초 리다이렉션(301) 페이지로 설정

301 리다이렉션은 영구적인 리다이렉션을 의미합니다. 이것은 리소스(페이지, 파일 등)의 URL이 영구적으로 변경되었음을 나타내며, 검색 엔진과 브라우저에게 이를 알려줍니다. 이렇게 하면 검색 엔진은 새로운 URL을 인덱싱하고, 브라우저는 사용자에게 새로운 URL로 리다이렉션됨을 표시합니다.

301 리다이렉션은 주로 페이지나 리소스의 URL이 변경된 경우, 기존 URL로 접근하는 사용자와 검색 엔진을 새 URL로 안내하기 위해 사용됩니다.

301 리다이렉션의 특징

- 영구적인 변경: 리소스의 URL이 변경되어 영구적으로 새 URL로 이동함을 의미합니다.
- SEO에 영향: 검색 엔진은 새 URL을 색인하고 이전 URL의 순위를 새 URL에 반영합니다.
- 브라우저 캐싱: 브라우저가 새 URL을 요청할 때 이전에 저장된 정보를 사용하지 않습니다.
- 브라우저의 주소 표시줄 변화: 사용자는 새 URL로 리다이렉션되며, 주소 표시줄에 새 URL이 표시됩니다.
