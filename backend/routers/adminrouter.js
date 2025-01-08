import express from "express"
const route = express.Router()

import { getMainAdmin, updateMainAdmin, checkMainAdmin, adminLogin, createSubAdmin, deleteSubAdmin, getAllAdmins } from "../controllers/adminController.js"

route.put("/getMainAdminData/:id", middle, getMainAdmin)
route.put("/updateMainAdmin/:_id", updateMainAdmin)
route.post("/checkMainAdmin/:id", checkMainAdmin)
route.post("/createSubAdmin/:id", createSubAdmin)
route.delete("/deleteSubAdmin/:id", deleteSubAdmin)
route.post("/adminLogin", adminLogin)
route.post("/getAllAdmins/:id", getAllAdmins)
route.put("/create-subadmin", updateMainAdmin)



export default route;


<iframe width="560" height="315" src="https://www.youtube.com/embed/DjYZk8nrXVY?si=ZzRAT29usTWLC0Qo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>