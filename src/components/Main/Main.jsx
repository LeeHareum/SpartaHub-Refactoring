import { useEffect, useState } from "react";
import bottom_banner from "../../assets/bottom_banner.png";
import top_banner from "../../assets/top_banner.png";
import supabase from "../../supabaseClient";
import { BottomBanner, Full, H1Container, TextContainer, TopBanner } from "./Main.styled";

const Main = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const googleUser = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession();
      const user = session?.user || null;
      setUser(user);

      if (user) {
        // 로컬 스토리지에 사용자 존재 여부 확인
        const existingUser = localStorage.getItem("user_" + user.id);
        if (!existingUser) {
          await insertGoogleUser(user);
          // 사용자 정보를 로컬 스토리지에 저장
          localStorage.setItem("user_" + user.id, JSON.stringify(user));
        }
      }
    };

    googleUser();
  }, []);

  // 구글 회원가입 : 홈으로 와서 DB 테이블에 사용자 정보 저장
  const insertGoogleUser = async () => {
    try {
      // 사용자 존재 여부 확인
      const { data: existingUser, error: fetchError } = await supabase
        .from("users")
        .select("*")
        .eq("id", user.id)
        .single();

      if (fetchError && fetchError.code !== "PGRST116") {
        console.log("Error fetching user:", fetchError.message);
        return;
      }

      if (!existingUser) {
        const { error: insertError } = await supabase.from("users").insert([
          {
            id: user.id,
            created_at: user.created_at,
            provider: user.app_metadata.provider,
            username: user.user_metadata.name,
            track: "React"
          }
        ]);

        if (insertError) {
          alert("Error inserting user:", insertError);
          throw insertError;
        }
      }
    } catch (error) {
      console.log("Error inserting user:", error.message);
    }
  };

  if (user) {
    insertGoogleUser();
  }

  return (
    <div>
      <div>
        <Full>
          <TopBanner>
            <img src={top_banner} alt="Top Banner" />
            <TextContainer>
              <H1Container>
                <h1>Sparta Hub</h1>
              </H1Container>
              <div>
                스파르타 내일배움캠프 수료생들을 위한 커뮤니티에서
                <br />
                다양한 정보를 공유해보세요.
              </div>
            </TextContainer>
          </TopBanner>
          <BottomBanner>
            <img src={bottom_banner} alt="Bottom Banner" />
          </BottomBanner>
        </Full>
      </div>
    </div>
  );
};

export default Main;
