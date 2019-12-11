const Task = require("../db/UserTasks");
const User = require("../db/UserModel");

const tasksController = {
  /**
   * @params {object} req
   * @params {object} res
   * @return {object} task object
   */
  createTask(req, res) {
    user = req.params;
    id = user.id;

    const { description, state } = req.body;
    const task = new Task({
      description,
      state,
      user: id
    });
    task.save();

    const userById = User.findById(id);

    userById
      .then(user => {
        user.posts.push(post);
      })
      .then(results => {
        results.save();
      })
      .catch(err => {
        err;
      });
  },
  /**
   * @params {object} req
   * @params {object} res
   * @returns {object} user object
   */
  userByTasks(req, res) {
    const { id } = req.params;
    Task.findById(id)
      .populate("user")
      .then(user => {
        res.status(200).json({
          user
        });
      })
      .catch(err => {
        err;
      });
  }
};

module.exports = tasksController;
