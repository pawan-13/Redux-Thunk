import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { fetchProduct } from './Redux/Feature/Product';

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state)=> state.product);
  console.log('state', state);

  if(state.isLoading){
    return <h1>Loading......</h1>
  }

return(
  <>  
     <div>
        <h2>Fetch the Data Using Redux Thunk</h2>
        <button onClick={()=>dispatch(fetchProduct())}>Fetch Data</button>
        {
          state.data && state.data.map((product, id) => (
            <div key={id}>
              <h3 style={{textAlign:'center',margin:'1rem'}}>{product.title}</h3>                           
            </div>
          ))
        }
     </div>
  </>
)
}

export default App;
