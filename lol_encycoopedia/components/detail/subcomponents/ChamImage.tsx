import Image from "next/image";
import { Champion } from "../type";

const ChamImage = ({ image }: Pick<Champion, "image">) => {
  return (
    <div>
      <Image
        width={200}
        height={200}
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${image.full}`}
        alt=""
      ></Image>
    </div>
  );
};
export default ChamImage;
