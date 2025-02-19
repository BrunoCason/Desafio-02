import { ProductParams } from '../usecases/saveProduct'
import { ProductModel } from '../usecases/models/product-model'

export const mockProduct = (): ProductParams => ({
  id: 1111,
  name: 'Echinocereus Cactus',
  subtitle: 'A Majestic Addition to Your Plant Collection',
  label: ['indoor', 'cactus'],
  price: '$139.99',
  quantity: 50,
  isInSale: true,
  discountPercentage: 20,
  features:
    'Species: Echinocereus spp. Mature Size: Varies by species, typically ranging from 4 to 12 inches (10-30 cm) in height. Blooming Season: Typically spring or summer, with flowers lasting several days to weeks. Pot Size: Available in various pot sizes to suit your preference and needs. Shipping: Our Echinocereus Cacti are carefully packaged and shipped with the utmost care to ensure they arrive in excellent condition.',
  description:
    "Ladyfinger cactus (Echinocereus pentalophus) is also known as Alice, Devil's Fingers, and Dog Tail. It needs bright sunlight, light fertilizer, and is prone to root rot. The root system is shallow and weak. Aphids and mealybugs are also a danger. Avoiding wet soil can help with success with a ladyfinger cactus.",
  imgUrl: 'src/assets/descriptionPlants/cactos-echinocereus-rigidissimo.png',
})

export const mockProductModel = (): ProductModel => ({
  id: 1111,
  name: 'Echinocereus Cactus',
  subtitle: 'A Majestic Addition to Your Plant Collection',
  label: ['indoor', 'cactus'],
  price: '$139.99',
  quantity: 50,
  isInSale: true,
  discountPercentage: 20,
  features:
    'Species: Echinocereus spp. Mature Size: Varies by species, typically ranging from 4 to 12 inches (10-30 cm) in height. Blooming Season: Typically spring or summer, with flowers lasting several days to weeks. Pot Size: Available in various pot sizes to suit your preference and needs. Shipping: Our Echinocereus Cacti are carefully packaged and shipped with the utmost care to ensure they arrive in excellent condition.',
  description:
    "Ladyfinger cactus (Echinocereus pentalophus) is also known as Alice, Devil's Fingers, and Dog Tail. It needs bright sunlight, light fertilizer, and is prone to root rot. The root system is shallow and weak. Aphids and mealybugs are also a danger. Avoiding wet soil can help with success with a ladyfinger cactus.",
  imgUrl: 'src/assets/descriptionPlants/cactos-echinocereus-rigidissimo.png',
})
