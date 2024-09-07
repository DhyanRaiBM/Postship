import { AlertTriangle, info } from '../assets'

const MainSection = () => {
  return (
    <div className="px-14 max-sm:px-6 py-12 bg-gray-50 bg-custom-image">
      <h1 className="text-2xl font-bold mb-8">Welcome, John Mathew!!</h1>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-wrap gap-4 items-center justify-center w-full">
          {/* First Card */}
          <div className="bg-white p-3.5 rounded-xl border border-1 border-[#ded8bf] main-box-width">
            <h2 className="font-semibold text-md text-black">
              Order Sync Successful!
            </h2>
            <p className="mt-2 text-gray-600  text-sm">
              Your order details from the last 30 days have been successfully
              synced. Check them out now!
            </p>
            <button className="mt-7 mb-2 border-[1px] border-[#b5b5b5] bg-[#3f3f3f] hover:bg-black text-white  text-sm py-1 rounded-lg px-3">
              Explore Your Orders
            </button>
          </div>

          {/* Second Card */}
          <div className="bg-[#fff8db] p-3.5 rounded-xl border border-1 border-[#ded8bf] main-box-width">
            <h2 className="font-semibold flex text-md items-center  text-[#5e4200] ">
              <img
                src={AlertTriangle}
                alt="alert-triangle"
                className="mr-2 inline h-5"
              />{' '}
              <span>Customize Customer Notification</span>
            </h2>
            <p className="mt-2 text-gray-600  text-sm">
              Tailor Your Email Experience: Set the Sender Email and Choose
              Notification Triggers
            </p>
            <button className="mt-7 mb-2 border-[1px] border-[#b5b5b5] bg-[#3f3f3f] hover:bg-black text-white text-sm py-1 rounded-lg px-3">
              Configure Notifications
            </button>
          </div>

          {/* Third Card */}
          <div className="flex flex-col justify-between bg-[#eaf4ff] p-3.5 rounded-xl border border-1 border-[#ded8bf] main-box-width lg:h-full">
            <div>
              <h2 className="font-semibold text-md flex items-center text-black">
                <img
                  src={info}
                  alt="alert-triangle"
                  className="mr-2 inline h-5"
                />{' '}
                <span>Your Tracking Link has been generated</span>
              </h2>
              <p className="mt-2 text-gray-600 text-sm">
                Include the{' '}
                <a href="#" className="text-blue-600">
                  Link
                </a>{' '}
                to Your Store's Navigation Menu.
              </p>
            </div>
            <div className="mb-3 flex space-x-2">
              <button className="bg-white border-[1px] border-[#b5b5b5] hover:bg-[#eff0f2] text-black  text-sm py-1 rounded-lg px-3">
                Copy Link
              </button>

              <button className="bg-[#3f3f3f] border-[1px] border-[#b5b5b5] hover:bg-black text-white  text-sm py-1 rounded-lg px-3">
                Go To Navigation Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection
