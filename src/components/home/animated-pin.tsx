// 'use client';
// import React from 'react';
// import { PinContainer } from '../ui/3d-pin';

// export function AnimatedPinDemo({
//   title,
//   href,
//   heading,
//   about,
// }: {
//   title: string;
//   href: string;
//   heading: string;
//   about: string;
// }) {
//   return (
//     <div className="max-w-full bg-red-100 overflow-hidden">
//       <PinContainer title={title} href={href}>
//         <div className="flex flex-col p-5 tracking-tight w-full h-[20rem] bg-black/80 text-white rounded-xl backdrop-blur-lg hover:scale-105 transition-transform">
//           <h3 className="font-semibold text-lg mb-2">{heading}</h3>

//           <p className="text-sm text-gray-300 line-clamp-3">{about}</p>

//           <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
//         </div>
//       </PinContainer>
//     </div>
//   );
// }

'use client';
import React from 'react';
import { PinContainer } from '../ui/3d-pin';

export function AnimatedPinDemo({
  title,
  href,
  heading,
  about,
}: {
  title: string;
  href: string;
  heading: string;
  about: string;
}) {
  return (
    <div className="h-[25rem] w-full flex items-center justify-center ">
      <PinContainer title={title} href={href}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {heading}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 line-clamp-2">{about}</span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
