import { IconEllipsis } from './images/icon-ellipsis';

export const ActivityPanel = (props) => {
  return (
    <div className="activity-panel flex flex-col p-7 rounded-xl">
      <div className="flex justify-between">
        <h2 className="font-bold">{props.activityCategory}</h2>
        <IconEllipsis />
      </div>
      <div className="flex sm:items-center sm:justify-between lg:flex-col">
        <strong className="text-6xl sm:font-light font-normal py-3">{props.thisWeekHours}hrs</strong>
        <p className="text-sm">Last Week - {props.lastWeekHours}hrs</p>
      </div>
    </div>
  );
}
