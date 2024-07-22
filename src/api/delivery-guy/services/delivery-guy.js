'use strict';

/**
 * delivery-guy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::delivery-guy.delivery-guy');
