import React, { useEffect, useState } from 'react';
import './login.css';

const DummyUser = {
  email: 'neddang@gmail.com',
  pwd: 'test1234!!!',
}

export default function Login() {

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [pwdValid, setPwdValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);


  const handleEmail = (e) => {
    setEmail(e.target.value);

    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }

  const handlePwd = (e) => {
    setPwd(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwdValid(true);
    } else {
      setPwdValid(false);
    }
  }

  const onClickConfirmButton = () => {
    if (email === DummyUser.email && pwd === DummyUser.pwd) {
      alert('로그인에 성공했습니다.')
    } else {
      alert("로그인 정보가 올바르지 않거나 등록되지 않은 회원입니다.");
    }
  }

  useEffect(() => {
    if (emailValid && pwdValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwdValid]);

  return (
    <div className='login'>
      <div className='titleWrap'>
        이메일과 비밀번호를 <br />입력해주세요
      </div>

      <div className='contentWrap'>
        <div className='inputTitle'>이메일 주소</div>
        <div className='inputWrap'>
          <input
            className='input'
            placeholder='test@test.com'
            value={email}
            type="email"
            onChange={handleEmail}
          />
        </div>
        <div className='errorMessageWrap'>
          {
            !emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )
          }
        </div>

        <div className='inputTitle' style={{ 'marginTop': '26px' }}>
          비밀번호
        </div>
        <div className='inputWrap'>
          <input
            type="password"
            className='input'
            placeholder='영문, 숫자, 특수문자 '
            value={pwd}
            onChange={handlePwd}
          />
        </div>
        <div className='errorMessageWrap'>
          {
            !pwdValid && pwd.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )
          }
        </div>
      </div>

      <div>
        <button onClick={onClickConfirmButton} disabled={notAllow} className='bottomButton'>확인</button>
      </div>
    </div>
  )
}
