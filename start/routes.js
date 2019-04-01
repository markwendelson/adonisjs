'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('hello')
Route.on('/chat').render('chat')
Route.get('/inventory', 'ItemMasterlistController.index')
Route.get('/inventory/:id', 'ItemMasterlistController.show')

Route.get('/api/department', 'DepartmentController.index')
Route.get('/api/department/:id', 'DepartmentController.show')
Route.delete('/api/department/:id', 'DepartmentController.destroy')
Route.post('/api/department/delete', 'DepartmentController.destroy-ids')
Route.post('/api/department', 'DepartmentController.store')
Route.put('/api/department/:id', 'DepartmentController.update')

Route.get('/api/project', 'ProjectUnitController.index')
