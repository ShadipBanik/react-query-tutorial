// import logo from './logo.svg';
import './App.css';
import { Route, Link, Routes  } from 'react-router-dom';
import { HomePage } from './components/Home.page';
import { SuperHerosPage } from './components/SuperHeros.page';
import { RqSuperHerosPage } from './components/RqSuperHeros.page';
import { QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'
import { HeroDetails } from './components/heroDetails.page';
import { ParallalQueries } from './components/parallalQueries.page';
import { RQpaginated } from './components/RQpaginated.page';
import { RQinfinite } from './components/RQinfinite.page';

const queryClient= new QueryClient();
function App() {
  return (
  <QueryClientProvider client={queryClient}>

      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heros'>Super Heros</Link>
            </li>
            <li>
              <Link to='/rq-super-heros'>RQ Super Heros</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/rq-infinite' element={<RQinfinite/>} />
          <Route path='/rq-paginated-colors' element={<RQpaginated/>} />
          <Route path='/rq-parallal-heros' element={<ParallalQueries/>} />
          <Route path='/rq-super-heros/:heroId' element={<HeroDetails/>} />
          <Route path='/super-heros' element={<SuperHerosPage/>} />
          <Route path='/rq-super-heros' element={<RqSuperHerosPage/>} />
          <Route path='*' element={<h1>Not Found 404</h1>} />

        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
  </QueryClientProvider>
 );
}

export default App;
