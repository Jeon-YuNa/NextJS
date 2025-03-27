import { Champion } from "../type";

const Name = ({ id, name }: Pick<Champion, "id" | "name">) => {
  return (
    <div>
      <span>
        {name}/{id}
      </span>
    </div>
  );
};
export default Name;
