'use strict'
const Department = use('App/Models/Department')

class DepartmentController {

    async index ({ request, response, view }) {      
        let department = await Department.all()
        return response.json(department)
    }

    async show ({ params, request, response, view }) {
        let department = await Department.find(params.id)
        return response.json(department)
    }

}

module.exports = DepartmentController
