import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
id: String,
url: String,
detailUrl: String,
title: Object,
price: Object,
description: String,
discount: String,
tagling: String
})

const product= mongoose.model('product',productSchema);
export default product;