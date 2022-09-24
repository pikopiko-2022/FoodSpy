import { combineReducers } from 'redux'

import list from './list'
import price from './price'
import basket from './basket'

export default combineReducers({
  list: list,
  price: price,
  basket: basket,
})
