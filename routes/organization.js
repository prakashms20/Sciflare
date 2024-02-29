const express = require('express')
const OrganizationController = require('../controllers/organizationController');


const router = express.Router();
router.get('/', OrganizationController.getOrganization);
router.get('/:id', OrganizationController.getOrganizationById);
router.post('/', OrganizationController.createOrganization);
router.put('/:id', OrganizationController.updateOrganization);
router.delete('/:id', OrganizationController.deleteOrganization);
module.exports = router;