import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import googleIcon from "../../assets/google_icon.png";
import homeLogo from "../../assets/spartahub_logo.png";
import { login } from "../../redux/slices/userSlice";
import supabase from "../../supabaseClient";
import {
  Button,
  Container,
  FlexDiv,
  Form,
  GoogleIcon,
  GoogleIconContainer,
  HubImg,
  ImgContainer,
  Input,
  Label,
  Select,
  Span,
  Title
} from "./LoginForm.styled";

const LoginForm = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(isAuthenticated);
  const [track, setTrack] = useState("");

  const isValidPassword = (password) => {
    return password.length >= 6;
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidUsername = (username) => {
    return username.length >= 2;
  };

  // 회원가입
  const handleSignup = async (event) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      alert("유효한 이메일 주소를 입력해주세요.");
      return;
    }
    if (!isValidPassword(password)) {
      alert("비밀번호는 6자 이상이어야 합니다.");
      return;
    }
    if (!isValidUsername(username)) {
      alert("닉네임은 2자 이상이어야 합니다.");
      return;
    }
    if (password !== passwordCheck) {
      alert("비밀번호를 다시 확인해 주세요.");
      return;
    }

    try {
      // 이메일 중복 확인
      const { data: existingUser, error: checkError } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .single();

      if (checkError && checkError.code !== "PGRST116") {
        throw checkError;
      }

      if (existingUser) {
        alert("이미 존재하는 이메일입니다. 다른 이메일을 사용해주세요.");
        return;
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { username, track, provider: null }
        }
      });

      if (error) {
        if (error.message === "User already registered") {
          alert("이미 존재하는 이메일입니다. 다른 이메일을 사용해주세요.");
          return;
        } else {
          throw error;
        }
      }

      if (data.user) {
        const { error: insertError } = await supabase
          .from("users")
          .insert([{ id: data.user.id, email, username, track, provider: null }]);

        if (insertError) throw insertError;
        setUser(data.user);
        setUsername(username);

        alert("회원가입 성공! 환영합니다. " + username + "님!");
        setEmail("");
        setPassword("");
        setPasswordCheck("");
        setUsername("");
        setTrack("");
      } else {
        throw new Error("회원가입 후 사용자 데이터가 정의되지 않았습니다");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // 로그인
  const handleLogin = async (event) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      alert("유효한 이메일 주소를 입력해주세요.");
      return;
    }
    if (!isValidPassword(password)) {
      alert("비밀번호를 확인해주세요.");
      return;
    }

    // provider가 null값이어야 함.
    try {
      const { data: user, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .is("provider", null)
        .single();

      if (error) {
        throw error;
      }

      if (user) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
        });

        if (error) {
          throw error;
        }

        if (data.user) {
          dispatch(login(data.user));
          navigate("/mypage");
        }
      } else {
        alert("일반 회원가입 이메일이 아니거나, 해당 이메일로 구글 로그인이 필요합니다.");
      }
    } catch (error) {
      alert("존재하지 않는 계정입니다.");
    }
  };

  // 구글 로그인
  const googleLogin = async () => {
    try {
      const { data } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { queryParams: { access_type: "offline", prompt: "consent" } }
      });

      navigate("/");

      console.log("data => ", data);
    } catch (error) {
      console.error("Google login error:", error);
      alert(error.message);
    }
  };

  // 비밀번호 재설정
  const moveToResetPassword = () => {
    navigate("/passwordresetrequest");
  };

  return (
    <Container>
      {isLogin ? (
        <Form>
          <FlexDiv>
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={handleLogin}>로그인</Button>
              <p style={{ marginTop: "16px" }}>
                비밀번호를 잊었다면? <Span onClick={moveToResetPassword}>비밀번호 찾기</Span>
              </p>
              <p style={{ marginTop: "16px" }}>
                계정이 없으신가요? <Span onClick={() => setIsLogin(false)}>회원가입</Span>
              </p>
              <GoogleIconContainer onClick={googleLogin}>
                또는, 구글계정으로 로그인 <GoogleIcon src={googleIcon} />
              </GoogleIconContainer>
            </div>
            <ImgContainer>
              <HubImg src={homeLogo} alt="홈 로고" />
            </ImgContainer>
          </FlexDiv>
        </Form>
      ) : (
        <Form>
          <FlexDiv>
            <div>
              <Title>스파르타에 다시 돌아온 것을 환영합니다!</Title>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Label htmlFor="password-check">Password check</Label>
              <Input
                id="password-check"
                type="password"
                placeholder="Password check"
                value={passwordCheck}
                onChange={(e) => setPasswordCheck(e.target.value)}
              />
              <Label htmlFor="username">Name</Label>
              <Input
                id="username"
                type="text"
                placeholder="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Label htmlFor="track">Track</Label>
              <Select id="track" value={track} onChange={(e) => setTrack(e.target.value)}>
                <option value="">Select Track</option>
                <option value="React">React</option>
                <option value="UX/UI">UX/UI</option>
                <option value="Node">Node</option>
                <option value="Java, Spring">Java, Spring</option>
                <option value="Game">Game</option>
                <option value="Android">Android</option>
                <option value="ios">ios</option>
              </Select>
              <Button onClick={handleSignup}>회원가입</Button>
              <p style={{ marginTop: "16px" }}>
                이미 계정이 있으신가요? <Span onClick={() => setIsLogin(true)}>로그인</Span>
              </p>
            </div>
            <ImgContainer>
              <HubImg src={homeLogo} alt="홈 로고" onClick={googleLogin} />
            </ImgContainer>
          </FlexDiv>
        </Form>
      )}
    </Container>
  );
};

export default LoginForm;
