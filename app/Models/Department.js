'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Department extends Model {
    static get table () {
        return 'lib_erp_department'
      }

      static get primaryKey () {
        return 'department_id'
      }

      static get columns() {
        return ['department_id', 'department_code', 'department_name', 'department_id_head', 'department_local_no', 'department_fax_no']
      }

      static get createdAtColumn () {
        return null
      }

      static get updatedAtColumn () {
        return null
      }
}

module.exports = Department
