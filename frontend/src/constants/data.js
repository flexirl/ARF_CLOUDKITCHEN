import { CROISSANT_IMG_1, CROISSANT_IMG_2, REVIEW_FOOD_IMG, CART_THUMB_IMG, RATE_IMG_1, RATE_IMG_2 } from './images'

export const RECOMMENDED_ITEMS = [
  { id: 1, name: 'Butter Cream Croissant', price: '₹150', rating: '4.7', image: CROISSANT_IMG_1 },
  { id: 2, name: 'Butter Cream Croissant', price: '₹150', rating: '4.7', image: CROISSANT_IMG_1 },
  { id: 3, name: 'Butter Cream Croissant', price: '₹150', rating: '4.7', image: CROISSANT_IMG_2 },
]

export const PREVIOUSLY_ORDERED_ITEMS = [
  { id: 4, name: 'Butter Cream Croissant', price: '₹150', rating: '4.7', image: CROISSANT_IMG_1 },
  { id: 5, name: 'Butter Cream Croissant', price: '₹150', rating: '4.7', image: CROISSANT_IMG_1 },
  { id: 6, name: 'Butter Cream Croissant', price: '₹150', rating: '4.7', image: CROISSANT_IMG_2 },
]

export const MENU_ITEMS = [
  {
    id: 1,
    name: 'Butter Cream Croissant',
    description: 'Soft Croissant filled with sweet cream. Crispy outside, soft inside',
    price: '₹150',
    rating: '4.7',
    image: CROISSANT_IMG_1,
  },
  {
    id: 2,
    name: 'Butter Cream Croissant',
    description: 'Soft Croissant filled with sweet cream. Crispy outside, soft inside',
    price: '₹150',
    rating: '4.7',
    image: CROISSANT_IMG_1,
  },
  {
    id: 3,
    name: 'Butter Cream Croissant',
    description: 'Soft Croissant filled with sweet cream. Crispy outside, soft inside',
    price: '₹150',
    rating: '4.7',
    image: CROISSANT_IMG_1,
  },
  {
    id: 4,
    name: 'Butter Cream Croissant',
    description: 'Soft Croissant filled with sweet cream. Crispy outside, soft inside',
    price: '₹150',
    rating: '4.7',
    image: CROISSANT_IMG_1,
  },
]

export const CART_ITEMS = [
  { id: 1, name: 'Butter Cream Croissant', variant: 'Extra Spicy', price: '₹150', qty: 1, image: CART_THUMB_IMG },
  { id: 2, name: 'Butter Cream Croissant', variant: 'Extra Spicy', price: '₹150', qty: 1, image: CART_THUMB_IMG },
  { id: 3, name: 'Butter Cream Croissant', variant: 'Extra Spicy', price: '₹150', qty: 1, image: CART_THUMB_IMG },
]

export const RATE_ORDER_ITEMS = [
  { id: 1, image: RATE_IMG_1 },
  { id: 2, image: RATE_IMG_1 },
  { id: 3, image: RATE_IMG_2 },
]

export const REVIEW_ITEMS = [
  { id: 1, name: 'Butter Cream Croissant', image: REVIEW_FOOD_IMG, rating: 5, date: '23', month: 'JAN' },
  { id: 2, name: 'Butter Cream Croissant', image: REVIEW_FOOD_IMG, rating: 5, date: '23', month: 'JAN' },
  { id: 3, name: 'Butter Cream Croissant', image: REVIEW_FOOD_IMG, rating: 5, date: '23', month: 'JAN' },
  { id: 4, name: 'Butter Cream Croissant', image: REVIEW_FOOD_IMG, rating: 5, date: '23', month: 'JAN' },
  { id: 5, name: 'Butter Cream Croissant', image: REVIEW_FOOD_IMG, rating: 5, date: '23', month: 'JAN' },
  { id: 6, name: 'Butter Cream Croissant', image: REVIEW_FOOD_IMG, rating: 5, date: '23', month: 'JAN' },
]

export const PROFILE_USER = {
  name: 'John Doe',
  initial: 'J',
  orderCount: 26,
  phones: ['90XXX 5XXXX', '90XXX 5XXXX'],
}
