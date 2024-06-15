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
    const { error } = await supabase.from("study-board").insert({
      user_id: user.id,
      title,
      content
    });

    if (error) {
      alert("작성에 실패했습니다. 다시 시도해주세요.");
      console.error("작성 에러:", error);
    } else {
      alert("작성 완료!");
      navigate("/studyboard");
    }
  };

  return (
    <BoardSection>
      <TitleDiv>
        <h1>취업공유 등록</h1>
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
