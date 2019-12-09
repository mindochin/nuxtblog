export default function ({ $axios, redirect, store }) {
  $axios.interceptors.request.use(request => {
    if (store.getters['aurh/isAuth'] && !request.headers.common['Autorization']){
      const token = store.getters['auth/token']
    request.headers.common['Autorization'] = `Bearer ${token}`
    }

    return request
  })

  $axios.onError(error => {
    if (error.response) {
      if (error.response.status === 401) {
        redirect('/admin/login?message=session')
        store.dispatch('auth/logout')
      }

      if (error.response.status === 500) {
        console.log('Server 500 error')
      }
    }
  })
}
