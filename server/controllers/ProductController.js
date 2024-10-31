import Product from "../models/ProductModel.js";
import path from "path";
import fs from "fs";

export const getProducts = async (req, res) => {
  try {
    const response = await Product.findAll();
    res.json(response);
  } catch (error) {
    ``;
    console.log(error.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await Product.findOne({
      where: {
        product_id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveProduct = (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0)
    return res.status(400).json({ msg: "No File Uploaded" });
  const { name, description, price, stock, aroma } = req.body;

  if (!name || !description || !price || !stock || !aroma) {
    return res.status(400).json({ msg: "Please Fill All Fields" });
  }

  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Product.create({
        name: name,
        description: description,
        price: price,
        stock: stock,
        aroma: aroma,
        image: fileName,
        image_url: url,
      });
      res.status(201).json({ msg: "Product Created Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateProduct = async (req, res) => {
  const product = await Product.findOne({
    where: {
      product_id: req.params.id,
    },
  });

  if (!product) return res.status(404).json({ msg: "No Data Found" });

  let fileName = product.image_url; // Gunakan nama file lama sebagai default jika tidak ada upload baru
  // let filepath = `./public/images/${product.image_url}`;
  const filepath = `./public/images/${fileName.match(/[^/]+$/)[0]}`;

  let url = "";
  if (req.files !== null) {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });

    // Hanya unlink jika file lama ada dan bukan undefined
    console.log("Product", product);
    console.log("tes", fs.existsSync(file));
    console.log("file L;", filepath);

    if (product.image_url && fs.existsSync(filepath)) {
      console.log("Hapus : ", file);

      fs.unlinkSync(filepath); // Hapus file lama
    }

    // Simpan file baru
    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
    url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  } else {
    url = fileName;
  }

  const { name, description, price, stock, aroma } = req.body;

  if (!name || !description || !price || !stock || !aroma) {
    return res.status(400).json({ msg: "Please Fill All Fields" });
  }

  try {
    await Product.update(
      {
        name: name,
        description: description,
        price: price,
        stock: stock,
        aroma: aroma,
        image: url,
        image_url: url,
      },
      {
        where: {
          product_id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Product Updated Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findOne({
    where: {
      product_id: req.params.id,
    },
  });
  if (!product) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${product.image_url.match(/[^/]+$/)[0]}`;
    fs.unlinkSync(filepath);
    await Product.destroy({
      where: {
        product_id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Product Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
