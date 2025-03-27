import { Champion, Position } from "../type";

const Position = ({ tags }: Pick<Champion, "tags">) => {
  const imgeObj: Record<Position, string> = {
    Fighter: "전사",
    Mage: "마법사",
    Assassin: "암살자",
    Marksman: "저격수",
    Support: "서포터",
    Tank: "탱커",
  };
  return <div>{tags.map((v) => imgeObj[v])}</div>;
};
export default Position;
