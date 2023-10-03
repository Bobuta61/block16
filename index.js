const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// using the above customer information, create a program for their checkout
// that gives the total cost of refills to include if they have subscription or coupon

// If they subscription, customer entitled to 25% discount



function myDiscount(customer) {

if (customer.subscription) {

    return .75; }

    return 1;


}

// function myDiscount(customer) {

//     if (customer.subscription) {
    
//         return .75; }
    
//         return 1;
    
    
    // }
    // console.log(myDiscount(sarah))

    // function myCoupon(customer) {

    //     if (customer.coupon) {
        
    //         return -10; }
        
    //         return 0;
        
        
    //     }
    //     console.log(myCoupon(timmy))

    function myCoupon(customer) {

        if (customer.coupon) {
        
            return -10; }
        
            return 0;
        
        
        }
        

        // create function with the total amount of the purchase.
        //



        function totalPurchase(customer) {

            const subscriptionDiscount = (myDiscount (customer));
            const couponDiscount = myCoupon(customer)
            return customer.pricePerRefill * customer.refills * subscriptionDiscount + couponDiscount;


        
        }
        
        const customerTotal = totalPurchase(rocky);

        console.log(`Your grand total is ${customerTotal}`)