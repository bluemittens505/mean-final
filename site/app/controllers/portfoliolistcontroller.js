portfolioApp.controller('PortfolioListController', function( $scope, $firebaseArray ) {

	var myFirebaseRef = new Firebase("https://newport-images.firebaseio.com/portfolios");
	$scope.portfolios = $firebaseArray(myFirebaseRef);

	$scope.favorites = [];
	$scope.add_favorite_error_msg = '';

	$scope.portfolios.$loaded().then( function() {

		var maxid = $scope.portfolios.length;

		$scope.getShowStatus = function (id) {
			if ( $scope.portfolios[id - 1].picked == true ) {
				return false;
			} else {
				return true;
			}
		};

		$scope.getOrientation = function (id) {
			if ( $scope.portfolios[id - 1].orientation == 'portrait' ) {
				return 'pt';
			} else {
				return 'ls';
			}
		};

		$scope.addFavorite = function (new_favorite) {
			if ( new_favorite.id < 1 || new_favorite.id > maxid ) {
				$scope.add_favorite_error_msg = 'Invalid id. Please pick an id between 1 and ' + maxid + '.';
			} else if ( $scope.portfolios[new_favorite.id - 1].picked ) {
				$scope.add_favorite_error_msg = '#' + new_favorite.id + ' is already in your favorites. Please pick another photo.';
				$scope.favorite = {};
			} else {
				$scope.favorites.push($scope.portfolios[new_favorite.id - 1]);
				$scope.portfolios[new_favorite.id - 1].picked = true;
				$scope.favorite = {};
				$scope.add_favorite_error_msg = '';
			}
		};
	})
	.catch( function(error) {
		console.log("Error:", error);
	});


	// var portfolios = [

	// {id: 1,
	// name: '0331',
	// title: 'Hoboken Train Station',
	// date: '02-08-2015',
	// description: 'The Hoboken train station during a winter storm.',
	// imageurl: 'IMG_0331_slide.JPG',
	// imageurl_large: 'IMG_0331_small.JPG',
	// orientation: 'landscape'},

	// {id: 2,
	// name: '0802',
	// title: 'Hoboken Train Station',
	// date: '07-08-2015',
	// description: 'The Hoboken Train Station before a rain storm.',
	// imageurl: 'IMG_0802_slide.JPG',
	// imageurl_large: 'IMG_0802_small.JPG',
	// orientation: 'landscape'},

	// {id: 3,
	// name: '0337',
	// title: 'Hoboken Train Station',
	// date: '02-16-2015',
	// description: 'The fish estuary next to the Hoboken train station in winter.',
	// imageurl: 'IMG_0337_slide.JPG',
	// imageurl_large: 'IMG_0337_small.JPG',
	// orientation: 'landscape'},

	// {id: 4,
	// name: '0312',
	// title: 'Midtown Manhattan',
	// date: '01-27-2015',
	// description: 'Midtown Manhattan with a view of the Empire State Building.',
	// imageurl: 'IMG_0312_slide.JPG',
	// imageurl_large: 'IMG_0312_small.JPG',
	// orientation: 'landscape'},

	// {id: 5,
	// name: '0466',
	// title: 'Midtown Manhattan',
	// date: '05-08-2015',
	// description: 'Midtown Manhattan with a view of the Empire State Building at night.',
	// imageurl: 'IMG_0466_slide.JPG',
	// imageurl_large: 'IMG_0466_small.JPG',
	// orientation: 'landscape'},

	// {id: 6,
	// name: '0493',
	// title: 'Empire State Building',
	// date: '05-08-2015',
	// description: 'The Empire State Building in colors.',
	// imageurl: 'IMG_0493_slide.JPG',
	// imageurl_large: 'IMG_0493_small.JPG',
	// orientation: 'portrait'},

	// {id: 7,
	// name: '0529',
	// title: 'Fireworks',
	// date: '07-04-2015',
	// description: 'Macy\'s fireworks on the 4th of July.',
	// imageurl: 'IMG_0529_slide.JPG',
	// imageurl_large: 'IMG_0529_small.JPG',
	// orientation: 'landscape'},

	// {id: 8,
	// name: '0576',
	// title: 'Fireworks',
	// date: '07-04-2015',
	// description: 'More Macy\'s fireworks on the 4th of July.',
	// imageurl: 'IMG_0576_slide.JPG',
	// imageurl_large: 'IMG_0576_small.JPG',
	// orientation: 'landscape'},

	// {id: 9,
	// name: '0583',
	// title: 'Promenade',
	// date: '07-08-2015',
	// description: 'The promenade behind Laguna.',
	// imageurl: 'IMG_0583_slide.JPG',
	// imageurl_large: 'IMG_0583_small.JPG',
	// orientation: 'landscape'},

	// {id: 10,
	// name: '0590',
	// title: 'Promenade',
	// date: '07-08-2015',
	// description: 'The promenade behind Laguna with a view of the Freedom Tower.',
	// imageurl: 'IMG_0590_slide.JPG',
	// imageurl_large: 'IMG_0590_small.JPG',
	// orientation: 'landscape'},

	// {id: 11,
	// name: '0597',
	// title: 'Wildlife',
	// date: '07-08-2015',
	// description: 'Three Canadian Geese.',
	// imageurl: 'IMG_0597_slide.JPG',
	// imageurl_large: 'IMG_0597_small.JPG',
	// orientation: 'landscape'},

	// {id: 12,
	// name: '0600',
	// title: 'Promenade',
	// date: '07-08-2015',
	// description: 'The promenade behind Aquablu.',
	// imageurl: 'IMG_0600_slide.JPG',
	// imageurl_large: 'IMG_0600_small.JPG',
	// orientation: 'landscape'},

	// {id: 13,
	// name: '0602',
	// title: 'Downtown Manhattan',
	// date: '07-08-2015',
	// description: 'A view of the Freedom Tower and surrounding buildings from behind Aquablu at Newport.',
	// imageurl: 'IMG_0602_slide.JPG',
	// imageurl_large: 'IMG_0602_small.JPG',
	// orientation: 'portrait'},

	// {id: 14,
	// name: '0603',
	// title: 'Midtown Manhattan',
	// date: '07-08-2015',
	// description: 'Midtown Manhattan with a view of the Hudson River and the Empire State Building.',
	// imageurl: 'IMG_0603_slide.JPG',
	// imageurl_large: 'IMG_0603_small.JPG',
	// orientation: 'landscape'},

	// {id: 15,
	// name: '0609',
	// title: 'Aquablu',
	// date: '07-08-2015',
	// description: 'The Aquablu at Newport.',
	// imageurl: 'IMG_0609_slide.JPG',
	// imageurl_large: 'IMG_0609_small.JPG',
	// orientation: 'portrait'},

	// {id: 16,
	// name: '0628',
	// title: 'Community Garden',
	// date: '07-08-2015',
	// description: 'Barcelona marigolds in the community garden.',
	// imageurl: 'IMG_0628_slide.JPG',
	// imageurl_large: 'IMG_0628_small.JPG',
	// orientation: 'landscape'},

	// {id: 17,
	// name: '0637',
	// title: 'Community Garden',
	// date: '07-08-2015',
	// description: 'White lilies in the community garden.',
	// imageurl: 'IMG_0637_slide.JPG',
	// imageurl_large: 'IMG_0637_small.JPG',
	// orientation: 'portrait'},

	// {id: 18,
	// name: '0639',
	// title: 'Community Garden',
	// date: '07-08-2015',
	// description: 'A flower bed in the community garden.',
	// imageurl: 'IMG_0639_slide.JPG',
	// imageurl_large: 'IMG_0639_small.JPG',
	// orientation: 'landscape'},

	// {id: 19,
	// name: '0640',
	// title: 'Community Garden',
	// date: '07-08-2015',
	// description: 'A sunflower in the community garden.',
	// imageurl: 'IMG_0640_slide.JPG',
	// imageurl_large: 'IMG_0640_small.JPG',
	// orientation: 'landscape'},

	// {id: 20,
	// name: '0648',
	// title: 'Community Garden',
	// date: '07-08-2015',
	// description: 'Hydrangea in the community garden.',
	// imageurl: 'IMG_0648_slide.JPG',
	// imageurl_large: 'IMG_0648_small.JPG',
	// orientation: 'landscape'},

	// {id: 21,
	// name: '0651',
	// title: 'East Hampton',
	// date: '07-08-2015',
	// description: 'The East Hampton at Newport.',
	// imageurl: 'IMG_0651_slide.JPG',
	// imageurl_large: 'IMG_0651_small.JPG',
	// orientation: 'portrait'},

	// {id: 22,
	// name: '0653',
	// title: 'Pacific',
	// date: '07-08-2015',
	// description: 'The Pacific at Newport.',
	// imageurl: 'IMG_0653_slide.JPG',
	// imageurl_large: 'IMG_0653_small.JPG',
	// orientation: 'portrait'},

	// {id: 23,
	// name: '0660',
	// title: 'Freedom Tower',
	// date: '07-08-2015',
	// description: 'A view of the Freedom Tower from behind the East Hampton at Newport.',
	// imageurl: 'IMG_0660_slide.JPG',
	// imageurl_large: 'IMG_0660_small.JPG',
	// orientation: 'landscape'},

	// {id: 24,
	// name: '0665',
	// title: 'Atlantic',
	// date: '07-08-2015',
	// description: 'The Atlantic at Newport.',
	// imageurl: 'IMG_0665_slide.JPG',
	// imageurl_large: 'IMG_0665_small.JPG',
	// orientation: 'portrait'},

	// {id: 25,
	// name: '0672',
	// title: 'River Court',
	// date: '07-08-2015',
	// description: 'The three flags at River Court.',
	// imageurl: 'IMG_0672_slide.JPG',
	// imageurl_large: 'IMG_0672_small.JPG',
	// orientation: 'landscape'},

	// {id: 26,
	// name: '0677',
	// title: 'Promenade',
	// date: '07-08-2015',
	// description: 'The promenade behind the Atlantic at Newport with a view of the Freedom Tower.',
	// imageurl: 'IMG_0677_slide.JPG',
	// imageurl_large: 'IMG_0677_small.JPG',
	// orientation: 'landscape'},

	// {id: 27,
	// name: '0682',
	// title: 'Roses',
	// date: '07-08-2015',
	// description: 'A sample of the roses found behind the Atlantic at Newport.',
	// imageurl: 'IMG_0682_slide.JPG',
	// imageurl_large: 'IMG_0682_small.JPG',
	// orientation: 'landscape'},

	// {id: 28,
	// name: '0706',
	// title: 'The Lighthouse',
	// date: '07-08-2015',
	// description: 'The Lighthouse behind the Atlantic at Newport.',
	// imageurl: 'IMG_0706_slide.JPG',
	// imageurl_large: 'IMG_0706_small.JPG',
	// orientation: 'portrait'},

	// {id: 29,
	// name: '0714',
	// title: 'Riverside',
	// date: '07-08-2015',
	// description: 'The Riverside at Newport.',
	// imageurl: 'IMG_0714_slide.JPG',
	// imageurl_large: 'IMG_0714_small.JPG',
	// orientation: 'portrait'},

	// {id: 30,
	// name: '0721',
	// title: 'Marina',
	// date: '07-08-2015',
	// description: 'Some boats docked at the Newport Yacht Club and Marina.',
	// imageurl: 'IMG_0721_slide.JPG',
	// imageurl_large: 'IMG_0721_small.JPG',
	// orientation: 'portrait'},

	// {id: 31,
	// name: '0732',
	// title: 'Freedom Tower',
	// date: '07-08-2015',
	// description: 'A view of the Freedom Tower and the Newport Yacht Club and Marina.',
	// imageurl: 'IMG_0732_slide.JPG',
	// imageurl_large: 'IMG_0732_small.JPG',
	// orientation: 'portrait'},

	// {id: 32,
	// name: '0480',
	// title: 'Freedom Tower',
	// date: '05-08-2015',
	// description: 'The Freedom Tower at twilight.',
	// imageurl: 'IMG_0480_slide.JPG',
	// imageurl_large: 'IMG_0480_small.JPG',
	// orientation: 'landscape'},

	// {id: 33,
	// name: '0509',
	// title: 'Freedom Tower',
	// date: '05-08-2015',
	// description: 'The Freedom Tower at night.',
	// imageurl: 'IMG_0509_slide.JPG',
	// imageurl_large: 'IMG_0509_small.JPG',
	// orientation: 'portrait'},

	// {id: 34,
	// name: '0737',
	// title: 'Marina',
	// date: '07-08-2015',
	// description: 'A big boat docked at the Newport Yacht Club and Marina.',
	// imageurl: 'IMG_0737_slide.JPG',
	// imageurl_large: 'IMG_0737_small.JPG',
	// orientation: 'landscape'},

	// {id: 35,
	// name: '0748',
	// title: 'Town Square',
	// date: '07-08-2015',
	// description: 'The Town Square.',
	// imageurl: 'IMG_0748_slide.JPG',
	// imageurl_large: 'IMG_0748_small.JPG',
	// orientation: 'landscape'},

	// {id: 36,
	// name: '0781',
	// title: 'Laguna',
	// date: '07-08-2015',
	// description: 'The Laguna at Newport.',
	// imageurl: 'IMG_0781_slide.JPG',
	// imageurl_large: 'IMG_0781_small.JPG',
	// orientation: 'portrait'},

	// {id: 37,
	// name: '0785',
	// title: 'The Carousel',
	// date: '07-08-2015',
	// description: 'The carousel at Newport Green Park.',
	// imageurl: 'IMG_0785_slide.JPG',
	// imageurl_large: 'IMG_0785_small.JPG',
	// orientation: 'landscape'}

	// ];

	// // To set up data on Firebase
	// var myFirebaseRef = new Firebase("https://newport-images.firebaseio.com");
	// // This goes after above URL
	// var myPortfoliosRef = myFirebaseRef.child('portfolios');
	// myPortfoliosRef.set(portfolios);
		
});