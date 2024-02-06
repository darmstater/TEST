const axios = require('axios');
const controller = {};

controller.getAll = async function (req, res) {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');

    res.status(200).json({
      message: 'API Eksternal',
      data: response.data
    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
}

module.exports = controller;
