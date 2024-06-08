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
} from "./BoardList.styled";

const BoardList = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  const user = useSelector((state) => state.user.user);

  const handleAdd = async () => {
    const { data, error } = await supabase.from("board").insert({
      user_id: user.id,
      title,
      content,
      url
    });

    if (error) {
      error.message;
    } else {
      alert("작성 완료!");
      navigate("/noticeboard");
      error.message;
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
          <EditLabel>URL</EditLabel>
          <Input
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
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
