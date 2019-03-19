'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProjectUnit extends Model {
    static get connection() {
        return this.useConnection !== "undefined" ? this.useConnection : config.get('database.connection')
    }
    
    static setUseConnection(access) {
    return access
    }

    static get table () {
        return 'project_unit'
      }

    static get primaryKey () {
    return 'project_unit_id'
    }
}

module.exports = ProjectUnit
