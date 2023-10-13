import { Link } from "react-router-dom";

interface ITags {
  link: string;
  tag: string;
}

interface IProps {
  title: string;
  tags: ITags[];
}
const Infos = ({ title, tags }: IProps) => {
  return (
    <div className="flex gap-5 flex-col">
      <h3 className="font-semi">{title}</h3>
      <div className="flex flex-col gap-1">
        {tags.map((tag, index) => (
          <Link
            to={tag.link}
            className="text-gray-400 hover:text-white text-sm hover:font-semi hover:shadow-lg"
            key={index}
          >
            {tag.tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Infos;
