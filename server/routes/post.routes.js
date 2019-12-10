const passport = require('passport')
const { Router } = require('express')
const ctr = require('../controllers/post.controller')
const upload = require('../middleware/upload')
const router = Router()

// admin
router.post(
  '/admin',
  passport.authenticate('jwt', { session: false }),
  upload.single('image'),
  // function (req, res, next) {
  //   const filedata = req.file;
  //   if (!filedata)
  //     next(error({ statusCode: 500, message: "Error on upload file" }))//res.status(500).json({message: "Ошибка при загрузке файла"});
  // },
  ctr.create
)
router.get(
  '/admin',
  passport.authenticate('jwt', { session: false }),
  ctr.getAll
)
router.get(
  '/admin/:id',
  passport.authenticate('jwt', { session: false }),
  ctr.getById
)
router.put(
  '/admin/:id',
  passport.authenticate('jwt', { session: false }),
  ctr.update
)
router.delete(
  '/admin/:id',
  passport.authenticate('jwt', { session: false }),
  ctr.remove
)

// base
router.get('/', ctr.getAll)
router.get('/:id', ctr.getById)
router.put('/:id', ctr.addView)

module.exports = router
