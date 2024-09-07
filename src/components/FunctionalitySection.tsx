import { useState } from 'react'
import { exp1, exp2, exp3, exp4, exp5 } from '../assets'

const FunctionalitySection = () => {
  const [accentColor, setAccentColor] = useState('#FF9898')
  const [textColor, setTextColor] = useState('#571010')
  const [backgroundColor, setBackgroundColor] = useState('#FFEAFA')

  return (
    <div className="px-4 md:px-8 lg:px-16 py-10 text-[#4a4a4a]">
      <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
        Discover the Heart of Our Functionality
      </h1>
      <div className="flex flex-wrap justify-between gap-4">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded-xl border-[1px] border-[#b5b5b5] w-full sm:w-[48%] md:w-[29%]">
          <h2 className="text-sm font-semibold mb-2">
            Elevate Your Brand Aesthetics with Custom Tracking Page Styles
          </h2>
          <p className="text-sm mb-3 text-gray-600">
            Immerse your customers in a branded experience by personalizing the
            colors on your tracking page.
          </p>

          {/* Accent Color */}
          <div className="mb-3 mt-[1px]">
            <label className="block text-sm font-semibold mb-1">
              Accent Color
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                className="border-[1px] border-black p-2 rounded-md text-sm h-8 w-full"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
              />
              <div
                className="w-[80px] h-8 rounded-md border-[1px] border-[#b5b5b5]"
                style={{ backgroundColor: accentColor }}
              ></div>
            </div>
          </div>

          {/* Text Color */}
          <div className="mb-3 mt-[1px]">
            <label className="block text-sm font-semibold mb-1">
              Text Color
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                className="border-[1px] border-black p-2 rounded-md text-sm h-8 w-full"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
              />
              <div
                className="w-[80px] h-8 rounded-md border-[1px] border-[#b5b5b5]"
                style={{ backgroundColor: textColor }}
              ></div>
            </div>
          </div>

          {/* Background Color */}
          <div className="mb-3 mt-[1px]">
            <label className="block text-sm font-semibold mb-1">
              Background Color
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                className="border-[1px] border-black p-2 rounded-md text-sm h-8 w-full"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
              />
              <div
                className="w-[80px] h-8 rounded-md border-[1px] border-[#b5b5b5]"
                style={{ backgroundColor: backgroundColor }}
              ></div>
            </div>
          </div>

          <div className="flex space-x-3 mt-5">
            <button className="bg-white border-[1px] font-semibold border-[#b5b5b5] text-sm py-1 rounded-lg px-3">
              Preview
            </button>
            <button className="bg-[#3f3f3f] border-[1px] border-[#b5b5b5] hover:bg-black text-white text-sm py-1 rounded-lg px-3">
              Apply Colors
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[48%] md:w-[40%]">
          <div className="bg-white p-4 rounded-xl border-[1px] border-[#b5b5b5]">
            <h2 className="text-sm font-semibold mb-2">
              Exclusive Onboarding Support for High-Volume Brands
            </h2>
            <p className="text-sm mb-3 text-gray-600">
              Unlock personalized guidance! Book a one-on-one onboarding call to
              streamline your experience.
            </p>
            <button className="bg-[#3f3f3f] border-[1px] border-[#b5b5b5] hover:bg-black text-white text-sm py-1 rounded-lg px-3">
              Schedule A Call
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-xl border-[1px] border-[#b5b5b5] mt-4">
            <h2 className="text-sm font-semibold mb-2">
              Explore Our Integrated Ecosystem
            </h2>
            <p className="text-sm mb-3 text-gray-600">
              Discover a variety of popular integrations tailored for your
              convenience.
            </p>
            <div className="flex space-x-6 my-7">
              <img src={exp1} alt="exp1" className="w-9 h-9" />
              <img src={exp2} alt="exp2" className="w-9 h-9" />
              <img src={exp3} alt="exp3" className="w-9 h-9" />
              <img src={exp4} alt="exp4" className="w-9 h-9" />
              <img src={exp5} alt="exp5" className="w-9 h-9" />
            </div>
            <button className="bg-[#3f3f3f] border-[1px] border-[#b5b5b5] hover:bg-black text-white text-sm py-1 rounded-lg px-3">
              Explore Integrations
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-4 pb-0 max-sm:pb-4 rounded-xl border-[1px] border-[#b5b5b5] w-full sm:w-[48%] md:w-[28%]">
          <h2 className="text-sm font-semibold mb-2">
            Seamlessly Integrate Custom HTML Elements
          </h2>
          <p className="text-sm mb-3 text-gray-600">
            Unleash creativity with our Custom HTML feature. Add links, custom
            messages, or any HTML content to elevate the tracking page
            experience for your customers.
          </p>
          <div className="mb-3">
            <label className="block text-sm mb-1">HTML Link</label>
            <textarea
              className="rounded-lg border-[1px] border-[#b5b5b5] p-2 text-sm w-full h-32 resize-none"
              defaultValue="Value"
            ></textarea>
          </div>

          <div className="flex space-x-3 mt-8">
            <button className="bg-white border-[1px] border-[#b5b5b5] hover:bg-[#eff0f2] font-semibold text-sm py-1 rounded-lg px-3">
              Preview
            </button>
            <button className="bg-[#3f3f3f] border-[1px] border-[#b5b5b5] hover:bg-black text-white text-sm py-1 rounded-lg px-3">
              Apply Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FunctionalitySection
