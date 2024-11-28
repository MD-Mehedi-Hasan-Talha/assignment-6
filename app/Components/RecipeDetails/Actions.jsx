import Save from "../Icons/Save";
import Share from "../Icons/Share";

export default function Actions() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex space-x-4">
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
          <Share />
          Share
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
          <Save />
          Save
        </button>
      </div>
    </div>
  );
}
