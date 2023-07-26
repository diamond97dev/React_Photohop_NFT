import layer from "assets/Tecco/layer.png";
import paper from "assets/Tecco/paper.png";
import texture from "assets/Tecco/texture.png";
import mask from "assets/Tecco/mask.png";

import { BackgroundBoard, Container, Paper } from "../../Styled/Main";
import { useImageSetting } from "../../../hooks";
import { TeccoImage, TeccoPatten1, TeccoPatten2 } from "../../Styled/Tecco";

type Props = {
  imageUrl: string;
};

const Tecco: React.FC<Props> = ({ imageUrl }) => {
  const { isImage, top, right, width, height } = useImageSetting(imageUrl);

  return (
    <Container id='template'>
      {isImage ? (
        <>
          <TeccoPatten1 id='overlay_pattern_1' src={texture} />
          <TeccoPatten1 id='overlay_pattern_1' src={texture} />
          <TeccoPatten2 id='overlay_pattern_1' src={mask} />
          <TeccoImage
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

export default Tecco;
