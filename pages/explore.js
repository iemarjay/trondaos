import Link from 'next/link'
import React, { useState } from 'react'
import { Tabs } from 'react-tabs'
import Tab from 'react-tabs/lib/components/Tab'
import TabList from 'react-tabs/lib/components/TabList'
import TabPanel from 'react-tabs/lib/components/TabPanel'
import DropdownIcon from '../components/Icons/DropdownIcon'
import Layout from '../components/Layout/Layout'

const Explore = () => {
  const [catDropdown, setCatDropdown] = useState()

  const handleCategoryDropdown = () => {
    setCatDropdown(!catDropdown)
  }

  const categories = [
    {
      id: 1,
      name: 'All',
      selected: true,
    },
    {
      id: 2,
      name: 'Collector',
    },
    {
      id: 3,
      name: 'Creator',
    },
    {
      id: 4,
      name: 'Grant',
    },
    {
      id: 5,
      name: 'Investment',
    },
    {
      id: 6,
      name: 'Media',
    },
    {
      id: 7,
      name: 'Protocol',
    },
    {
      id: 8,
      name: 'Service',
    },
    {
      id: 9,
      name: 'Social',
    },
  ]

  return (
    <div>
      <Layout>
        <div>
          <div className="flex items-center justify-between">
            <h1 className="section__header">Explore Spaces</h1>

            <div className="relative hidden lg:block">
              <button
                className="flex items-center  bg-transparent text-sm border-[#545252] border px-5 py-2 rounded-full h-12"
                onClick={handleCategoryDropdown}
              >
                <span className="h-6 w-6 flex items-center mr-1">
                  <img src="/educare.svg" className="h-full w-full" />
                </span>
                Categories
                <span className="text-sm flex items-center ml-4 pl-3 border-[#545252] border-l">
                  All
                  <DropdownIcon className="text-sm text-[#545252] " />
                </span>
              </button>

              <div
                className={`absolute border-none category-menu  ${
                  catDropdown ? 'show' : ''
                } large-dropdown  shadow-md rounded-md w-full h-64 max-w-full scrollbar-change fade-in z-10 py-3 mt-2`}
              >
                <div className=" py-4 h-full scrollbar-change overflow-y-auto px-3 space-y-2">
                  {categories.map((category, index) => (
                    <button
                      className={`flex items-center py-3 px-2 text-sm justify-between  rounded-lg w-full  hover:bg-[#545252] transition duration-200 ease-in-out  ${
                        category.selected ? 'bg-[#545252]' : ''
                      }`}
                      type="button"
                      key={index}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center py-4 mb-3 gap-1 flex-row">
            <p className="mr-2">All Spaces</p>
            <p className="text-sm text-gray-300">1 Space(s)</p>
          </div>

          <div className="flex lg:items-center w-full my-3 lg:hidden justify-evenly gap-3 flex-col lg:flex-row">
            <div className="relative rounded-full  bg-[#3F3F3F] items-center grow flex h-12 w-full md:8/12">
              <div className="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none h-full">
                <span className="text-gray-500 px-3 w-22 h-22">
                  <img src="/search.svg" className="w-full h-full" />
                </span>
              </div>
              <input
                placeholder="Search Spaces"
                type="text"
                name="search"
                id="search"
                className="  py-2 block w-full pl-16 pr-7  sm:text-sm rounded-full h-full focus:outline-none bg-transparent border-none border-[#545252] transition ease-in duration-200 text-[#A4A1A1]"
              />
            </div>

            <div className="relative w-7/12 md:4/12">
              <button
                className="flex items-center  bg-transparent text-sm border-[#545252] border px-5 py-2 rounded-full h-12 w-full justify-center"
                onClick={handleCategoryDropdown}
              >
                <span className="h-6 w-6 flex items-center mr-1 hidden sm:block">
                  <img src="/educare.svg" className="h-full w-full" />
                </span>
                Categories
                <span className="text-sm flex items-center ml-4 pl-3 border-[#545252] border-l">
                  All
                  <DropdownIcon className="text-sm text-[#545252] " />
                </span>
              </button>

              <div
                className={`absolute border-none category-menu  ${
                  catDropdown ? 'show' : ''
                } large-dropdown  shadow-md rounded-md w-full h-64 max-w-full scrollbar-change fade-in z-10 py-3 mt-2`}
              >
                <div className=" py-4 h-full scrollbar-change overflow-y-auto px-3 space-y-2">
                  {categories.map((category, index) => (
                    <button
                      className={`flex items-center py-3 px-2 text-sm justify-between  rounded-lg w-full  hover:bg-[#545252] transition duration-200 ease-in-out  ${
                        category.selected ? 'bg-[#545252]' : ''
                      }`}
                      type="button"
                      key={index}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="py-4">
            <div className=" w-full mt-3 md:mt-0  relative overflow-hidden rounded h-full fade-in">
              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 md:gap-6 lg:gap-x-12 gap-y-4">
                <Link href="/spaces/2" className="flip">
                  <div className="flex items-center text-sm w-full border border-[#545252] rounded-md front ">
                    <div className="flex rounded-md items-center flex-col justify-center gap-4 w-full p-3 py-5 bg-[#373636]">
                      <div className="h-20 w-20">
                        <img
                          src="http://res.cloudinary.com/dlnrf91ax/image/upload/v1679579174/ktxrabfxvlo0lkcmld6h.png"
                          className="w-full object-cover rounded-full  "
                        />
                      </div>

                      <div className=" mt-2">
                        <h4 className="mb-1">Optimism Collective</h4>
                        <p className="text-[#8F8F8F]">Arts, Grant</p>
                        <p className="text-[#8F8F8F]">5k Members</p>
                      </div>

                      <button
                        className="button1 py-2 px-6 w-full text-center rounded-full mt-2 z-50 block lg:hidden"
                        onClick={(e) => {
                          e.preventDefault()
                        }}
                      >
                        Join
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center text-sm w-full border border-[#545252] rounded-md back bg-[#373636]">
                    <div className="flex flex-col justify-evenly gap-2 w-full p-3 py-5 ">
                      <div className="flex items-center justify-start gap-4">
                        <img
                          src="http://res.cloudinary.com/dlnrf91ax/image/upload/v1679579174/ktxrabfxvlo0lkcmld6h.png"
                          className="object-cover rounded-full h-14 w-14 "
                        />
                        <span className="text-lg">Optimism Collective</span>
                      </div>

                      <div className="">
                        <p className="text-[#8F8F8F]">
                          A new model for properly rewarding those who create or sustain public goods
                        </p>
                      </div>

                      <button
                        className="button1 py-2 px-6 w-full text-center rounded-full mt-2 z-50"
                        onClick={(e) => {
                          e.preventDefault()
                        }}
                      >
                        Join
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Explore
