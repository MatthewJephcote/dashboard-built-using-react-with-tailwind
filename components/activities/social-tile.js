import { IconSocial } from '../images/with-different-tailwind-styling/icon-social';
import { ActivityPanel } from '../activity-panel';

export const SocialTile = () => {
  return (
    <div className="flex flex-col lg:w-60 lg:h-56 overflow-hidden">
      <div className="activity-tab social-tab flex justify-end md:items-center h-14 pr-3 sm:pt-2.5 rounded-xl">
        <IconSocial />
      </div>
      <ActivityPanel
        activityCategory={"Social"}
        thisWeekHours={"5"}
        lastWeekHours={"10"} />
    </div>
  );
}
