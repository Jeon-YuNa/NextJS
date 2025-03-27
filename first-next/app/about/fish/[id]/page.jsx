const FishIdPage = ({ params }) => {
  const { id } = params;
  const fishObj = {
    0: "니모",
    1: "도리",
    2: "피즈",
  };
  return <div>안녕 {fishObj[+id]} 물고기</div>;
};
export default FishIdPage;
