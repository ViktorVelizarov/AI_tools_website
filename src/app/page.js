"use client"

import { useState, useEffect } from 'react';
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";

function ToolCard({ imgSrc, title, description, pricing }) {
  return (
    <article className="flex flex-col px-4 pt-4 pb-8 mt-5 w-full bg-white rounded-xl max-md:pr-5">
      <div className="flex gap-5 justify-between w-full">
        <div className="flex gap-5 justify-between text-xl font-bold">
          <img loading="lazy" src={imgSrc} alt={title} className="shrink-0 aspect-[1.09] w-[51px]" />
          <div className="my-auto">{title}</div>
        </div>
        {pricing && <div className="self-start mt-2.5 text-base font-extralight text-center">{pricing}</div>}
      </div>
      <div className="mt-6 text-base font-extralight">{description}</div>
    </article>
  );
}

export default function Home() {
  const [toolData, setToolData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null); // State for selected filter

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/getAItools', {
        });
        const data = await response.json();
        console.log("data:")
        console.log(data)
        setToolData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (value) => {
    setSelectedFilter(value);
  };

  const filteredTools = selectedFilter
  ? toolData.filter((tool) => tool.Free_version === (selectedFilter === "free")) || toolData.filter((tool) => tool.Paid_version === (selectedFilter === "paid"))
  : toolData; // Filter data or use all data if no filter is selected

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="flex flex-col min-h-screen bg-blue-200">
      {/* Header */}
      <header className="flex flex-col justify-between items-center px-16 py-8 bg-gray-300 relative" style={{ backgroundImage: 'url("https://i.pinimg.com/originals/32/b8/77/32b877ed4aa7778cc7d43ebb7d95a6f1.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <h1 className="text-5xl font-bold text-center text-black max-md:max-w-full max-md:text-4xl mt-32">Find AI tools for all types of use cases</h1>
        <form className="flex justify-center items-start px-3.5 py-4 mt-16 max-w-full text-2xl font-extralight text-black bg-white rounded-xl border border-black border-solid shadow-sm w-[750px] max-md:pr-5 max-md:mt-10">
          <label className="sr-only" htmlFor="toolInput">Enter a tool name</label>
          <input className="w-full bg-transparent border-none outline-none" type="text" id="toolInput" placeholder="Enter a tool name...." aria-label="Enter a tool name...." />
          </form>
      </header>

      {/* Body */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 relative bg-blue-200">

        {/* Filters section */}
        <div className="md:col-span-1 p-14 ">
          {/* Filters */}
          <div className="self-start pr-10 ">
            <section className=" ">
              <h2 className="text-2xl font-bold mb-4 ml-2 text-black ">Filters</h2>
              <Accordion selectionMode="multiple" defaultExpandedKeys={["1", "2", "3"]}>
                <AccordionItem   key="1" className='text-black font-semibold' aria-label="Category" title="Category">
                  <CheckboxGroup  className=''>
                    <Checkbox color="primary" className='font-normal'  value="buenos-aires">AI Chatbots</Checkbox>
                    <Checkbox className='font-normal'  value="sydney">Image</Checkbox>
                    <Checkbox className='font-normal'  value="london">Automation</Checkbox>
                    <Checkbox className='font-normal'  value="tokyoo">Writing</Checkbox>
                    <Checkbox className='font-normal'  value="tokyooo">Video</Checkbox>
                  </CheckboxGroup>
                </AccordionItem>
                <AccordionItem key="2" className='text-black font-semibold' aria-label="Industry" title="Industry">
                  <CheckboxGroup>
                    <Checkbox className='font-normal'  value="buenos-aires">Productivity</Checkbox>
                    <Checkbox className='font-normal'  value="sydney">Marketing</Checkbox>
                    <Checkbox className='font-normal'  value="san-francisco">Entertainment</Checkbox>
                    <Checkbox className='font-normal'  value="london">Social Media</Checkbox>
                    <Checkbox className='font-normal'  value="tokyo">Business</Checkbox>
                    <Checkbox className='font-normal'  value="tokyo2">Business</Checkbox>
                    <Checkbox className='font-normal'  value="tokyo3">Eductaion</Checkbox>
                  </CheckboxGroup>
                </AccordionItem>
                <AccordionItem key="3" className='text-black font-semibold' aria-label="Price" title="Price">
                      <div>
                        <div className="flex items-center">
                          <input type="radio" id="free" name="priceFilter" value="free" onChange={(e) => handleCheckboxChange(e.target.value)} className="w-5 h-5" />
                          <label className='font-normal ml-2' for="free">Free</label>
                        </div>
                        <div className="flex items-center mt-2">
                          <input type="radio" id="paid" name="priceFilter" value="paid" onChange={(e) => handleCheckboxChange(e.target.value)} className="w-5 h-5" />
                          <label className='font-normal ml-2' for="paid">Paid</label>
                        </div>
                      </div>
              </AccordionItem>
              </Accordion>
            </section>
          </div>
        </div>

        {/* Search and Property Cards */}
        <div className="md:col-span-3">
          {/* Tool Cards */}
          <section className="self-stretch px-0.5 mt-10 max-w-[1040px] max-md:max-w-full text-black">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTools.map((tool, index) => (
            <ToolCard
              key={index}
              imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5131dd1527b6bfd44de733eb18eee4b5a926586836aee4060a1661450a46f233?apiKey=062b4d44d883462aa75330f48dcf750c&"
              title={tool.tool_name}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              pricing={tool.Free_version ? "Free" : (tool.Paid_version ? "Paid" : null)}
            />
          ))}
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}