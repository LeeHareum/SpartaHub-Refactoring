import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import supabase from "../../supabaseClient";
import { Button, Container, Form, Input, Label } from "./PasswordReset.styled";

const PasswordReset = () => {
  const { access_token } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.updateUser({
      access_token,
      password: newPassword
    });
    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("비밀번호가 성공적으로 변경되었습니다.");
      navigate("/login");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="resetpassword">비밀번호 재설정</Label>
        <Input
          id="resetpassword"
          type="password"
          placeholder="새 비밀번호를 입력하세요."
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button type="submit">비밀번호 변경</Button>
      </Form>
    </Container>
  );
};

export default PasswordReset;
