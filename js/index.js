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
			URL: 'mailto:felix.veysseyre@gmail.com',
			tooltip: 'Send me an email'
		},
		{
			icon: 'fa-cloud-download',
			name: 'Download resume',
			URL: 'file/CV - Félix VEYSSEYRE - EN.pdf',
			tooltip: 'Download my resume'
		},
		{
			icon: 'fa-linkedin',
			name: 'LinkedIn',
			URL: 'https://fr.linkedin.com/in/felix-veysseyre',
			tooltip: 'LinkedIn'
		},
		{
			icon: 'fa-github',
			name: 'GitHub',
			URL: 'https://github.com/felixveysseyre',
			tooltip: 'GitHub'
		},
		{
			icon: 'fa-stack-overflow',
			name: 'StackOverflow',
			URL: 'https://stackoverflow.com/users/3483406/félix-veysseyre',
			tooltip: 'StackOverflow'
		},
		{
			icon: 'fa-instagram',
			name: 'Instagram',
			URL: 'https://www.instagram.com/flx.vsr',
			tooltip: 'Instagram'
		},
	];

	$scope.timeLines = [
		{
			type: 'work',
			timeRange: '2015 - ?',
			detailedTimeRange: '01/10/2015 - ?',
			name: 'Software engineer',
			location: 'Lyon, FR',
			URL: 'https://kitware.com',
			text: 'Full stack web developer in charge of all web projects as well as the communication with related customers. Editor of many proposals.',

			company: 'Kitware, Inc.',
			projects: [
				'Conception of a web application, allowing users to view and interact in real time with scientific simulations, using distributed remote rendering',
				'Conception and development of a modular content management web application. Designed to provide high performance, high availability, to be scalable and secure',
				'Conception and development of a image web viewer handling very large images with multiple dimensions (space, time, colors channels, etc.)',
				'Conception and development of a web application, allowing users to view and interact in real time with MATLAB figures',
				'Conception and development of an online PDF generator able to create PDF files from custom templates and data supplied manually',
				'Conception and development of an online team task manager able to handle many types of tasks, teams and various constrains',
			],
		},
		{
			type: 'work',
			timeRange: '2014 - 2015',
			detailedTimeRange: '15/09/2014 - 15/09/2015',
			name: 'Software engineer junior',
			location: 'Lyon, FR',
			URL: 'https://orange.com',
			text: 'Full stack web developer in charge of his final year internship project.',

			company: 'Orange',
			projects: [
				'Conception and development of a distributed and scalable log analyzing web application. Designed to allow real-time browsing, graphing and detection of unusual behaviors from the logs of a cluster of servers',
			],
		},
		{
			type: 'education',
			timeRange: '2014 - 2015',
			detailedTimeRange: '15/09/2014 - 01/07/2015',
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
			detailedTimeRange: '01/07/2013 - 01/07/2014',
			name: 'Software engineer junior',
			location: 'Chapel Hill, USA',
			URL: 'https://kitware.com',
			text: 'Gap year in computer science, data analysis and data visualization.',

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
			detailedTimeRange: '01/09/2011 - 01/07/2013',
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
			detailedTimeRange: '01/09/2009 - 01/07/2011',
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
				'React',
				'AngularJS',
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
				'GoogleMaps API',
				'GoogleChart',
				'Plotly.js',
				'OpenLayers',
				'Three.js',
				'VTK.js',
				'ParaViewWeb',
			],
			nextSkills: []
		},
		{
			name: 'System administration',
			currentSkills: [
				'Unix',
				'Shell',
				'Apache',
				'Crontab',
				'Iptable',
				'RSYSLOG',
			],
			nextSkills: []
		},
		{
			name: 'Software',
			currentSkills: [
				'Python',
			],
			nextSkills: []
		},
		/*
		{
			name: 'Testing',
			currentSkills: [
				'Behat',
				'PHPUnit',
			],
			nextSkills: []
		},
		*/
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
				'Git',
				'Travis',
				'Docker',
				'Composer',
				'NPM',
				'WebPack',
				'ESLint',
			],
			nextSkills: []
		},
	];

	$scope.languageSkills = [
		{
			name: 'French',
			text: 'Native speaker',
			certification: null
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