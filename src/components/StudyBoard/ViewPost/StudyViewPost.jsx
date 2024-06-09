import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../../../supabaseClient";
import { Container, Content, DetailSection, StyledDate, Title, User } from "./ViewPost.style.jsx";

const ViewPost = () => {
  const { id } = useParams();
  const [study, setStudy] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("study-board")
        .select("id, title, content, created_at, user_id, users:users!study-board_user_id_fkey(username, track)")
        .eq("id", id)
        .single();
      if (error) {
        console.log("Error fetching post:", error);
      } else {
        setStudy(data);
      }
    };
    fetchPost();
  }, [id]);

  if (!study) return <div>Loading...</div>;

  return (
    <Container>
      <DetailSection>
        <Title>{study.title}</Title>
        <Content>{study.content}</Content>
        <User>작성자: {study.users.username}</User>
        {study.created_at && (
          <StyledDate>
            Date:{" "}
            {new Date(study.created_at).toLocaleString("ko-KR", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit"
            })}
          </StyledDate>
        )}
      </DetailSection>
    </Container>
  );
};

export default ViewPost;
