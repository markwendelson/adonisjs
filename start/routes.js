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

Route.on('/').render('welcome')
Route.on('/hello').render('hello')
Route.get('/inventory', 'ItemMasterlistController.index')
Route.get('/inventory/:id', 'ItemMasterlistController.show')

Route.get('/department', 'DepartmentController.index')
Route.get('/department/:id', 'DepartmentController.show')
Route.delete('/department/:id', 'DepartmentController.destroy')
Route.post('/department', 'DepartmentController.store')
Route.put('/department/:id', 'DepartmentController.update')

Route.get('/project', 'ProjectUnitController.index')
