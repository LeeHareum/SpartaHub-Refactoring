import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import supabase from "../../../supabaseClient";
import {
  BoardSection,
  ButtonContainer,
  CreateBtn,
  EditLabel,
  Input,
  Section,
  TextAreaContent,
  TitleDiv
} from "./BoardWrite.styled";

const BoardList = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const user = useSelector((state) => state.user.user);

  const handleAdd = async () => {
    const { data, error } = await supabase.from("free-board").insert({
      user_id: user.id,
      title,
      content
    });

    if (error) {
      error.message;
    } else {
      alert("작성 완료!");
      navigate("/freeboard");
      error.message;
    }
  };

  return (
    <BoardSection>
      <TitleDiv>
        <h1>게시글 등록</h1>
      </TitleDiv>
      <Section>
        <div>
          <EditLabel>제 목</EditLabel>
          <Input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <EditLabel>내 용</EditLabel>
          <TextAreaContent
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <ButtonContainer>
          <CreateBtn onClick={handleAdd}>등 록</CreateBtn>
        </ButtonContainer>
      </Section>
    </BoardSection>
  );
};

export default BoardList;
