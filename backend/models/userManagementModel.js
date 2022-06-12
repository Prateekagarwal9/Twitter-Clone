const profileResponse = async (resultSet) => {
    var profileDetails = {};
    profileDetails.vendorId = resultSet.VendorId;
    profileDetails.vendorEmail = resultSet.VendorEmail;
    profileDetails.vendorFirstName = resultSet.VendorFirstName;
    profileDetails.vendorLastName = resultSet.VendorLastName;
    profileDetails.vendorContactNumber = resultSet.VendorContactNumber
    profileDetails.companyName = resultSet.CompanyName;
    profileDetails.companyEmailId = resultSet.CompanyEmailId;
    profileDetails.companyContactNumber = resultSet.CompanyContactNumber;
    profileDetails.vendorType = resultSet.VendorType;
    profileDetails.companyAddress = resultSet.CompanyAddress;
    profileDetails.city= resultSet.City;
    profileDetails.state = resultSet.State;
    profileDetails.country = resultSet.Country;
    profileDetails.pincode = resultSet.Pincode;
    profileDetails.vendorServices = resultSet.VendorServices;
    profileDetails.totalServiceCost = resultSet.TotalServiceCost;
    profileDetails.isTrialAvailable = resultSet.IsTrialAvailable;
    profileDetails.totalSubscriptions = resultSet.TotalSubscriptions;
    profileDetails.documentStatus = resultSet.DocumentStatus;


    var responseObject = {
        data : profileDetails,
        message : ""
    }

    return responseObject;
}


module.exports = {
   profileResponse
};