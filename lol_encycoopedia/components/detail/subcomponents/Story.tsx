import { Champion } from "../type";

const Story = ({ blurb }: Pick<Champion, "blurb">) => {
  return (
    <div>
      <p>{blurb}</p>
    </div>
  );
};
export default Story;
