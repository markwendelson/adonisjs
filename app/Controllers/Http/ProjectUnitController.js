'use strict'
const ProjectUnit = use('App/Models/ProjectUnit')

class ProjectUnitController {
    async index ({ request, response, view }) {    
        ProjectUnit.useConnection = "transactionRed"  
        let projectUnit = await ProjectUnit.query().fetch()
        return response.json(projectUnit)
    }
}

module.exports = ProjectUnitController
