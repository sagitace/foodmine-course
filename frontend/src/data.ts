import {Food} from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Food[] = [
{
  id:'1',
  name:'Cookies and Cream',
  price: 39,
  cookTime: '5-10',
  favorite: true,
  origins: ['Tabaco City'],
  stars: 5.0,
  imageUrl: 'assets/milktea-default.jpg',
  tags:['Classic Bobbatea', 'Milktea'],
},
{
  id:'2',
  name:'Dark Chocolate',
  price: 39,
  cookTime: '5-10',
  favorite: true,
  origins: ['Tabaco City'],
  stars: 4.5,
  imageUrl: 'assets/milktea-default.jpg',
  tags:['Classic Bobbatea', 'Milktea', 'Dark Chocolate'],
},
{
  id:'3',
  name:'Double Dutch',
  price: 39,
  cookTime: '5-10',
  favorite: false,
  origins: ['Tabaco City'],
  stars: 4.0,
  imageUrl: 'assets/milktea-default.jpg',
  tags:['Classic Bobbatea', 'Milktea', 'Double Dutch'],
},
{
  id:'4',
  name:'Red Velvet',
  price: 39,
  cookTime: '5-10',
  favorite: true,
  origins: ['Tabaco City'],
  stars: 4.3,
  imageUrl: 'assets/milktea-default.jpg',
  tags:['Classic Bobbatea', 'Milktea', 'Red Velvet'],
},
{
  id:'5',
  name:'Taro',
  price: 39,
  cookTime: '5-10',
  favorite: true,
  origins: ['Tabaco City'],
  stars: 5.0,
  imageUrl: 'assets/milktea-default.jpg',
  tags:['Classic Bobbatea', 'Milktea', 'Taro'],
},
{
  id:'6',
  name:'Winter Melon',
  price: 39,
  cookTime: '5-10',
  favorite: false,
  origins: ['Tabaco City'],
  stars: 4.5,
  imageUrl: 'assets/milktea-default.jpg',
  tags:['Classic Bobbatea', 'Milktea', 'Winter Melon'],
}
]
export const sample_tags:Tag[] = [
  { name: 'All', count: 6 },
  { name: 'Classic Bobbatea', count: 6 },
  { name: 'Meals', count: 0 },
  { name: 'Snacks', count: 0 }
]
