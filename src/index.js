import {createStore} from 'redux'
import { rootReducer } from './redux/rootReducer'
import { decrement, increment } from './redux/actions'
import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const store = createStore(rootReducer, 0)




addBtn.addEventListener('click', ()=>{  
 store.dispatch(increment())
})
subBtn.addEventListener('click', ()=>{  
  store.dispatch(decrement())

})
store.subscribe( () => {
  const state = store.getState()
  counter.textContent = state
})
store.dispatch({type: 'INIT_APPLICATION'})






