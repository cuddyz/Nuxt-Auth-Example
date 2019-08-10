export default function({ store, route, redirect }) {
  const user = store.state.users.user
  const adminRoute = /\/admin\/*/g

  if (!user && route.path !== '/') {
    redirect('/')
  } else if (user && !user.isAdmin && route.path.match(adminRoute)) {
    redirect('/profile')
  }
}
