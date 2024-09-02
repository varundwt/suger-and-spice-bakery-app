export const CakesCat = () => {
  return (
    <div>
        <div className="glass flex justify-center items-center gap-2">
        <div>Image</div>
        <div>
          <div>Title</div>
          <div>
            <div className="flex items-center gap-1">
              <div>Star</div>
              <div>4.{Math.floor(10*(Math.random()))}</div>              
            </div>
            <div>{Math.floor(100*(10*(Math.random())))} Reviews</div>
          </div>
          <div><p>
            # Earliest Delivery
          </p></div>
        </div>
      </div>
    </div>
  )
}
