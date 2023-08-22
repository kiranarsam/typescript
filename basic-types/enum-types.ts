/**
 * An enum is a group of named constant values. Enum stands for enumerated type.
 * 1. First, use the enum keyword followed by the name of the enum.
 * 2. Then, define constant values for the enum.
 * Syntax:
 *  enum name {constant1, constant2, ...};
 */

const enumTypes = () => {

    enum Month {
        January = 1, // by default, it is takes with 0, we can specify use value
        February,
        March,
        April,
        May,
        June,
        July,
        August,
        September,
        October,
        November,
        December
    };

    function isItSummer(month: Month) {
        let isSummer: boolean;
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


    enum ApprovalStatus {
        Draft,
        Submitted,
        Approved,
        Rejected
    };

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