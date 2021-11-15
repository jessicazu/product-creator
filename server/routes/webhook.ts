import Koa from 'koa'
import Router from 'koa-router'

import validateShopifySignature from '../lib/middleware/validateShopifySignature'

const router = new Router({ prefix: '/webhook' })
router.use(validateShopifySignature())
router.all('/product-create', (ctx: Koa.Context) => {
  // console.log(ctx)
})

export default router
