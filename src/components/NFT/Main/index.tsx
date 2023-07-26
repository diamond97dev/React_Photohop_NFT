import React from "react";

import Bamboo from "../Bamboo";
import CansonBaryta from "../CansonBaryta";
import CansonLustre from "../CansonPhotoLustre";
import GermanEtching from "../GermanEtching";
import Museum from "../CansonMuseumCanvas";
import NoArt from "../NoArt";
import PhotoRag from "../PhotoRag";
import Tecco from "../Tecco";

type Props = {
  imageUrl: string;
  paperType: string;
};

const NFT: React.FC<Props> = ({ imageUrl, paperType = "noArt" }) => {
  const NFTList = [
    {
      value: "noArt",
      render: () => <NoArt imageUrl={imageUrl} />,
    },
    {
      value: "bamboo",
      render: () => <Bamboo imageUrl={imageUrl} />,
    },
    {
      value: "cansonBaryta",
      render: () => <CansonBaryta imageUrl={imageUrl} />,
    },
    {
      value: "cansonMuseumCanvas",
      render: () => <Museum imageUrl={imageUrl} />,
    },
    {
      value: "cansonPhotoLustre",
      render: () => <CansonLustre imageUrl={imageUrl} />,
    },
    {
      value: "germanEtching",
      render: () => <GermanEtching imageUrl={imageUrl} />,
    },
    {
      value: "photoRag",
      render: () => <PhotoRag imageUrl={imageUrl} />,
    },
    {
      value: "tecco",
      render: () => <Tecco imageUrl={imageUrl} />,
    },
  ];
  return NFTList.find((item) => item.value === paperType)?.render() ?? <div>Undefined.</div>;
};

export default NFT;
