import calendar from '../../assets/icons/calendar.svg'

const TimeFilter = () => {
  return (
    <div className="flex flex-wrap gap-2 space-x-0 md:space-x-4">
      <button className="px-3 py-2 bg-white text-sm font-semibold  border-[1px] border-purple-600 rounded-[4px]">
        Lifetime
      </button>
      <button className="px-3 py-2 bg-white text-sm font-semibold  hover:bg-gray-100 rounded-[4px]">
        Last Week
      </button>
      <button className="px-3 py-2 bg-white text-sm font-semibold  hover:bg-gray-100 rounded-[4px]">
        Last Month
      </button>
      <button className="px-3 py-2 bg-white text-sm font-semibold  hover:bg-gray-100 rounded-[4px]">
        Last Year
      </button>
      <button className="px-3 py-2 bg-white text-sm font-semibold  hover:bg-gray-100 rounded-[4px] flex items-center">
        Customize Time Line
        <span className="ml-2 inline-block w-4 h-4  rounded-full">
          <img src={calendar} alt="calendar" />
        </span>{' '}
      </button>
    </div>
  )
}

export default TimeFilter
