

const SortTodos = ({sortTodos}) => {
  return (
    <select className='absolute  left-10 text-black'>
        <option value="Sort" disabled defaultValue="sort"></option>
        <option>Text</option>
        <option>Number</option>
    </select>
  )
}

export default SortTodos