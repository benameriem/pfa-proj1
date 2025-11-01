const User = require("../models/user");

exports.signup = async (req, res, next) => {
  try {
    const { email, ...rest } = req.body;

    const oldUser = await User.findOne({ where: { email } });
    if (oldUser) {
      throw new Error("User with this email already exists");
    }

  

   const newUser = await User.create({
      email,
      
      ...rest,
    });


    const token = createJwt({ id: newUser.id });
    
    // delete password
    delete newUser.dataValues.password;

   
   

    return res.status(200).success({ user: user, token: newToken.token });
  } catch (error) {
    next(error);
  }
};