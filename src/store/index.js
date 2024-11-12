import { createStore, createLogger } from 'vuex'
import auth from './modules/authentication'
import user from './modules/user'
import attendant from './modules/attendant'
import organization from './modules/organization'
import task from './modules/task'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state: {
    apiServer: 'http://127.0.0.1:8000/api/attendant' ,
    // apiServer: 'https://edoc.onetechcambodia.com/api/attendant' ,
    system: {
      name: 'ប្រព័ន្ធគ្រប់គ្រង វត្តមាន' ,
      organization: {
        name: 'ទីស្ដីការគណៈរដ្ឋមន្ត្រី'
      },
      company: {
        name: 'ក្រុមហ៊ុន'
      },
    }
    // branch: '' 
  },
  modules: {
    auth ,
    user ,
    attendant ,
    organization ,
    task
  },
  strict: debug,
  plugins: debug ? 
    [
      createLogger()
    ] : 
    [
      
    ]
})