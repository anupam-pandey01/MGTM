const Joi = require("joi");

const messageSchema = Joi.object({
  inquiryType: Joi.string()
    .valid("general", "service", "partnership")
    .insensitive()
    .default("general"),

  name: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .required()
    .messages({
      "string.empty": "Name is required",
      "string.min": "Name must be at least 2 characters",
      "string.max": "Name cannot exceed 100 characters",
      "any.required": "Name is required",
    }),

  organizationName: Joi.string()
    .trim()
    .max(150)
    .allow("")
    .optional()
    .messages({
      "string.max": "Organization name cannot exceed 150 characters",
    }),

  serviceName: Joi.string()
    .trim()
    .max(150)
    .allow("")
    .optional()
    .messages({
      "string.max": "Service name cannot exceed 150 characters",
    }),

  email: Joi.string()
    .trim()
    .email({
      tlds: {
        allow: false,
      },
    })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email address",
      "any.required": "Email is required",
    }),

  phone: Joi.string()
    .trim()
    .pattern(/^[6-9]\d{9}$/)
    .required()
    .messages({
      "string.empty": "Phone number is required",
      "string.pattern.base":
        "Please enter a valid 10-digit Indian phone number",
      "any.required": "Phone number is required",
    }),

  message: Joi.string()
    .trim()
    .min(10)
    .max(2000)
    .required()
    .messages({
      "string.empty": "Message is required",
      "string.min": "Message must be at least 10 characters",
      "string.max": "Message cannot exceed 2000 characters",
      "any.required": "Message is required",
    }),

  fax_number: Joi.string().allow("").optional(),
});

module.exports = { messageSchema }