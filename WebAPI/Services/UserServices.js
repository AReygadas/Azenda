const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { models } = require('./../Libs/sequelize');

class UserService {
  constructor() {}

  async signin(data)
  {
    
    if (!data.email || !data.password) {
      return 'Email and password are required' ;
    }
        // Find the user
        const email = data.email;
        const user = await models.User.findOne({ where: { email } });
        if (user) {
          console.log(user.password); // Only if user exists
        } else {
          console.error("User with email", email, "not found");
          return null;
        }
        const isPasswordValid = await bcrypt.compare(data.password, user?.password);
        if (!isPasswordValid) {
          return null;
        }
          const token = jwt.sign({ userId: user.id, username: user.email }, 'your_jwt_secret', { expiresIn: '1h' });      
          return token;  
  }


  async create(data) {
    console.log(data)

    const saltRounds = 10;
    data.password = await bcrypt.hash(data.password, saltRounds);
    console.log(data)
    const newUser = await models.User.create(data);
    return newUser;
  }
  
  async find() {
    const rta = await models.User.findAll();
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;