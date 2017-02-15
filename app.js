new Vue({

    // We want to target the div with an id of 'events'
    el: '#location',

    // Here we can register any values or collections that hold data
    // for the application
    data: {
        location: { text: '',name:'',address:'', description: '', details: '' },
        locations: [],
        event: { name: '', description: '', date: '' },
        events: []
    },

    // Anything within the ready function will run when the application loads
    mounted: function() {
        // When the application loads, we want to call the method that initializes
        // some data
    },

    // Methods we want to use in our application are registered here
    methods: {
        // We dedicate a method to retrieving and setting some data
        fetchLocations: function() {
            var locations = [
                {
                    id: 1,
                    name: 'NANTES MARTYRS',
                    address: '16 boulevard des Martyrs Nantais de la Résistance (station TOTAL) 44000 NANTES',
                    details: '2015-09-10'
                },
                {
                    id: 2,
                    name: 'CARQUEFOU ',
                    address: '24 ROUTE DE PARIS 44470 CARQUEFOU',
                    date: '2015-10-02'
                },
                {
                    id: 3,
                    name: 'SAINT-HERBLAIN ',
                    address: '331 route de Vannes 44800 ST-HERBLAIN',
                    date: '2016-03-11'
                }
            ];

            // Set the collection of events
            this.locations = locations;

            // or push them on separately
            // for (var i in events) {
            //   this.events.push(events[i]);
            // }
        },

        // Adds an event to the existing events array
        searchLocations: function() {
            this.fetchLocations();
        },

        deleteEvent: function(index) {
            if(confirm("Are you sure you want to delete this event?")) {
                // $remove is a Vue convenience method similar to splice
                this.events.splice(index, 1);
            }
        }
    }
});
