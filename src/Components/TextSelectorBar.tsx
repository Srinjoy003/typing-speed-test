type SelectorProp = {puncChangeFunc: any, numChangeFunc: any, capsChangeFunc: any}
function TextSelectorBar({puncChangeFunc, numChangeFunc, capsChangeFunc}: SelectorProp) {

 
  return (
    <div className='flex flex-row gap-4'>
      <button className='outline-none' onClick={puncChangeFunc}>punctuation</button>
      <button className='outline-none' onClick={numChangeFunc}>numbers</button>
      <button className='outline-none' onClick={capsChangeFunc}>caps</button>

    </div>
  )
}

export default TextSelectorBar