// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne({
  foreignKey: 'Category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany({
  foreignKey: 'Product_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
ProductTag.belongsToMany({
  foreignKey: 'Product_id',
  foreignKey: 'Tag_id',
  onDelete: 'CASCADE',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany({
  foreignKey: 'ProductTag_id',
  onDelete: 'CASCADE',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
