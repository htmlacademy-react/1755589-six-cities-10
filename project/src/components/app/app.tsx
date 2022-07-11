import MainPage from '../../pages/mainPage/mainPage';

type AppPlacesCount = {
  placesCount: number;
};

function App({placesCount}: AppPlacesCount) {
  return (
    <MainPage placesCount = {placesCount}/>
  );
}

export default App;
