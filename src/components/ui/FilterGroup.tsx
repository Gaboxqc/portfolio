import TextCardTransparent from '../cards/TextCardTransparent'
import type { FilterOption } from '../../types'

interface FilterGroupProps {
  label: string
  items?: FilterOption[]
  selected?: number[]
  onToggle: (id: number) => void
}

function FilterGroup({ label, items = [], selected = [], onToggle }: FilterGroupProps) {
  if (!items.length) return null

  return (
    <div>
      <p className='mb-2 text-muted-foreground'>{label}</p>
      <div className='flex flex-wrap gap-2'>
        {items.map((item) => (
          <button key={item.id} type='button' onClick={() => onToggle(item.id)}>
            <TextCardTransparent text={item.name} isActive={selected.includes(item.id)} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterGroup
