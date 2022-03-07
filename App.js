import './App.css';
import { ImageJeremy } from './components/images/image-jeremy';
import { MenuLink } from './components/menu-link';
import { WorkTile } from './components/activities/work-tile';
import { PlayTile } from './components/activities/play-tile';
import { StudyTile } from './components/activities/study-tile';
import { ExerciseTile } from './components/activities/exercise-tile';
import { SocialTile } from './components/activities/social-tile';
import { SelfCareTile } from './components/activities/self-care-tile';
import { IconEllipsis } from './components/images/icon-ellipsis';

function App() {
  return (
    <div className="flex min-h-screen">
      <div className="main-container flex sm:flex-col lg:flex-row text-white sm:gap-2 lg:gap-7 m-auto">
        <div className="name-frequency flex flex-col lg:w-60">
          <div className="name-panel flex sm:flex-row lg:flex-col p-7 rounded-xl z-10 sm:gap-4 lg:w-60">
            <div className="jeremy-photo">
              <ImageJeremy />
            </div>
            <div className="sm:flex sm:flex-col">
              <p className="text-sm lg:pt-4">Report for</p>
              <h1 className="text-5xl font-light lg:w-1/2">Jeremy Robson</h1>
            </div>
          </div>
          <div className="frequency-menu flex sm:py-8 lg:p-7 rounded-xl text-base z-0">
            <nav className="font-semibold pt-3">
              <ul>
                <MenuLink url={"#"} frequency={"Daily"} />
                <MenuLink url={"#"} frequency={"Weekly"} />
                <MenuLink url={"#"} frequency={"Monthly"} />
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex sm:flex-col lg:flex-row lg:flex-wrap sm:gap-2 lg:gap-7">
          <WorkTile />
          <PlayTile />
          <StudyTile />
          <ExerciseTile />
          <SocialTile />
          <SelfCareTile />
        </div>
      </div>
    </div>
  );
}

export default App;
