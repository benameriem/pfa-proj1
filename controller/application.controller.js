const Application = require("../models/application");

exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.findAll();

    return res.status(200).json({
      success: true,
      data: applications,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve applications",
      error: error.message,
    });
  }
};

exports.addApplication = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    const application = await Application.create({
      name: req.body.name,
      theme: req.body.theme,
      performance: req.body.performance,
      department: req.body.department,
    });

    return res.status(201).json({
      success: true,
      data: application,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create application",
      error: error.message,
    });
  }
};

exports.updateApplication = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the application
    const application = await Application.findByPk(id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    // Update the application
    await application.update({
      ...req.body,
    });

    return res.status(200).json({
      success: true,
      data: application,
    });
  } catch (error) {
    console.error("Error updating application:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update application",
      error: error.message,
    });
  }
};

exports.deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the application
    const application = await Application.findByPk(id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    // Delete the application
    await application.destroy();

    return res.status(200).json({
      success: true,
      message: "Application deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete application",
      error: error.message,
    });
  }
};
