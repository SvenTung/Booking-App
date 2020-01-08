use bookings_app;

db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Mark",
        email: "mark@mail.com",
        checkedIn: true
    },

    {
        
        name: "Debbie",
        email: "Debbie@email.co.uk",
        checkedIn: true
    },

    {
        name: "Sven",
        email: "sven@mailbox.co.uk",
        checkedIn: false
    },

    {
        name: "Brad",
        email: "brad@email.com",
        checkedIn: true
    },

    {
        name: "Kyle",
        email: "kyle@mail.co.uk",
        checkedIn: false
    },
]);
