import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../../../supabaseClient";
import NavigationBar from "../../NavigationBar/NavigationBar";
import { Container, Content, DetailSection, Nav, StyledDate, Title, UrlLink, User } from "./ViewPost.style.jsx";

const ViewPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("free-board")
        .select("id, title, content, created_at, url, user_id, users:users!free-board_user_id_fkey(username, track)")
        .eq("id", id)
        .single();
      if (error) {
        console.log("Error fetching post:", error);
      } else {
        setPost(data);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  const formatUrl = (url) => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return `http://${url}`;
    }
    return url;
  };

  return (
    <Container>
      <Nav>
        <NavigationBar />
      </Nav>
      <DetailSection>
        <Title>{post.title}</Title>
        <UrlLink href={formatUrl(post.url)} target="_blank" rel="noopener noreferrer">
          {post.url}
        </UrlLink>
        <Content>{post.content}</Content>
        <User>작성자: {post.users.username}</User>
        {post.created_at && (
          <StyledDate>
            Date:{" "}
            {new Date(post.created_at).toLocaleString("ko-KR", {
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
