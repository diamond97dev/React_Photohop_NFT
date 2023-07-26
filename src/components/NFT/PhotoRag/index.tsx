import layer from "assets/PhotoDrag/layer.png";
import paper from "assets/PhotoDrag/paper.png";
import texture from "assets/PhotoDrag/texture1.png";
import { BackgroundBoard, Container, Paper } from "../../Styled/Main";
import { useImageSetting } from "../../../hooks";
import { PhotoRagImage, PhotoRagPatten1, PhotoRagPatten2 } from "../../Styled/PhotoRag";

type Props = {
  imageUrl: string;
};

const PhotoRag: React.FC<Props> = ({ imageUrl }) => {
  const { isImage, top, right, width, height } = useImageSetting(imageUrl);

  return (
    <Container id='template'>
      {isImage ? (
        <>
          <PhotoRagPatten1 id='overlay_pattern_1' src={texture} />
          <PhotoRagPatten2 id='overlay_pattern_2' src={texture} />
          <PhotoRagImage
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

export default PhotoRag;
