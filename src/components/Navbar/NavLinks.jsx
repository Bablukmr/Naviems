"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { links } from "./NavLink";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { apiData } from "../api";

export default function NavLinks() {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [apival, setApiVal] = useState([]);
  const [sugarHeader, setSugarHeader] = useState([]);
  const [distilleryHeader, setDistilleryHeader] = useState([]);

  console.log(apival);
  console.log(sugarHeader);

  useEffect(async () => {
    let apival = await apiData();
    setApiVal(apival);
    const sugarHeaders = apival.filter((item) => item.header === "Suger");
    // .map(item => item.header);
    const distilleryHeaders = apival.filter(
      (item) => item.header === "Distillery"
    );
    // .map(item => item.header);
    setSugarHeader(sugarHeaders);
    setDistilleryHeader(distilleryHeaders);
  }, []);

  const links = [
    {
      name: "Sugar",
      submenu: true,
      sublinks: [
        {
          Head: "Compliance",
          sublink:
            // subHeading

            [
              { name: "Apr 21 to Sep 21", link: "/sugerCompliance" },
              { name: "Apr 22 to Sep 22", link: "/sugerCompliance" },
              { name: "Oct 22 to Mar 23", link: "/sugerCompliance" },
              { name: "Annexure 1", link: "/" },
              { name: "Annexure 2", link: "/" },
              { name: "Annexure 3", link: "/" },
              { name: "Annexure 4", link: "/" },
              { name: "Annexure 5", link: "/" },
              { name: "Annexure 6", link: "/" },
              { name: "Annexure 7", link: "/" },
              { name: "Annexure 8", link: "/" },
              { name: "Annexure 9", link: "/" },
              { name: "Annexure 10", link: "/" },
              { name: "Annexure 11", link: "/" },
              { name: "Annexure 12", link: "/" },
              { name: "Annexure 13", link: "/" },
              { name: "River Report", link: "/" },
            ],
        },
      ],
    },
    {
      name: "Distillery",
      submenu: true,
      sublinks: [
        {
          Head: "Compliances",
          Headmore: [
            { name: "Production", link: "/" },
            { name: "Analysis", link: "/" },
            { name: "Environmental Clearance (EC) ", link: "/" },
          ],
          sublink: [
            { name: "Apr 21 to Sep 21", link: "/" },
            { name: "Apr 22 to Sep 22", link: "/" },
            { name: "Oct 22 to Mar 23", link: "/" },
            { name: "Annexure 1", link: "/" },
            { name: "Annexure 2", link: "/" },
            { name: "Annexure 3", link: "/" },
            { name: "Annexure 4", link: "/" },
            { name: "Annexure 5", link: "/" },
            { name: "Annexure 6", link: "/" },
            { name: "Annexure 7", link: "/" },
            { name: "Annexure 8", link: "/" },
            { name: "Annexure 9", link: "/" },
            { name: "Annexure 10", link: "/" },
            { name: "Annexure 11", link: "/" },
            { name: "Annexure 12", link: "/" },
            { name: "Annexure 13", link: "/" },
            { name: "River Report", link: "/" },
          ],
        },
      ],
    },
  ];
  // console.log(links[0].name);
  return (
    <>
      <div></div>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left group">
            <h1
              className="py-7 flex justify-between cursor-pointer hover:text-blue-600 items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="md:hidden">
                {heading === link.name ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </span>
              <span className="md:block  hidden group-hover:rotate-180 ">
                <KeyboardArrowDownIcon />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-1.5">
                    <div className="w-4 h-4 bg-white absolute rotate-45"></div>
                  </div>
                  <div className="bg-white ml-[-1rem] w-full p-2 gap-5 rounded-sm drop-shadow-2xl">
                    {link.sublinks.map((item, id) => (
                      <div className="p-3.5" key={id}>
                        <h1 className="text-lg font-semibold ">{item.Head}</h1>
                        {/* {item.Head === "Compliance" && ( */}
                        <ul className="grid mt-2 grid-cols-3 gap-3 drop-shadow-2xl overflow-y-scroll p-4 max-h-[540px] scrollbar-hide">
                          {item.Head === "Compliance"
                            ? sugarHeader.map((a, b) => (
                                <li
                                  key={b}
                                  className="text-sm text-gray-600 my-1 grid min-w-[130px]"
                                >
                                  <Link
                                    href={a.file.split(".")[0]}
                                    className="hover:text-[#4A3AFF] hover:border-b-2 text-center"
                                  >
                                    {a.title}
                                  </Link>
                                </li>
                              ))
                            : distilleryHeader.map((a, b) => (
                                <li
                                  key={b}
                                  className="text-sm text-gray-600 my-1 grid min-w-[130px]"
                                >
                                  <Link
                                    href={a.file.split(".")[0]}
                                    className="hover:text-[#4A3AFF] hover:border-b-2 text-center"
                                  >
                                    {a.title}
                                  </Link>
                                </li>
                              ))}
                        </ul>


                        {item.Headmore
                          ? item.Headmore.map((a, b) => (
                              <Link
                                key={b}
                                href={a.link}
                                className="hover:text-[#4A3AFF]"
                              >
                                <h1 className="text-lg font-semibold">
                                  {a.name}
                                </h1>
                              </Link>
                            ))
                          : ""}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile submenu */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"} `}>
            {link.sublinks?.map((slinks, id) => (
              <div key={id}>
                <div>
                  <h1
                    className="py-4 pl-7 font-semibold flex justify-between items-center md:pr-0 pr-8 "
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                  >
                    {slinks.Head}
                    <span className="">
                      {subHeading === slinks.Head ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink, sid) => (
                      <li className="py-3 pl-14" key={sid}>
                        <Link href={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
