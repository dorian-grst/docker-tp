/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const HealthChecksController = () => import('#controllers/health_checks_controller')

router.on('/').render('pages/home')
router.get('/health', [HealthChecksController])
// router.get('/health/liveness', [HealthChecksController])
// router.get('/health/readiness', [HealthChecksController])
// router.get('/health/startup', [HealthChecksController])
