import Link from 'next/link';
import React from 'react';

export default function NavLinks() {
  const links = [
    {
      name: 'men',
      submenu: true,
      sublinks: [
        {
          Head: "Topwear",
          sublink: [
            { name: 'T-shirt', link: '/' },
            { name: 'Shirt', link: '/' },
            { name: 'Jeans', link: '/' },
            { name: 'Jackets', link: '/' },
            { name: 'Accessories', link: '/' },
          ],
        },
        {
          Head: "Bottom Ware",
          sublink: [
            { name: 'T-shirt', link: '/' },
            { name: 'Shirt', link: '/' },
            { name: 'Jeans', link: '/' },
            { name: 'Jackets', link: '/' },
            { name: 'Accessories', link: '/' },
          ],
        },
        {
          Head: "Topwear",
          sublink: [
            { name: 'T-shirt', link: '/' },
            { name: 'Shirt', link: '/' },
            { name: 'Jeans', link: '/' },
            { name: 'Jackets', link: '/' },
            { name: 'Accessories', link: '/' },
          ],
        },
        {
          Head: "Topwear",
          sublink: [
            { name: 'T-shirt', link: '/' },
            { name: 'Shirt', link: '/' },
            { name: 'Jeans', link: '/' },
            { name: 'Jackets', link: '/' },
            { name: 'Accessories', link: '/' },
          ],
        },
      ],
    },
    { name: 'women' },
    { name: 'kid' },
    { name: 'men' },
  ];

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className='px-3 text-left md:cursor-pointer '>
            <h1 className='py-7'>{link.name}</h1>
            {link.submenu && (
              <div>
                <div className='absolute top-20 '>
                  <div className='py-1.5'>
                    <div className='w-4 h-4 bg-white absolute  rotate-45'></div>
                  </div>
                  <div className=' bg-white ml-[-1rem] p-4 grid grid-cols-3 gap-6' >
                    {link.sublinks.map((item, id) => (
                      <div className='p-3.5' key={id}>
                        <h1 className='text-lg font-semibold '>{item.Head}</h1>
                        {item.sublink.map((slink, sid) => (
                          <li
                            className='text-sm text-gray-600 my-2.5 '
                            key={sid}
                          >
                            <Link
                              href={slink.link}
                              className='hover:text-[#4A3AFF] hover:border-b-2'
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
