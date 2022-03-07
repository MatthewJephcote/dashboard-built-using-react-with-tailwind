import { IconWork } from '../images/with-same-tailwind-styling/icon-work';
import { ActivityPanel } from '../activity-panel';

export const WorkTile = () => {
  return (
    <div className="flex flex-col lg:w-60 lg:h-56 overflow-hidden">
      <div className="activity-tab work-tab flex sm:items-center justify-end h-14 pr-4 sm:pb-1 rounded-xl">
        <IconWork />
      </div>
      <ActivityPanel
        activityCategory={"Work"}
        thisWeekHours={"32"}
        lastWeekHours={"36"} />
    </div>
  );
}
