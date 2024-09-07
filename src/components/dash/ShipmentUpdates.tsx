import { useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const ShipmentUpdates = ({ className }: { className: string }) => {
  const data = {
    labels: [
      'Delivered',
      'Out for delivery',
      'Intransit',
      'Pending',
      'Exception',
    ],
    datasets: [
      {
        data: [40, 60, 62, 40, 60],
        backgroundColor: [
          '#ffddb6',
          '#ffc879',
          '#956f00',
          '#e5a500',
          '#5e4200',
        ],
      },
    ],
  }

  const options = {
    cutout: '30%',
    plugins: {
      tooltip: { enabled: true },
      legend: { display: false },
    },
    animation: {
      animateScale: true,
    },
  }

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div
      className={`bg-white p-4 rounded-[10px] border-[1.5px] border-[#e5e5e5] ${className}`}
    >
      <div className="flex  justify-between items-center mb-3">
        <h2 className="text-md font-semibold">Shipment Updates</h2>
        <span className="text-sm text-gray-500">Total Orders: 394</span>
      </div>

      {/* Horizontal scrollable buttons */}
      <div className="scrollable-container mb-4 pb-1">
        <div className="flex space-x-2">
          {data.labels.map((label, index) => (
            <button
              key={index}
              className={`px-3 py-2 rounded-[5px] font-semibold text-[12px] text-[#4a4a4a] ${
                index === 1 ? 'min-w-[120px]' : ''
              }`}
              style={{
                backgroundColor:
                  activeIndex === index
                    ? data.datasets[0].backgroundColor[index]
                    : '#f1f1f1',
                color: index === 4 && activeIndex === 4 ? 'white' : 'black',
              }}
              onClick={() => setActiveIndex(index)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Donut chart */}
      <div className="relative flex flex-col items-center justify-center">
        <div className="w-[60%] md:w-[40%]">
          <Pie data={data} options={options} />
        </div>

        {/* Legend with colors */}
        <div className="mt-4">
          <div className="flex gap-3 w-[80%] flex-wrap ">
            {data.labels.map((label, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-1"
              >
                <span
                  className={`inline-block w-5 h-2 rounded-full`}
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[index],
                  }}
                ></span>
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShipmentUpdates
