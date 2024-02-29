const OrganizationModel = require('./../models/organizationModel');
  
  // GET: Get all organizations
  async function getOrganization (req, res) {
    // res.json("prakash");
    try {
      const organizations = await OrganizationModel.find();
      res.json(organizations);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
    // GET: Get organization by id
    async function getOrganizationById (req, res) {
      try {
        const organizations = await OrganizationModel.findById(req.params.id);
        res.json(organizations);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    };

  // POST: Create a new organization
async function createOrganization(req, res) {
  try {
      const organization = await OrganizationModel.create(req.body);
      res.status(201).json(organization);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

// PUT: Update organization by ID
async function updateOrganization(req, res) {
  try {
      const organization = await OrganizationModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!organization) {
          return res.status(404).json({ message: 'Organization not found' });
      }
      res.json(organization);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

// DELETE: Delete organization by ID
async function deleteOrganization(req, res) {
  try {
      const organization = await OrganizationModel.findByIdAndDelete(req.params.id);
      if (!organization) {
          return res.status(404).json({ message: 'Organization not found' });
      }
      res.json({ message: 'Organization deleted' });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getOrganization,
  createOrganization,
  getOrganizationById,
  updateOrganization,
  deleteOrganization
};
  
