// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

// Categories have many Products
Category.belongsTo(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});
// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {
  through: { ProductTag, as: "product_tag", foreignKey: "tag_id" },
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsTo(Product, {
  through: { ProductTag, as: "product_tag", foreignKey: "tag_id" },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
