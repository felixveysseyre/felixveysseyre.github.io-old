/* Application creation */

var app = angular.module('MainApp', []);

/* Controllers */

app.controller('MainController', function($rootScope, $scope, $window) {

	/* Data */

	$scope.informations = [
		{
			icon: 'fa-envelope',
			label: 'Email',
			text: 'felix.veysseyre@gmail.com',
			helpCallback: false
		},
		{
			icon: 'fa-institution',
			label: 'Company',
			text: 'Kitware, Inc.',
			helpCallback: function() {
				$scope.openURL('https://kitware.com');
			}
		},
		{
			icon: 'fa-map-marker',
			label: 'Location',
			text: 'Lyon, FR',
			helpCallback: function() {
				$scope.toggleDisplayLocation();
			}
		},
		{
			icon: 'fa-globe',
			label: 'Nationality',
			text: 'French',
			helpCallback: false
		},
		{
			icon: 'fa-birthday-cake',
			label: 'Age',
			text: moment().diff('1991-06-11', 'years'),
			helpCallback: false
		},
	];

	$scope.networks = [
		{
			icon: 'fa-envelope',
			name: 'Email',
			URL: 'mailto:felix.veysseyre@gmail.com'
		},
		{
			icon: 'fa-cloud-download',
			name: 'Download resume',
			URL: 'file/CV - Félix VEYSSEYRE - EN.pdf'
		},
		{
			icon: 'fa-linkedin',
			name: 'LinkedId',
			URL: 'https://fr.linkedin.com/in/felix-veysseyre'
		},
		{
			icon: 'fa-github',
			name: 'GitHub',
			URL: 'https://github.com/felixveysseyre'
		},
		{
			icon: 'fa-stack-overflow',
			name: 'StackOverflow',
			URL: 'https://stackoverflow.com/users/3483406/félix-veysseyre'
		},
		{
			icon: 'fa-instagram',
			name: 'Instagram',
			URL: 'https://www.instagram.com/flx.vsr'
		},
	];

	$scope.timeLines = [
		{
			type: 'work',
			timeRange: '2015 - ?',
			name: 'R&D engineer',
			location: 'Lyon, FR',
			URL: 'https://kitware.com',
			text: 'Full stack web developer',

			company: 'Kitware, Inc.',
			projects: [
				'Conception of a web application, allowing users to view and interact in real time with scientific simulations, using distributed remote rendering',
				'Conception and development of a modular content management web application. Designed to provide high performance, high availability, to be scalable and secure',
				'Conception and development of a image web viewer handling very large images with multiple dimensions (space, time, colors channels, etc.)',
			],
		},
		{
			type: 'work',
			timeRange: '2014 - 2015',
			name: 'R&D junior engineer',
			location: 'Lyon, FR',
			URL: 'https://orange.com',
			text: 'Full stack web developer, final year internship',

			company: 'Orange',
			projects: [
				'Conception and development of a distributed and scalable log analyzing web application. Designed to allow real-time browsing, graphing and detection of unusual behaviors from the logs of a cluster of servers',
			],
		},
		{
			type: 'education',
			timeRange: '2014 - 2015',
			name: 'Engineering cycle',
			location: 'Lyon, FR',
			URL: 'http://www.cpe.fr/',
			text: 'Fifth year of higher education (theory and practice) in Electronic, Computer sciences and Telecommunication with major in Mathematics and Image Processing. Achievement of a scientific research project on motion analysis, applied to heart tracking',

			school: 'CPE Lyon',
			note: false,
		},
		{
			type: 'work',
			timeRange: '2013 - 2014',
			name: 'R&D junior engineer',
			location: 'Chapel Hill, USA',
			URL: 'https://kitware.com',
			text: 'Gap year in computer science, data analysis and data visualization',

			company: 'Kitware, Inc.',
			projects: [
				'Conception and development of a web application allowing the analysis of several mailing lists and its users',
				'Development in a collaborative pointcloud visualization and managing web application',
				'Conception and development of the processing workflow of pediatric airways imaging data',
			],
		},
		{
			type: 'education',
			timeRange: '2011 - 2013',
			name: 'Engineering cycle',
			location: 'Lyon, FR',
			URL: 'http://www.cpe.fr',
			text: 'Third and fourth year of higher education (theory and practice) in Electronic, Computer sciences and Telecommunication with taking of optional modules in graphs and algorithms, optimization technics and modeling technics',

			school: 'CPE Lyon',
			note: 'Scientific Award of Excellence',
		},
		{
			type: 'education',
			timeRange: '2009 - 2011',
			name: 'Preparatory class',
			location: 'Lyon, FR',
			URL: 'http://www.prepa-cpe.fr',
			text: 'first and second year of higher education (theory and practice) in Mathematics, Physics, Engineering Sciences and languages',

			school: 'Preparatory class for CPE Lyon',
			note: false,
		},
	];

	$scope.technicalSkillGroups = [
		{
			name: 'Backend',
			currentSkills: [
				'Symfony',
				'CodeIgniter',
				'Doctrine',
			],
			nextSkills: [
				'Laravel',
				'Django',
			]
		},
		{
			name: 'Frontend',
			currentSkills: [
				'AngularJS',
				'React',
				'jQuery UI',
				'jQuery',
				'Twig',
				'LESS',
				'CSS',
			],
			nextSkills: [
				'Angular2',
			]
		},
		{
			name: 'Database',
			currentSkills: [
				'MongoDB',
				'MySQL',
			],
			nextSkills: []
		},
		{
			name: 'Web visualisation',
			currentSkills: [
				'Three.js',
				'VTK.js',
				'WebGL',
				'ParaViewWeb',
				'GoogleChart',
				'Plotly.js',
				'GoogleMaps API',
				'OpenLayers',
			],
			nextSkills: []
		},
		{
			name: 'System administration',
			currentSkills: [
				'Unix',
				'Apache',
				'Crontab',
				'Shell',
				'Python',
				'RSYSLOG',
				'Iptable',
			],
			nextSkills: []
		},
		{
			name: 'Software',
			currentSkills: [
				'C++',
				'Qt',
				'CMake',
			],
			nextSkills: []
		},
		{
			name: 'Testing',
			currentSkills: [
				'Behat',
				'PHPUnit',
			],
			nextSkills: []
		},
		{
			name: 'Data analysis',
			currentSkills: [
				'MATLAB',
				'ParaView',
				'SciPy',
				'MatPlotLib',
			],
			nextSkills: []
		},
		{
			name: 'Cloud computing',
			currentSkills: [
				'AWS',
			],
			nextSkills: [
				'GoogleCloudPlatform'
			]
		},
		{
			name: 'Machine learning',
			currentSkills: [],
			nextSkills: [
				'TensorFlow'
			]
		},
		{
			name: 'Others',
			currentSkills: [
				'Git', 'Travis', 'Composer', 'NPM'
			],
			nextSkills: [
				'Docker'
			]
		},
	];

	$scope.languageSkills = [
		{
			name: 'French',
			text: 'Native speaker',
			certification: false
		},
		{
			name: 'English',
			text: 'Very good working knowledge',
			certification: 'Cambridge English Certificate'
		},
		{
			name: 'Spanish',
			text: 'Good working knowledge',
			certification: 'European honors at scientific baccalaureate'
		},
	];

	$scope.extraCurricularActivities = [
		{
			name: 'Passions',
			activities: 'World traveling, photography, architecture, design, numeric arts, electronic music'
		},
		{
			name: 'Sports',
			activities: 'Cycling, running, swimming and triathlon'
		}
	];

	/* Attributes */

	$scope.numberOfProjectsToDisplayByDefault = 3;
	$scope.displayLocation = false;
	$scope.displayNextSkills = false;

	/* Methods */

	$scope.toggleDisplayLocation = function() {
		$scope.displayLocation = ! $scope.displayLocation;
	};

	$scope.toggleDisplayNextSkills = function() {
		$scope.displayNextSkills = ! $scope.displayNextSkills;
	};

	$scope.openURL = function(URL) {
		$window.open(URL);
	};

});