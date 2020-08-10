export default function ({ store, redirect }) {
  if (store.state.authenticated) {
    store.commit('AUTHENTICATED')
    return redirect('/userLogin')
  }
}
