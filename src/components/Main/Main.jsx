import bottom_banner from "../../assets/bottom_banner.png";
import top_banner from "../../assets/top_banner.png";
import { BottomBanner, Full, H1Container, TextContainer, TopBanner } from "./Main.styled";

const Hero = () => {
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

export default Hero;
