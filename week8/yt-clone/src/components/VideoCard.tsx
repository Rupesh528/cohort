export function VideoCard(props: any) {
  return (
    <div className="p-3">
      <img src={props.image} className="rounded-xl"></img>
      <div className="grid grid-cols-12 pt-2 pl-9">
        <div className="col-span-1">
          <img
            className={"rounded-full w-15 h-15"}
            src={props.thumbImage}
          ></img>
        </div>
        <div className="col-span-11 pl-5">
          <div>{props.title}</div>

          <div className="text-gray-400 text-base">{props.author}</div>
          <div className="text-gray-400 text-base">
            {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
