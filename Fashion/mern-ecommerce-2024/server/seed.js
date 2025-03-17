// const mongoose = require("mongoose");
// const User = require("./models/User");
// const Address = require("./models/Address")
// const Cart = require("./models/Cart");
// const Feature = require("./models/Feature");
// const Order = require("./models/Order");
// const Product = require("./models/Product");
// const ProductReview = require("./models/Review");

// mongoose
//     .connect("mongodb://localhost:27017/db_fashion", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => console.log("MongoDB connected"))
//     .catch((err) => console.error(err));

// const seedDatabase = async () => {
//     try {
//         // Thêm dữ liệu mẫu cho mỗi collection
//         await User.create({
//             userName: "testuser",
//             email: "test@example.com",
//             password: "123456",
//         });

//         await Product.create({
//             image: "product.jpg",
//             title: "Sample Product",
//             description: "This is a sample product.",
//             category: "Sample Category",
//             brand: "Sample Brand",
//             price: 100,
//             salePrice: 90,
//             totalStock: 50,
//             averageReview: 4.5,
//         });

//         await Address.create({
//             userId: "someUserId",
//             address: "123 Street",
//             city: "CityName",
//             pincode: "123456",
//             phone: "1234567890",
//             notes: "Deliver to front door.",
//         });

//         await Cart.create({
//             userId: "someUserId",
//             items: [
//                 {
//                     productId: "someProductId",
//                     quantity: 2,
//                 },
//             ],
//         });

//         await Feature.create({
//             image: "feature.jpg",
//         });

//         await Order.create({
//             userId: "someUserId",
//             cartId: "someCartId",
//             cartItems: [
//                 {
//                     productId: "someProductId",
//                     title: "Sample Product",
//                     image: "product.jpg",
//                     price: "100",
//                     quantity: 1,
//                 },
//             ],
//             addressInfo: {
//                 addressId: "someAddressId",
//                 address: "123 Street",
//                 city: "CityName",
//                 pincode: "123456",
//                 phone: "1234567890",
//                 notes: "Deliver to front door.",
//             },
//             orderStatus: "Pending",
//             paymentMethod: "Credit Card",
//             paymentStatus: "Paid",
//             totalAmount: 200,
//             orderDate: new Date(),
//         });

//         await Review.create({
//             productId: "someProductId",
//             userId: "someUserId",
//             userName: "testuser",
//             reviewMessage: "Great product!",
//             reviewValue: 5,
//         });

//         console.log("Database seeded!");
//         mongoose.connection.close();
//     } catch (err) {
//         console.error(err);
//         mongoose.connection.close();
//     }
// };

// seedDatabase();
