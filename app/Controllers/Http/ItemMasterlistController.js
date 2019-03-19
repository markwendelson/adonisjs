'use strict'

const ItemMaster = use('App/Models/ItemMasterlist')

class ItemMasterlistController {
/**
   * Show a list of all item_masterlist.
   * GET item_masterlist
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {      
    let item_masterlist = await ItemMaster.query().fetch()
    return response.json(item_masterlist)
}
/**
 * Render a form to be used for creating a new item_masterlist.
 * GET item_masterlist/create
 *
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 * @param {View} ctx.view
 */
async create ({ request, response, view }) {
}
/**
 * Create/save a new item_masterlist.
 * POST item_masterlist
 *
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 */
async store ({ request, response }) {
}
/**
 * Display a single item_masterlist.
 * GET item_masterlist/:id
 *
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 * @param {View} ctx.view
 */
async show ({ params, request, response, view }) {
    let item_masterlist = await ItemMaster.find(params.id)
    return response.json(item_masterlist)
}
/**
 * Render a form to update an existing item_masterlist.
 * GET item_masterlist/:id/edit
 *
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 * @param {View} ctx.view
 */
async edit ({ params, request, response, view }) {
}
/**
 * Update item_masterlist details.
 * PUT or PATCH item_masterlist/:id
 *
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 */
async update ({ params, request, response }) {
}
/**
 * Delete a item_masterlist with id.
 * DELETE item_masterlist/:id
 *
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 */
async destroy ({ params, request, response }) {
}

}

module.exports = ItemMasterlistController
