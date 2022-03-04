import { IconPlay } from '../images/with-same-tailwind-styling/icon-play';
import { ActivityPanel } from '../activity-panel';

export const PlayTile = () => {
  return (
    <div className="flex flex-col lg:w-60 lg:h-56 overflow-hidden">
      <div className="activity-tab play-tab flex sm:items-center justify-end h-14 pr-4 sm:pt-2 rounded-xl">
        <IconPlay />
      </div>
      <ActivityPanel
        activityCategory = {"Play"}
        thisWeekHours = {"10"}
        lastWeekHours = {"8"} />
    </div>
  );
}
