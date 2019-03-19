'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ItemMasterlist extends Model {
    static get table () {
        return 'lib_erp_item'
      }

      static get primaryKey () {
        return 'item_id'
      }
}

module.exports = ItemMasterlist
