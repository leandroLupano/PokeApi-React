import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavOption, navMenuOptions } from './nav.menu.options';

const Home = lazy(() => import('../home/home'));
// const Pokemon = lazy(() => import('../pokemon/pokemon'));
// const Favourites = lazy(() => import('../favourites/favourites'));
// const Details = lazy(() => import('../details/details'));

export function AppRouter() {
  const navMenuOptionsArray: NavOption[] = navMenuOptions;

  return (
    <Suspense>
      <Routes>
        <Route
          path={navMenuOptionsArray[0].path}
          element={<Home></Home>}
        ></Route>
        {/* <Route
          path={navMenuOptionsArray[1].path}
          element={<Pokemon></Pokemon>}
        ></Route>
        <Route
          path={navMenuOptionsArray[2].path}
          element={<Favourites></Favourites>}
        ></Route>
        <Route path={'/details'} element={<Details></Details>}></Route> */}
        <Route path={'*'} element={<Home></Home>}></Route>
      </Routes>
    </Suspense>
  );
}
