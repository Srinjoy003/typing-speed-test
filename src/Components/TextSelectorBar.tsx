import React, { ChangeEvent, EventHandler, RefObject } from 'react'

type SelectorProp = {puncChangeFunc: any}
function TextSelectorBar({puncChangeFunc}: SelectorProp) {

 
  return (
    <div className='flex flex-row gap-4'>
      <button className='' onClick={puncChangeFunc}>punctuation</button>
      <button className='' onClick={puncChangeFunc}>numbers</button>
      <button className='' onClick={puncChangeFunc}>caps</button>

    </div>
  )
}

export default TextSelectorBar