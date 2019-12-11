const {Strategy, ExtractJwt} = require('passport-jwt')
//const {model} = require('mongoose')
const keys = require('../keys')
//const User = model('users')
const User = require('../models/user.model')

const options = {
  //jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme ('JWT'),
  secretOrKey: keys.JWT
}

module.exports = new Strategy(options, async (payload, done) => {
  try {
    const candidate = await User.findById(payload.id).select('id')

    if(candidate) {

      done(null, candidate)
    }else{
      done(null, false)
    }
  }
  catch(e) {console.error(e)}
})
