const User = require('./User');
const Comment = require('./Comment');
const Blog = require('./Blog');

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Blog.hasMany(Comment), {
  foreignKey: 'blog_id',
  onDelete:'CASCADE'
}
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete:'CASCADE'
})

module.exports = { User, Blog , Comment};
