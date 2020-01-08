use booking_app;
db.dropDatabase();

db.bookings.insertMany([
    {
        Name: "Mark",
        Email: "mark@mail.com",
        CheckedIn: true
    },

    {
        
        Name: "Debbie",
        Email: "Debbie@email.co.uk",
        CheckedIn: true
    },

    {
        Name: "Sven",
        Email: "sven@mailbox.co.uk",
        CheckedIn: false
    },

    {
        Name: "Brad",
        Email: "brad@email.com",
        CheckedIn: true
    },

    {
        Name: "Kyle",
        Email: "kyle@mail.co.uk",
        CheckedIn: false
    },
]);