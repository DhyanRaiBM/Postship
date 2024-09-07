import { eye, order } from '../../assets'

const TrackingStats = ({ className }: { className: string }) => {
  return (
    <div
      className={`bg-white p-4 rounded-[10px] border-[1.5px] border-[#e5e5e5] ${className}`}
    >
      <h2 className="text-md font-semibold mb-2">
        Tracking Page Views Vs Orders
      </h2>
      <p className="mb-4 text-sm">
        Understand user engagement patterns and optimize your tracking page for
        enhanced customer experiences.
      </p>
      <div className="space-y-4 md:mt-8">
        <div className="flex items-center justify-between bg-[#ffebd5] p-4 rounded-md">
          <div className="flex flex-col">
            <span className="text-[12px] font-semibold">Orders</span>
            <span className="text-4xl text-[#4a4a4a] font-semibold mt-2">
              80
            </span>
          </div>
          <span className="text-xl">
            <img src={order} alt="order" />
          </span>{' '}
        </div>
        <div className="flex items-center justify-between bg-[#ffc879] p-4 rounded-md">
          <div className="flex flex-col">
            <span className="text-[12px] font-semibold">
              Tracking Page Views
            </span>
            <span className="text-4xl text-[#4a4a4a] font-semibold mt-2">
              44
            </span>
          </div>
          <span className="text-xl">
            <img src={eye} alt="order" />
          </span>{' '}
        </div>
      </div>
    </div>
  )
}

export default TrackingStats
