import React, { useState } from 'react'

const QuantitySelector = () => {
     const [qty, setQty] = useState(1);

  return (
    <div>
       <div className="flex items-center gap-4 mt-6">
      <button
        onClick={() => qty > 1 && setQty(qty - 1)}
        className="w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700"
      >
        -
      </button>

      <span className="text-xl font-semibold">{qty}</span>

      <button
        onClick={() => setQty(qty + 1)}
        className="w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700"
      >
        +
      </button>
    </div>
    </div>
  )
}

export default QuantitySelector
