export default function Tags({ title, tags }) {
   return (
      <div className="">
         {title && <h3 className="text-xl font-bold">{title}</h3>}
         <div className="flex gap-2">
            {
               tags.map(tag => (
                  <div key={tag} className="px-3 py-1 bg-gray-100 text-gray-500 text-sm font-medium rounded">
                     {tag}
                  </div>
               ))
            }
         </div>
      </div>
   )
}