import { UserIcon } from "@heroicons/react/outline";

export default function TeamMember({ name, role, bio, image, imageAlt }) {
   return (
      <div className="relative flex flex-col space-y-8 md:space-y-0 md:space-x-6 md:flex-row my-8 md:my-12 not-prose">

         {/* Image */}
         <div>
            <div className="md:sticky md:top-0 md:-mt-4 md:pt-4">
               {
                  image ? (
                     <img src={image} alt={imageAlt} className="w-full h-96 object-cover m-0 md:w-48 md:h-48" />
                  ) : (
                     <div className="w-full h-96 bg-gray-50 flex justify-center items-center md:w-48 md:h-48">
                        <UserIcon className="w-16 h-16 text-gray-100" />
                     </div>
                  )
               }
            </div>
         </div>

         {/* Content */}
         <div className="flex-1">
            {name && <h3 className="text-xl font-bold">{name}</h3>}
            {role && <p className="text-lg font-medium text-gray-500 mt-1">{role}</p>}
            {bio && <div className="text-gray-500 mt-4" dangerouslySetInnerHTML={{ __html: bio }}></div>}
         </div>

      </div>
   )
}