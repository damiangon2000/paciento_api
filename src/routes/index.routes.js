const { Router } = require("express")

const userRoutes = require("./user.routes")
const patientRoutes = require("./patient.routes")
const treatmentRoutes = require("./treatment.routes")

const rutas_init = () => {
  const router = Router()

  router.use("/users", userRoutes)
  router.use("/patients", patientRoutes)
  router.use("/treatments", treatmentRoutes)

  return router
};

module.exports = { rutas_init }
