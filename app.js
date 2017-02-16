new Vue({

    // We want to target the div with an id of 'events'
    el: '#main',

    // Here we can register any values or collections that hold data
    // for the application
    data: {
        location: { text: '',name:'',address:'', description: '', details: '' },
        locations: [],
        event: { name: '', description: '', date: '' },
        posts:[],
        searchSeen: true,
        btnClearSeen: false,
        btnReturnListSeen: false,
        locationsListingSeen: false,
        locationItinerary : false,
        detailsLocationId: false
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
                    name: 'Mairie Centrale de Nantes',
                    address: '29 Rue de Strasbourg, 44000 Nantes',
                    details: {
                        schedule : 'Lundi 10h 17h',
                        text: "lorem ipsum",
                        phone: "02-97-00-00-00"
                    }
                },
                {
                    id: 2,
                    name: 'Mairie annexe Nantes Sud',
                    address: '2bis Route de Clisson',
                    details: {
                        schedule : 'Lundi 10h 17h',
                        text: "lorem ipsum",
                        phone: "02-97-00-00-01"
                    }
                },
                {
                    id: 3,
                    name: 'Hotel de ville',
                    address: '2 Rue de l\'Hôtel de Ville',
                    details: {
                        schedule : 'Lundi 10h 17h',
                        text: "lorem ipsum",
                        phone: "02-97-00-00-03"
                    }
                }
            ];

            // Set the collection of events
            this.locations = locations;
        },

        //Ajax call test
        getPosts: function() {
            this.$http.get('https://jsonplaceholder.typicode.com/posts').then(
                function (response) {
                    this.posts = response.body;
                    console.log(response.body);
                }, function (error) {
                    // handle error
                });
        },

        searchLocations: function() {
            this.btnClearSeen = true;
            this.btnReturnListSeen = false;
            this.searchSeen = false;
            this.detailsLocationId = false;
            this.locationsListingSeen = true;
            this.locationItinerary = false;
            this.detailsLocationId = -1;
            this.fetchLocations();
        },

        clearAll: function() {
            this.locations = [];
            this.searchSeen = true;
            this.detailsLocationId = false;
            this.btnClearSeen = false;
            this.btnReturnListSeen = false;
            this.locationItinerary = false;
        },

        getDetailsLocation: function(index) {
            this.detailsLocationId = index
        },

        goToLocation: function(locationItinerary) {
            this.btnClearSeen = true;
            this.btnReturnListSeen = true;
            this.searchSeen = false;
            this.detailsLocationId = false;
            this.locationsListingSeen = false;
            this.locationItinerarySeen = true;
            this.locationItinerary = locationItinerary;
        },
    }
});
