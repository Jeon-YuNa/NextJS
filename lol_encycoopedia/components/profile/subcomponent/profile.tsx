import Image from "next/image";

type ProfileProps = {
  img: string;
  name: string;
};
const Profile = ({ img, name }: ProfileProps) => {
  return (
    <div>
      <span
        style={{
          display: "block",
          borderRadius: "8px",
          width: "50px",
          height: "50px",
          marginBottom: "5px",
        }}
      >
        <Image
          width={50}
          height={50}
          src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${img}.png`}
          alt={""}
        />
      </span>
      <span>{name}</span>
    </div>
  );
};
export default Profile;
