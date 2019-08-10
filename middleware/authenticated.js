export default function({ store, route, redirect }) {
  const user = store.state.users.user
  const adminRoute = /\/admin\/*/g

  if (!user && route.path !== '/') {
    redirect('/')
  } else if (user && !store.getters['users/isAdmin'] && route.path.match(adminRoute)) {
    redirect('/profile')
  } else if (user && route.path === '/') {
    redirect('/profile')
  }
}
