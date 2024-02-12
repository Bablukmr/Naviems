"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { apiData } from "../api";
import Loading from "../loading";

export default function NavLinks() {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [apival, setApiVal] = useState([]);
  const [sugarHeader, setSugarHeader] = useState([]);
  const [distilleryHeader, setDistilleryHeader] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiData();
        setApiVal(data);
        const sugarHeaders = data.filter((item) => item.header === "Suger");
        const distilleryHeaders = data.filter(
          (item) => item.header === "Distillery"
        );
        setSugarHeader(sugarHeaders);
        setDistilleryHeader(distilleryHeaders);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const links = [
    {
      name: "Sugar",
      submenu: true,
      sublinks: [
        {
          Head: "Compliance",
          sublink: sugarHeader,
        },
      ],
    },
    {
      name: "Distillery",
      submenu: true,
      sublinks: [
        {
          Head: "Compliance",
          sublink: distilleryHeader,
          moreHead: [
            { name: "Production", link: "/" },
            { name: "Analysis", link: "/" },
          ],
        },
      ],
    },
  ];

  return (
    <>
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
                        <ul className="grid mt-2 grid-cols-3 gap-3 drop-shadow-2xl overflow-y-scroll p-4 max-h-[540px] scrollbar-hide">
                          {apival.length === 0 ? (
                            <div className="w-[400px]">

                              <Loading />
                            </div>
                          ) : (
                            item.sublink.map((a, b) => (
                              <li
                                key={b}
                                className="text-sm text-gray-600 my-1 grid min-w-[130px]"
                              >
                                <Link
                                  href={a._id}
                                  className="hover:text-[#4A3AFF] hover:border-b-2 text-center"
                                >
                                  {a.title}
                                </Link>
                              </li>
                            ))
                          )}
                        </ul>
                        {item.moreHead &&
                          item.moreHead.map((d, a) => (
                            <ul key={a} className="flex flex-col gap-y-3">
                              <Link
                                href={d.link}
                                className="text-lg font-semibold hover:text-[#4A3AFF]"
                              >
                                {d.name}
                              </Link>
                            </ul>
                          ))}
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
                    <ul>
                      {slinks.sublink.map((slink, sid) => (
                        <li className="py-3 pl-14" key={sid}>
                          <Link href={slink._id}>{slink.title}</Link>
                        </li>
                      ))}
                    </ul>
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
