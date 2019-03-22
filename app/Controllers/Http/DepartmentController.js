'use strict'
const Department = use('App/Models/Department')

class DepartmentController {

    async index ({ request, response, view }) {      
        let department = await Department.all()
        return response.json(department)
    }

    async show ({ params, request, response, view }) {
        let department = await Department.find(params.id)
        if (!department) {
            return response.status(404).json(null)
          }
        return response.json(department)
    }

    async destroy ({ params, request, response }) {
        let department = await Department.find(params.id)
        if (!department) {
            return response.status(404).json(null)
          }
          await department.delete()
          return response.status(204).json(null)
    }

    async store ({ request, response }) {
        const departmentInfo = request.only(['department_code', 'department_name'])

        const department = new Department()
        department.department_code = departmentInfo.department_code
        department.department_name = departmentInfo.department_name
       
        await department.save()

        return response.status(201).json(department)
    }

    async update ({ params, request, response }) {
        const departmentInfo = request.only(['department_code', 'department_name'])

        const department = await Department.find(params.id)
        department.department_code = departmentInfo.department_code
        department.department_name = departmentInfo.department_name
       
        await department.save()

        return response.status(200).json(department)
    }

}

module.exports = DepartmentController
