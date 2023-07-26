import layer from "assets/Bamboo/layer.png";
import paper from "assets/Bamboo/paper.png";
import texture from "assets/Bamboo/texture.png";
import { BackgroundBoard, Container, Paper } from "../../Styled/Main";
import { useImageSetting } from "../../../hooks";
import { BambooImage, BambooPatten1, BambooPatten2, BambooPatten3 } from "../../Styled/Bamboo";

type Props = {
  imageUrl: string;
};

const Bamboo: React.FC<Props> = ({ imageUrl }) => {
  const { isImage, top, right, width, height } = useImageSetting(imageUrl);

  return (
    <Container id='template'>
      {isImage ? (
        <>
          <BambooPatten1 id='overlay_pattern_1' src={texture} />
          <BambooPatten2 id='overlay_pattern_2' src={texture} />
          <BambooPatten3 id='overlay_pattern_2' src={texture} />
          <BambooImage
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

export default Bamboo;
