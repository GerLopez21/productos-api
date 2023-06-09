import express from 'express'
import morgan from 'morgan'
import pkg from '../package'
import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import {createRoles} from './libs/initialSetup'
import userRoutes from './routes/user.routes'
const app = express()
createRoles();
app.set('pkg',pkg)
app.use(express.json())
app.use(morgan('dev'))
app.get('/',(req,res)=>{
    res.json({
        app: app.get('pkg').name,
        description: app.get('pkg').description,
    })
})

app.use('/api/products',productsRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)

export default app;