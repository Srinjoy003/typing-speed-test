type SelectorProp = {puncChangeFunc: any, numChangeFunc: any, capsChangeFunc: any}
function TextSelectorBar({puncChangeFunc, numChangeFunc, capsChangeFunc}: SelectorProp) {

 
  return (
    <div className='flex flex-row gap-4'>
      <button className='' onClick={puncChangeFunc}>punctuation</button>
      <button className='' onClick={numChangeFunc}>numbers</button>
      <button className='' onClick={capsChangeFunc}>caps</button>

    </div>
  )
}

export default TextSelectorBar