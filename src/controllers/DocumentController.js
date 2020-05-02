const Document = require('../models/Document');

const DocumentController = {
  store: async (req, res) => {
    const { originalname: name, size, location: url = "" } = req.file;
    try {
      const response = await Document.create({ document: name });
      res.status(200).json(response);
    } catch (error) {
      res.status(404).json({ error: 'Error registering the document' });
    }
  }
};

module.exports = DocumentController;