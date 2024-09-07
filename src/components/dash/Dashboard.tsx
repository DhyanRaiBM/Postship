import TimeFilter from './TimeFilter'
import ShipmentUpdates from './ShipmentUpdates'
import StarFacts from './StarFacts'
import TrackingStats from './TrackingStats'

const Dashboard = () => {
  return (
    <div className="bg-[#fff7ee] py-14 px-6 md:px-16">
      <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
        Instant Dive into Your Performance Metrics
      </h1>
      <TimeFilter />

      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <ShipmentUpdates className="w-full md:w-[440px]" />

        <StarFacts className="w-full md:w-[210px]" />

        <TrackingStats className="w-full md:w-[440px]" />
      </div>
    </div>
  )
}

export default Dashboard
