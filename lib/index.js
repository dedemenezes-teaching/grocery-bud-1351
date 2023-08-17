import { Application, Controller } from 'stimulus';
window.Stimulus = Application.start()

import addItemController from './controllers/add_item_controller.js'
window.Stimulus.register('add-item', addItemController)

import removeItemController from './controllers/remove_item_controller.js'
window.Stimulus.register('remove-item', removeItemController)
