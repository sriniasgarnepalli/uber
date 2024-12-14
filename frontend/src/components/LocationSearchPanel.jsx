const LocationSearchPanel = () => {
  const locations = [
    "AJARA HOSPITALS - Best Multispeciality Hospital in Warangal, Hanamkonda",
    "Aranyam - The Jungle Theme Restaurant | Nakkalagutta Hanamkonda",
    "Sri Bhadrakali Devastanam",
    "Warangal Fort"
  ];

  return (
    <div className="space-y-4">
      {" "}
      {locations.map((element, index) => (
        <div
          key={index}
          className="flex items-center justify-start gap-4 p-3 border-2 border-gray-200 active:border-black rounded-xl"
        >
          <span className="bg-[#eee] h-10 w-10 rounded-full flex items-center justify-center">
            <i className="ri-map-pin-fill text-xl text-gray-600"></i>{" "}
          </span>
          <h4 className="font-medium text-lg text-gray-800">{element}</h4>{" "}
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
