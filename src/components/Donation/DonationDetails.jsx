import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer} from "react-toastify"; 

import 'react-toastify/dist/ReactToastify.css';


const DonationDetails = () => {
  
  const { id } = useParams();
  const campId = parseInt(id);  

 
  const campaigns = useLoaderData();  
  const campaign = campaigns.find((camp) => camp.id === campId);  
  
  if (!campaign) {
    return <div>Campaign not found!</div>;  
  }

  
  const { title, description, image, division } = campaign;
  // console.log(campaign);  

  
  const [formData, setFormData] = useState({
    quantity: '',
    itemType: '',
    pickupLocation: '',
    additionalNotes: '',
  });

  // Handle input change in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:");
    toast.success('Thank you! We will reach your destination soon.');
    setFormData({
      quantity: '',
      itemType: '',
      pickupLocation: '',
      additionalNotes: '',
    });
  };

  return (
    <div className="space-y-6">
    

     
      <div className="items-center p-6 shadow-lg card">
        <img
          src={image}
          alt={title}
          className="object-cover w-64 h-64 rounded-lg"
        />
        <h1 className="mt-4 text-2xl font-bold">{title}</h1>
        <p>{description}</p>
        <p className="text-sm text-gray-600">Division: {division}</p>
      </div>

      
      <div className="items-center p-6 shadow-lg card">
        <h2 className="mb-4 text-xl font-bold">Donate Now</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Quantity of Items</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              placeholder="e.g., 2 jackets, 3 blankets"
              required
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label>Item Type</label>
            <select
              name="itemType"
              value={formData.itemType}
              onChange={handleInputChange}
              required
              className="w-full select select-bordered"
            >
              <option value="">Select an item</option>
              <option value="blanket">Blanket</option>
              <option value="jacket">Jacket</option>
              <option value="sweater">Sweater</option>
            </select>
          </div>
          <div>
            <label>Pickup Location</label>
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleInputChange}
              placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
              required
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label>Additional Notes (Optional)</label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleInputChange}
              placeholder="Any additional instructions..."
              className="w-full textarea textarea-bordered"
            />
          </div>
          <button type="submit" className="w-full bg-red-400 hover:bg-red-100 btn">
            Submit
          </button>
        </form>
      </div>

      {/* ToastContainer */}
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        style={{ zIndex: 9999 }} 
      />
    </div>
  );
};

export default DonationDetails;
