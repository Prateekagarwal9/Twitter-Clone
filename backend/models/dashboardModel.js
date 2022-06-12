const subscriptionDetailsResponse = async (resultSet) => {
    var subscriptionDetailsList = [];
    var overallCount = 0;
    resultSet.forEach(subscription => {
        var subscriptionDetails = {};
        subscriptionDetails.subscriptionId   = subscription.SubscriptionId;
        subscriptionDetails.clientId         = subscription.ClientId;
        subscriptionDetails.clientEmployeeId = subscription.ClientEmployeeId;
        subscriptionDetails.clientUserPlanId = subscription.ClientUserPlanId;
        subscriptionDetails.employeeFirstName = subscription.EmployeeFirstName;
        subscriptionDetails.employeeLastName = subscription.EmployeeLastName;
        subscriptionDetails.clientCompanyName = subscription.ClientCompanyName;
        subscriptionDetails.startDate = subscription.StartDate.toISOString().substring(0, 10);
        subscriptionDetails.endDate = subscription.EndDate.toISOString().substring(0, 10);
        subscriptionDetails.isUploaded = subscription.IsUploaded;        
        overallCount                =   subscription.OverallCount;
        subscriptionDetailsList.push(subscriptionDetails);
            
    });

    var responseObject = {
        data : {
            "activeSubscriptionDetailsList"       : subscriptionDetailsList,
            "pageNumber"                         : "",
            "itemsPerPage"                       : "",
            "totalResultCount"                   : overallCount
        },
        message : ""
    }

    return responseObject;
}

const trialSubscriptionDetailsResponse = async (resultSet) => {
    var subscriptionDetailsList = [];
    var overallCount = 0;
    resultSet.forEach(subscription => {
        var subscriptionDetails = {};
        subscriptionDetails.trialSubscriptionId = subscription.TrialSubscriptionId;
        subscriptionDetails.clientUserPlanId    = subscription.ClientUserPlanId;
        subscriptionDetails.clientId            = subscription.ClientId;
        subscriptionDetails.clientEmployeeId    = subscription.ClientEmployeeId;
        subscriptionDetails.employeeFirstName   = subscription.EmployeeFirstName;
        subscriptionDetails.employeeLastName    = subscription.EmployeeLastName;
        subscriptionDetails.clientCompanyName   = subscription.ClientCompanyName;
        subscriptionDetails.startDate           = subscription.StartDate.toISOString().substring(0, 10);
        subscriptionDetails.endDate             = subscription.EndDate.toISOString().substring(0, 10);
        subscriptionDetails.isApproved          = subscription.IsApproved;
        overallCount                            = subscription.OverallCount;
        subscriptionDetailsList.push(subscriptionDetails);         
    });

    var responseObject = {
        data : {
            "trialSubscriptionDetailsList"       : subscriptionDetailsList,
            "pageNumber"                         : "",
            "itemsPerPage"                       : "",
            "totalResultCount"                   : overallCount
        },
        message : ""
    }

    return responseObject;
}

const trialSubscriptionRequestResponse = async (resultSet) => {
    var subscriptionRequestList = []
    var overallCount = 0;
    resultSet.forEach(subscription => {
        var subscriptionDetails = {};
        subscriptionDetails.trialSubscriptionId = subscription.TrialSubscriptionId;
        subscriptionDetails.clientUserPlanId    = subscription.ClientUserPlanId;
        subscriptionDetails.clientId            = subscription.ClientId;
        subscriptionDetails.clientEmployeeId    = subscription.ClientEmployeeId;
        subscriptionDetails.employeeFirstName   = subscription.EmployeeFirstName;
        subscriptionDetails.employeeLastName    = subscription.EmployeeLastName;
        subscriptionDetails.clientCompanyName   = subscription.ClientCompanyName;
        overallCount                            = subscription.OverallCount;
        subscriptionRequestList.push(subscriptionDetails);         
    });

    var responseObject = {
        data : {
            "trialSubscriptionRequestList"       : subscriptionRequestList,
            "pageNumber"                         : "",
            "itemsPerPage"                       : "",
            "totalResultCount"                   : overallCount
        },
        message : ""
    }

    return responseObject;
}


const clientUserMedicalRecordsResponse = async (resultSet) => {
    var recordsList = []
    var overallCount = 0;
    resultSet.forEach(records => {
        var recordsDetails = {};
        recordsDetails.recordId            = records.RecordId;
        recordsDetails.clientUserPlanId    = records.ClientUserPlanId;
        recordsDetails.clientId            = records.ClientId;
        recordsDetails.clientEmployeeId    = records.ClientEmployeeId;
        recordsDetails.employeeFirstName   = records.EmployeeFirstName;
        recordsDetails.employeeLastName    = records.EmployeeLastName;
        recordsDetails.clientCompanyName   = records.ClientCompanyName;
        recordsDetails.vendorId            = records.VendorId;
        recordsDetails.isUploaded          = records.IsUploaded;
        recordsDetails.reportUrl           = records.ReportUrl;

        overallCount                       = records.OverallCount;
        recordsList.push(recordsDetails);         
    });

    var responseObject = {
        data : {
            "RecordsList"                        : recordsList,
            "pageNumber"                         : "",
            "itemsPerPage"                       : "",
            "totalResultCount"                   : overallCount
        },
        message : ""
    }

    return responseObject;
}


const activeSubscriptionRequestResponse = async (resultSet) => {
    var subscriptionRequestList = [];
    var overallCount = 0;
    resultSet.forEach(subscription => {
        var subscriptionDetails = {};
        subscriptionDetails.subscriptionRequestId = subscription.SubscriptionRequestId;
        subscriptionDetails.clientUserPlanId      = subscription.ClientUserPlanId;
        subscriptionDetails.clientId              = subscription.ClientId;
        subscriptionDetails.clientEmployeeId      = subscription.ClientEmployeeId;
        subscriptionDetails.employeeFirstName     = subscription.EmployeeFirstName;
        subscriptionDetails.employeeLastName      = subscription.EmployeeLastName;
        subscriptionDetails.clientCompanyName     = subscription.ClientCompanyName;
        overallCount                              = subscription.OverallCount;
        subscriptionRequestList.push(subscriptionDetails);         
    });

    var responseObject = {
        data : {
            "activeSubscriptionRequestList"       : subscriptionRequestList,
            "pageNumber"                         : "",
            "itemsPerPage"                       : "",
            "totalResultCount"                   : overallCount
        },
        message : ""
    }

    return responseObject;
}


const couponDetailsResponse = async (resultSet) => {
    var couponDetailsList = [];
    var overallCount = 0;
    resultSet.forEach(coupon => {
        var couponDetails = {};
        couponDetails.couponId                 = coupon.CouponId;
        couponDetails.vendorId                 = coupon.VendorId;
        couponDetails.description              = coupon.Description;
        couponDetails.expiryDate               = coupon.ExpiryDate;
        couponDetails.isUnlimited              = coupon.IsUnlimited;
        couponDetails.couponCount              = coupon.CouponCount;
        couponDetails.CouponTitle              = coupon.CouponTitle;
        overallCount                           = coupon.OverallCount;
        couponDetailsList.push(couponDetails);         
    });

    var responseObject = {
        data : {
            "couponDetailsList"                  : couponDetailsList,
            "pageNumber"                         : "",
            "itemsPerPage"                       : "",
            "totalResultCount"                   : overallCount
        },
        message : ""
    }

    return responseObject;
}

const getDashboardDetailsResponse = async (dashboardResponse) => {
    var subscriptionDetails = {};
    subscriptionDetails.totalMembership = dashboardResponse[0].TotalSubscriptions;
    subscriptionDetails.activeMembership = dashboardResponse[0].ActiveMembership;
    subscriptionDetails.availableMembership = dashboardResponse[0].TotalSubscriptions - dashboardResponse[0].ActiveMembership;
    subscriptionDetails.currentTrials = dashboardResponse[0].CurrentTrial;
    subscriptionDetails.trialOpenRequests = dashboardResponse[0].CurrentTrialRequests;
    subscriptionDetails.subscriptionOpenRequests = dashboardResponse[0].SubscriptionRequests;
    var responseObject = {
        data : subscriptionDetails,
        message : ""
    }

    return responseObject;
}

module.exports = {
   subscriptionDetailsResponse,
   trialSubscriptionDetailsResponse,
   getDashboardDetailsResponse,
   trialSubscriptionRequestResponse,
   activeSubscriptionRequestResponse,
   clientUserMedicalRecordsResponse,
   couponDetailsResponse
};