import { useContext } from 'react';
import StoreContext from '../store/StoreContext';

const useStore = () => useContext(StoreContext); // return [state, dispatch] in StoreContext

export default useStore;
