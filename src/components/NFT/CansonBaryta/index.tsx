import layer from "assets/CansonBaryta/layer.png";
import paper from "assets/CansonBaryta/paper.png";
import mask from "assets/CansonBaryta/mask.png";
import texture from "assets/CansonBaryta/texture.png";
import { BackgroundBoard, Container, Paper } from "../../Styled/Main";
import { useImageSetting } from "../../../hooks";
import {
  CansonBarytaImage,
  CansonBarytaPatten1,
  CansonBarytaPatten2,
  CansonBarytaPatten3,
} from "../../Styled/CansonBaryta";

type Props = {
  imageUrl: string;
};

const CansonBaryta: React.FC<Props> = ({ imageUrl }) => {
  const { isImage, top, right, width, height } = useImageSetting(imageUrl);

  return (
    <Container id='template'>
      {isImage ? (
        <>
          <CansonBarytaPatten1 id='overlay_pattern_1' src={mask} />
          <CansonBarytaPatten2 id='overlay_pattern_2' src={paper} />
          <CansonBarytaPatten3 id='overlay_pattern_2' src={texture} />
          <CansonBarytaImage
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

export default CansonBaryta;
