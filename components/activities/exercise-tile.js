import { IconExercise } from '../images/with-different-tailwind-styling/icon-exercise';
import { ActivityPanel } from '../activity-panel';

export const ExerciseTile = () => {
  return (
    <div className="flex flex-col lg:w-60 lg:h-56 overflow-hidden">
      <div className="activity-tab exercise-tab flex justify-end items-end h-14 pr-4 rounded-xl">
        <IconExercise />
      </div>
      <ActivityPanel
        activityCategory={"Exercise"}
        thisWeekHours={"4"}
        lastWeekHours={"5"} />
    </div>
  );
}
