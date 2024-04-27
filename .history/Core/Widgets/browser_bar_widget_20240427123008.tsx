import { getIcon } from "../utils/utils";

export default function BrowserBarWidget(props) {
  const { link } = props;
  return (
    <div className="flex px-3 py-2 border gap-x-2 mb-1 items-center justify-between overflow-hidden">
      <div className="flex gap-x-2">
        <div className=" w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
        <div className=" w-2 h-2 md:w-3 md:h-3  rounded-full bg-orange-500"></div>
        <div className=" w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
      </div>
      {/* dummy browser search bar */}
      <div className="flex bg-gray-200 rounded-full px-1 py-0.5 items-center justify-start gap-x-2 max-w-md grow">
        {getIcon("lock", "rounded-full p-1 bg-white")}

        <input
          className="bg-gray-200 w-max focus:outline-none text-xs md:text-md grow"
          value={link}
          type="text"
          placeholder="Search or type URL"
        />
        {getIcon("star", "rounded-full p-1 bg-white")}
      </div>
      <div>{getIcon("settings")}</div>
    </div>
  );
}
