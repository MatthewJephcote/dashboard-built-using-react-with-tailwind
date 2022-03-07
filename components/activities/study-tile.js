import { IconStudy } from '../images/with-different-tailwind-styling/icon-study';
import { ActivityPanel } from '../activity-panel';

export const StudyTile = () => {
  return (
    <div className="flex flex-col lg:w-60 lg:h-56 overflow-hidden">
      <div className="activity-tab study-tab flex md:items-center lg:items-end justify-end h-14 pr-4 rounded-xl">
        <IconStudy />
      </div>
      <ActivityPanel
        activityCategory={"Study"}
        thisWeekHours={"4"}
        lastWeekHours={"7"} />
    </div>
  );
}
