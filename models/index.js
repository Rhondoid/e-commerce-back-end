// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToOne(Category,{
  foreignKey: 'Category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.belongsToMany(Product,{
  foreignKey: 'Product_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
ProductTag.belongsToOne(Product,{
  through: {
    model: ProductTag
  },
  // Alias defined for when data is retrieved
  as: 'product'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  through:{
    model: ProductTag
  
  },
  // Alias defined for when data is retrieved
  as: 'tag'
 
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
