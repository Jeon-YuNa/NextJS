import { Champion } from "../type";

const Title = ({ title }: Pick<Champion, "title">) => {
  return (
    <div>
      <strong>{title}</strong>
    </div>
  );
};
export default Title;
