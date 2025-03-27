const Menu = ({ params }) => {
  const { id } = params;
  const menuCategory = {
    0: "아메리카노",
    1: "라떼",
    2: "민트초코라떼",
  };
  return <div>메뉴: {menuCategory[+id] || "없는 메뉴 입니다."}</div>;
};
export default Menu;
