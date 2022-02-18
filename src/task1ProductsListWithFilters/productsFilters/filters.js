export default function filters() {
  return [priceFilter, countFilter, titleFilter]
}

const priceFilter = {
  id: 'price',
  title: 'Price',
  value: '',
  type: 'text',
  selected: true
}

const countFilter = {
  id: 'count',
  title: 'Count',
  value: '',
  type: 'text',
  selected: false
}

const titleFilter = {
  id: 'title',
  title: 'Title',
  value: '',
  type: 'text',
  selected: false
}