<?= $this->include('layout/custom-head'); ?>
		<!-- Font Family -->
		<link href="https://fonts.googleapis.com/css?family=Comfortaa:300,400,700" rel="stylesheet">
	</head>

	<body class="h-100vh bg-style light-mode default-sidebar">

		<div class="page">
			<div class="page-content">
				<div class="container text-center  relative">
					<div class="display-1 text-white mb-5 font-weight-bold">401</div>
					<h1 class="h3  mb-3 font-weight-bold text-white">Un Authorized Error!</h1>
					<p class="h5 font-weight-normal mb-7 leading-normal text-white-80">You may have mistyped the address or the page may have moved.</p>
					<a class="btn btn-secondary" href="<?php echo base_url('pages/index'); ?>"><i class="fe fe-arrow-left-circle mr-1"></i>Back to Home</a>
				</div>
			</div>
		</div>
<?= $this->include('layout/custom-footer'); ?>	
	</body>
</html>