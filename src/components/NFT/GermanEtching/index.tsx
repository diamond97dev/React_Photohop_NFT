import layer from "assets/GermanEtching/layer.png";
import paper from "assets/GermanEtching/paper.png";
import texture from "assets/GermanEtching/texture.png";
import mask from "assets/GermanEtching/mask.png";
import { BackgroundBoard, Container, Paper } from "../../Styled/Main";
import { useImageSetting } from "../../../hooks";
import {
  GermanEtchingImage,
  GermanEtchingPatten1,
  GermanEtchingPatten2,
  GermanEtchingPatten3,
  GermanEtchingPatten4,
} from "../../Styled/GermanEtching";

type Props = {
  imageUrl: string;
};

const GermanEtching: React.FC<Props> = ({ imageUrl }) => {
  const { isImage, top, right, width, height } = useImageSetting(imageUrl);

  return (
    <Container id='template'>
      {isImage ? (
        <>
          <GermanEtchingPatten1 id='overlay_pattern_1' src={texture} />
          <GermanEtchingPatten2 id='overlay_pattern_2' src={texture} />
          <GermanEtchingPatten3 id='overlay_pattern_2' src={texture} />
          <GermanEtchingPatten4 id='overlay_pattern_2' src={mask} />
          <GermanEtchingImage
            id='content'
            src={imageUrl}
            style={{
              top,
              right,
              width,
              height,
              maxWidth: width,
            }}
          />
        </>
      ) : null}
      <Paper id='texture' src={paper} />
      <BackgroundBoard id='background' src={layer} draggable={false} />
    </Container>
  );
};

export default GermanEtching;
