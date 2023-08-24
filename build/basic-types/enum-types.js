"use strict";
/**
 * An enum is a group of named constant values. Enum stands for enumerated type.
 * 1. First, use the enum keyword followed by the name of the enum.
 * 2. Then, define constant values for the enum.
 * Syntax:
 *  enum name {constant1, constant2, ...};
 */
const enumTypes = () => {
    let Month;
    (function (Month) {
        Month[Month["January"] = 1] = "January";
        Month[Month["February"] = 2] = "February";
        Month[Month["March"] = 3] = "March";
        Month[Month["April"] = 4] = "April";
        Month[Month["May"] = 5] = "May";
        Month[Month["June"] = 6] = "June";
        Month[Month["July"] = 7] = "July";
        Month[Month["August"] = 8] = "August";
        Month[Month["September"] = 9] = "September";
        Month[Month["October"] = 10] = "October";
        Month[Month["November"] = 11] = "November";
        Month[Month["December"] = 12] = "December";
    })(Month || (Month = {}));
    ;
    function isItSummer(month) {
        let isSummer;
        console.log(Month.January);
        console.log(Month.December);
        console.log(month);
        switch (month) {
            case Month.June:
            case Month.July:
            case Month.August:
                isSummer = true;
                break;
            default:
                isSummer = false;
                break;
        }
        return isSummer;
    }
    console.log(isItSummer(Month.June));
    console.log(Month);
    let ApprovalStatus;
    (function (ApprovalStatus) {
        ApprovalStatus[ApprovalStatus["Draft"] = 0] = "Draft";
        ApprovalStatus[ApprovalStatus["Submitted"] = 1] = "Submitted";
        ApprovalStatus[ApprovalStatus["Approved"] = 2] = "Approved";
        ApprovalStatus[ApprovalStatus["Rejected"] = 3] = "Rejected";
    })(ApprovalStatus || (ApprovalStatus = {}));
    ;
    const request = {
        id: 1,
        status: ApprovalStatus.Approved,
        description: 'Please approve this request'
    };
    if (request.status === ApprovalStatus.Approved) {
        console.log('Send email to the Applicant ... ');
    }
};
enumTypes();
/**
 * Summary
 * A TypeScript enum is a group of constant values.
 * Under the hood, an enum a JavaScript object with named properties declared in the enum definition.
 * Do use an enum when you have a small set of fixed values that are closely related and known at compile time.
 */ 
