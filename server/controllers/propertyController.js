const Property = require('../models/Property');

const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

const addProperty = async (req, res) => {
  const { name, location, price, description } = req.body;

  try {
    const newProperty = new Property({ name, location, price, description });
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { getProperties, addProperty };

