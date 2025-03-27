import Image from "next/image";
import { Champion } from "../../../../components/detail/type";
import Story from "../../../../components/detail/subcomponents/Story";
import Name from "../../../../components/detail/subcomponents/Name";
import Title from "../../../../components/detail/subcomponents/Title";
import ChamImage from "../../../../components/detail/subcomponents/ChamImage";

type DetailPageProps = {
  params: { name: string };
};

const DetailPage = async ({ params }: DetailPageProps) => {
  const { name } = params;
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json"
  );
  const data = await res.json();
  const champions: Champion[] = Object.values(data.data);
  console.log(champions);
  const filterChampions = champions.find(
    (v) => v.name == decodeURIComponent(name)
  );
  console.log([...new Set(champions.map((v) => v.tags).flatMap((v) => v))]);
  if (!filterChampions) return <div>없는 챔피언</div>;

  return (
    <div>
      <Title {...filterChampions} />
      <Name {...filterChampions} />
      <ChamImage {...filterChampions} />
      <Story {...filterChampions} />
    </div>
  );
};

export default DetailPage;
