import { Calendar, Search, ThumbsDown, ThumbsUp } from "lucide-react";

export default function ReviewFilters({searchTerm,setFilter,setSearchTerm,setStartDate,startDate,endDate,setEndDate,filter}){
    return (
        <div className="mb-6 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search reviews..."
            className="w-full pl-10 pr-4  py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Date Range Picker */}
        <div className="flex gap-4 flex-wrap">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <input
              type="date"
              className="w-full p-2  py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
            <input
              type="date"
              className="w-full p-2 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 sm:flex-row flex-col">
          <button
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              filter === 'recent' ? 'bg-yellow-600 text-white' : 'bg-gray-100'
            }`}
            onClick={() => setFilter('recent')}
          >
            <Calendar className="w-4 h-4" />
            Most Recent
          </button>
          <button
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              filter === 'positive' ? 'bg-yellow-600 text-white' : 'bg-gray-100'
            }`}
            onClick={() => setFilter('positive')}
          >
            <ThumbsUp className="w-4 h-4" />
            Highest Rated
          </button>
          <button
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              filter === 'negative' ? 'bg-yellow-600 text-white' : 'bg-gray-100'
            }`}
            onClick={() => setFilter('negative')}
          >
            <ThumbsDown className="w-4 h-4" />
            Lowest Rated
          </button>
        </div>
      </div>
    )
}