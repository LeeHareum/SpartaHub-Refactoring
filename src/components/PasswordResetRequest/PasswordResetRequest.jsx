import { useState } from "react";
import supabase from "../../supabaseClient";
import { Button, Container, Form, Input, Label } from "./PasswordResetRequest.styled";

const PasswordResetRequest = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("비밀번호 재설정 이메일을 전송했습니다.");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="resetemail">비밀번호 찾기</Label>
        <Input
          id="resetemail"
          type="email"
          placeholder="이메일을 입력하세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit">비밀번호 재설정</Button>
      </Form>
    </Container>
  );
};

export default PasswordResetRequest;
