import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// ----------------------------------------------------------
//                  === USER MANAGAMENET ===
// ----------------------------------------------------------

// >>> GET ALL USER
export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "name", "email", "role"],
    });
    res.json(users);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getSpecificUser = async (req, res) => {
  try {
    const response = await Users.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!response) {
      return res.status(404).json({ msg: "No Data Found" });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateUser = async (req, res) => {
  const { name, email, password, confPassword } = req.body;
  if (password !== confPassword)
    return res.status(400).json("password are not match!");
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  // return res.status(200).json("wakwak2 !");
  try {
    const response = await Users.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!response) {
      return res.status(404).json({ msg: "No Data Found" });
    }
    // return res.status(200).json(response);
    await Users.update(
      {
        name: name,
        password: hashedPassword,
        email: email,
        role: "user",
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(200).json("update success !");
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  
  try {
    const response = await Users.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!response) {
      return res.status(404).json({ msg: "No Data Found" });
    }
    // res.status(200).json({ msg: "heroman" });
    await Users.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Siswa deleted successfuly" });
  } catch (error) {}
};
