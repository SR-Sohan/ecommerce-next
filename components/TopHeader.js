import Link from "next/link";
import React from "react";
import {BsFacebook,BsTwitter,BsGithub,BsInstagram} from "react-icons/bs";

const TopHeader = () => {
  return (
    <div className="border-b border-gray-300 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="sm:flex items-center gap-2">
              <Link href="#" className="header_top_icon">
                  <BsFacebook/>
              </Link>
              <Link href="#" className="header_top_icon">
                  <BsTwitter/>
              </Link>
              <Link href="#" className="header_top_icon">
                  <BsGithub/>
              </Link>
              <Link href="#" className="header_top_icon">
                  <BsInstagram/>
              </Link>
          </div>
          <div className="text-gray-500 text-xs uppercase">
            <strong>Free Shipping</strong> this week order over - $55
          </div>
          <div className="flex gap-4">
            <select
            className="text-gray-500 w-16 text-xs"
            name="currency"
            id="currency"
            >
              <option value="usd">USD</option>
              <option value="bdt">BDT</option>
            </select>
            <select
            className="text-gray-500 w-16 text-xs"
            name="currency"
            id="currency"
            >
              <option value="usd">USD</option>
              <option value="bdt">BDT</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
