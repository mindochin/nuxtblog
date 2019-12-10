const posts = [
  {
    title: 'Frozen Yogurt',
    preview: 'blabla',
    detail: 'detail bla',
    date: new Date(),
    views: 22,
    comments: [1, 2],
    _id: 'id1'
  },
  {
    title: 'Ice cream sandwich',
    date: new Date(new Date() - 64000),
    preview: 'blabla',
    detail: 'detail bla',
    views: 5,
    comments: [],
    _id: 'id2'
  }
]
const emptyarticle = {
  _id: 'new',
  title: '',
  preview: '',
  detail: '',
  image: null,
}

export const actions = {
  async fetchAdmin ({ }) {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(posts)
      }, 1000)
    })
  },
  async remove ({ }, id) { },
  async update ({ }, data) {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 1000)
    })
  },
  async fetchAdminById ({ }, id) {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id))
      }, 1000)
    })
  },
  fetchEmptyArticle ({ }) {
    return emptyarticle
  },
  async create ({ commit }, data) {
    try {
      const fd = new FormData()
      fd.append('title', data.title)
      fd.append('preview', data.preview)
      fd.append('detail', data.detail)
      fd.append('image', data.image, data.image.name)

      return await this.$axios.$post('/api/post/admin', fd)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  }
}
