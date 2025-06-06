import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const DonationCampaignsPage = () => {
  const campaigns = useLoaderData();

  const getStatusClasses = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "text-green-500 font-bold";
      case "closed":
        return "text-red-500 font-bold";
      case "pending":
        return "text-yellow-500 font-bold";
      default:
        return "text-gray-500 font-bold";
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="mb-6 text-2xl font-bold text-center">Donation Campaigns</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="overflow-hidden border rounded-lg shadow-lg"
          >
            <img
              src={campaign.image}
              alt={campaign.title}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-semibold">{campaign.title}</h2>
              <p className="mb-4 text-gray-700">{campaign.description}</p>
              <p className="mb-4 text-sm">
                Status:{" "}
                <span className={getStatusClasses(campaign.status)}>
                  {campaign.status}
                </span>
              </p>
              <p className="mb-4 text-sm text-gray-500">
                Division: {campaign.division}
              </p>
              <Link
                to={`/donation-campaigns/${campaign.id}`}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Donate Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationCampaignsPage;
