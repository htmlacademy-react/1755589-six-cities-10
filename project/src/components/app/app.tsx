import MainPage from '../../pages/mainPage/mainPage';
import { AppRoutes, Statuses } from '../const';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Favorites from '../../pages/favorites/favorites';
import LoginPage from '../../pages/loginPage/loginPage';
import Property from '../../pages/property/property';
import NotFound404 from '../../pages/notFound404/notFound404';
import PrivateRoute from '../private-route/private-route';

type AppPlacesCount = {
  placesCount: number;
};

function App({placesCount}: AppPlacesCount) {
  return (
    //<MainPage placesCount = {placesCount}/>
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Main} element={<MainPage placesCount = {placesCount}/>}
        />
        <Route
          path={AppRoutes.Login} element={<LoginPage/>}
        />
        <Route
          path={AppRoutes.Favorites}
          element={
            <PrivateRoute
              authStatus={Statuses.NoAuth}
            >
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Room} element={<Property/>}
        />
        <Route
          path='*' element={<NotFound404/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
