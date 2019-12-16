const Post = require('../models/post.model')

module.exports.create = async (req, res) => {
  // console.log('image', req.file)
  try {
    const post = new Post({
      title: req.body.title,
      preview: req.body.preview,
      detail: req.body.detail,
      imageUrl: `/${req.file.filename}`
    })
    await post.save()
    res.status(201).json(post)
  } catch (e) {
    res.status(500).json(e)
  }
}
module.exports.getAll = async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 })
    res.json(posts)
  } catch (e) {
    res.status(500).json(e)
  }
}
module.exports.getById = async (req, res) => {
  try {
    await Post.findById(req.params.id).populate('comments').exec((error, post) => {
      res.json(post)
    })
  } catch (e) {
    res.status(500).json(e)
  }
}
module.exports.update = async (req, res) => {
  const $set = {
    preview: req.body.preview,
    detail: req.body.detail
  }
  try {
    const post = await Post.findOneAndUpdate({ _id: req.params.id }, { $set }, { new: true })
    res.json(post)
  } catch (e) {
    res.status(500).json(e)
  }
}
module.exports.remove = async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id })
    res.json({ message: 'Article deleted' })
  } catch (e) {
    res.status(500).json(e)
  }
}
module.exports.addView = async (req, res) => {
  const $set = { views: ++req.body.views }
  try {
    await Post.findOneAndUpdate({ _id: req.params.id }, { $set })
    res.status(201).json()
  } catch (e) {
    res.status(500).json(e)
  }
}
