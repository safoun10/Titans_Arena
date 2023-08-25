const TestCompo = () => {
 

  return (
    <div>
      <div className="bg-gray-500 text-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Pro Plan</h2>
        <p className="mb-6">Unlock all premium features</p>
        <div className="flex items-center justify-between mb-6">
          <span className="text-3xl font-semibold">$19</span>
          <span className="text-gray-500">per month</span>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Unlimited projects
          </li>
          <li className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Priority support
          </li>
          <li className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Access to templates
          </li>
        </ul>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full mt-6 w-full">
          Get Started
        </button>
      </div>
      <div className="grid grid-cols-3">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src="https://themepixer.com/demo/html/geco/Geco/img/bg/cta_bg.jpg"
              alt="User Avatar"
            />
            <div>
              <h3 className="text-lg font-semibold">Jane Doe</h3>
              <p className="text-sm">UX Designer</p>
            </div>
          </div>
          <p className="text-lg mb-6">
            "I'm absolutely amazed by the quality and ease of use of this
            product. It has transformed the way I work and collaborate with my
            team."
          </p>
          <div className="flex justify-between">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.172 8.172a1 1 0 111.415-1.415L10 8.586l.414-.413a1 1 0 111.415 1.415L11.414 10l.413.414a1 1 0 11-1.415 1.415L10 11.414l-.414.413a1 1 0 01-1.414-1.415L8.586 10 8.172 9.586a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">5 stars</span>
            </div>
            <span className="text-sm">June 15, 2023</span>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src="https://themepixer.com/demo/html/geco/Geco/img/bg/cta_bg.jpg"
              alt="User Avatar"
            />
            <div>
              <h3 className="text-lg font-semibold">Jane Doe</h3>
              <p className="text-sm">UX Designer</p>
            </div>
          </div>
          <p className="text-lg mb-6">
            "I'm absolutely amazed by the quality and ease of use of this
            product. It has transformed the way I work and collaborate with my
            team."
          </p>
          <div className="flex justify-between">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.172 8.172a1 1 0 111.415-1.415L10 8.586l.414-.413a1 1 0 111.415 1.415L11.414 10l.413.414a1 1 0 11-1.415 1.415L10 11.414l-.414.413a1 1 0 01-1.414-1.415L8.586 10 8.172 9.586a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">5 stars</span>
            </div>
            <span className="text-sm">June 15, 2023</span>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src="https://themepixer.com/demo/html/geco/Geco/img/bg/cta_bg.jpg"
              alt="User Avatar"
            />
            <div>
              <h3 className="text-lg font-semibold">Jane Doe</h3>
              <p className="text-sm">UX Designer</p>
            </div>
          </div>
          <p className="text-lg mb-6">
            "I'm absolutely amazed by the quality and ease of use of this
            product. It has transformed the way I work and collaborate with my
            team."
          </p>
          <div className="flex justify-between">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.172 8.172a1 1 0 111.415-1.415L10 8.586l.414-.413a1 1 0 111.415 1.415L11.414 10l.413.414a1 1 0 11-1.415 1.415L10 11.414l-.414.413a1 1 0 01-1.414-1.415L8.586 10 8.172 9.586a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">5 stars</span>
            </div>
            <span className="text-sm">June 15, 2023</span>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default TestCompo;
