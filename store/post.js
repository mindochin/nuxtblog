const posts = [
  {
    title: 'Frozen Yogurt',
    date: new Date(),
    views: 22,
    comments: [1, 2],
    _id: 'id1'
  },
  {
    title: 'Ice cream sandwich',
    date: new Date(new Date() - 64000),
    views: 5,
    comments: [],
    _id: 'id2'
  }
]

export const actions = {
  async fetchAdmin ({ }) {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(posts)
      }, 1000)
    })
  },
  async remove ({ }, id) { },
  async update ({ }, data) { },
  async fetchAdminById ({ }, id) {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id))
      }, 1000)
    })
  }
}
