interface Props {
  className?: string
}

const StarFacts = ({ className }: Props) => {
  return (
    <div
      className={`bg-[#956f00] text-white p-4 pr-6 rounded-[10px] border-[1px] border-[#e5e5e5] ${className}`}
    >
      <h2 className="text-sm font-semibold mb-2">
        Star Facts about your orders!!!
      </h2>
      <p className="mb-2 text-[13px]">
        There are 8 shipments that have been out for delivery for more than 3
        days.
      </p>
      <p className="my-6 text-[13px]">
        There are 5 shipments in exception right now.
      </p>
      <p className="mb-4 text-[13px]">
        The maximum chargebacks are from Miami.
      </p>
      <button className="px-3 py-1 md:mt-6 bg-white text-black rounded-md text-[12px] font-medium mt-2">
        Check Orders Page
      </button>
    </div>
  )
}

export default StarFacts
