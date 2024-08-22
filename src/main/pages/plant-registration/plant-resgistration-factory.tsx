import { RemoteSaveProduct } from '../../../data/usecases/save-product/remote-save-product'
import { ProductModel } from '../../../domain/usecases/models/product-model'
import { ProductParams } from '../../../domain/usecases/saveProduct'
import { AxiosHttpPostClient } from '../../../infra/http/axios-http-client/axios-http-post-client'
import PlantRegistration from '../../../pages/PlantRegistration'
import { ValidationBuilder, ValidationComposite } from '../../../validation'

export const makePageRegistration: React.FC = () => {
  const url = 'http://localhost:3000/plants'
  const axiosHttpPostClient = new AxiosHttpPostClient<
    ProductParams,
    ProductModel
  >()
  const remoteSaveProduct = new RemoteSaveProduct(url, axiosHttpPostClient)
  const validationComposite = ValidationComposite.build([
    ...ValidationBuilder.field('name').required().minLength(5).build(),
    ...ValidationBuilder.field('subtitle').required().minLength(5).build(),
    ...ValidationBuilder.field('type').required().minLength(4).build(),
    ...ValidationBuilder.field('price').required().minLength(2).build(),
    ...ValidationBuilder.field('features').required().minLength(10).build(),
    ...ValidationBuilder.field('description').required().minLength(10).build(),
  ])
  return (
    <PlantRegistration
      saveProduct={remoteSaveProduct}
      validation={validationComposite}
    />
  )
}
