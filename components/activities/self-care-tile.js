import { IconSelfCare } from '../images/with-different-tailwind-styling/icon-self-care';
import { ActivityPanel } from '../activity-panel';

export const SelfCareTile = () => {
  return (
    <div className="flex flex-col lg:w-60 lg:h-56 overflow-hidden">
      <div className="activity-tab self-care-tab flex justify-end md:items-center lg:justify-end h-14 pr-3 rounded-xl">
        <IconSelfCare />
      </div>
      <ActivityPanel
        activityCategory={"Self Care"}
        thisWeekHours={"2"}
        lastWeekHours={"2"} />
    </div>
  );
}
