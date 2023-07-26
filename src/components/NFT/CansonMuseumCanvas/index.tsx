import layer from "assets/CansonMuseumCanvas/layer.png";
import paper from "assets/CansonMuseumCanvas/paper.png";
import texture from "assets/CansonMuseumCanvas/texture.png";
import mask from "assets/CansonMuseumCanvas/mask.png";
import { BackgroundBoard, Container, Paper } from "../../Styled/Main";
import { useImageSetting } from "../../../hooks";
import {
  MuseumImage,
  MuseumPatten1,
  MuseumPatten2,
  MuseumPatten3,
  MuseumPatten4,
} from "../../Styled/CansonMuseumCanvas";

type Props = {
  imageUrl: string;
};

const Museum: React.FC<Props> = ({ imageUrl }) => {
  const { isImage, top, right, width, height } = useImageSetting(imageUrl);

  return (
    <Container id='template'>
      {isImage ? (
        <>
          <MuseumPatten1 id='overlay_pattern_1' src={texture} />
          <MuseumPatten2 id='overlay_pattern_2' src={texture} />
          <MuseumPatten3 id='overlay_pattern_2' src={texture} />
          <MuseumPatten4 id='overlay_pattern_2' src={mask} />
          <MuseumImage
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

export default Museum;
